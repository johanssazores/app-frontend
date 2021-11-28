import {useState,useEffect} from 'react'
import axios from 'axios'
import QrReader from 'react-qr-reader';


const ScannerQR = () => {

    const [location, setLocation] = useState({});
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

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
        setScanResultWebCam(result);
        console.log(location)
    }
   }

   console.log(location)
  
  return (
    <div className="container">
      <div>
        <div className="row">
          <QrReader
          delay={300}
          style={{width: '100%'}}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
          />
        </div>
        <h3>{scanResultWebCam}</h3>
      </div>
    </div>
  )
}

export default ScannerQR