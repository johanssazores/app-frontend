import React from 'react'
import QRCode from "react-qr-code";

const QRTest = () => {
  return (
    <div>
      <QRCode value={`${process.env.REACT_APP_FRONTEND_URL}/qrview/61865e749bfdb24e50d20f3d`} />
    </div>
  )
}

export default QRTest