import {useState,useEffect} from 'react'
import axios from 'axios'
import QrReader from 'react-qr-reader';
import moment from 'moment'

const ScannerQR = () => {

    const [location, setLocation] = useState({});
    const [personDetails, setPersonDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false);

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
    <div className="container">
      <div>
        <div className="row">

          <div className="col-md-12">
            <div className="parent-scanner">
              <div className="child-scanner">
                <QrReader
                    delay={300}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                  />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              <br/>
                <h3>Name: {personDetails.firstName} {personDetails.lastName}</h3>
                <h3>Email: {personDetails.email}  </h3>
            </div>
          </div>

        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default ScannerQR