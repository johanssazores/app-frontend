import {useState,useEffect} from 'react'
import axios from 'axios'
import QrReader from 'react-qr-reader';
import moment from 'moment'

import Box from '@mui/material/Box';


const ScannerQR = () => {

    const [location, setLocation] = useState({});
    const [personDetails, setPersonDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const [sessionUser, setSessionUser] = useState({});
    const sessionD = sessionStorage.getItem("scanner")


    useEffect(() => {
      if(sessionD) {
        setSessionUser(JSON.parse(sessionD))
      }
    }, [sessionD]);

    useEffect( () => {
      const getData = async () => {
        const geo = await axios.get('https://geolocation-db.com/json/')
        const geoResult = geo.data;
        const ipapi = await axios.get(`https://ipapi.co/${geoResult.IPv4}/json/`)
        const ipapiResult = ipapi.data;
        setLocation({geo: geoResult, ipapi: ipapiResult})
      }
      getData()
    }, [])

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setIsLoading(true)
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/person/${result}`).then(response => {
        const personData = response.data;
         let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a')
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/movement`, {
            name: `${personData.firstName} ${personData.lastName}`,
            email: personData.email,
            ip:  location.geo.IPv4,
            region: location.ipapi.region,
            city: location.ipapi.city,
            country: location.ipapi.country_name,
            time: currentDate,
            branch: sessionUser.locationName,
            locationName: sessionUser.branch
          }).then(response => {
            console.log(response.data)
            setPersonDetails(personData)
            setIsLoading(false)
          }).catch(error => {
            console.error(error)
            setIsLoading(false)
          });
      }).catch(error => {
        console.error(error)
        setIsLoading(false)
      });
    }
   }

   console.log(location)

  return (
    <>
      <div style={{display: "flex"}}>
        <Box
          sx={{
            width: 500,
            height: 500,
          }}
        >
          <QrReader
              delay={300}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
        </Box>
        <div style={{padding: "20px"}}>
          <h1>Scanner</h1>
          <h2>Location: {sessionUser.locationName} - {sessionUser.branch} </h2>
          <h3>Name: {personDetails.firstName} {personDetails.lastName}</h3>
          <h3>Email: {personDetails.email}  </h3>
        </div>
      </div>

      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </>
  )
}

export default ScannerQR