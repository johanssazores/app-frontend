import React from "react";
import { useParams } from 'react-router-dom';
import QRCode from "qrcode.react";

const QRView = () => {
  let {id} = useParams() 

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container">
      <div>
        <QRCode
          id="qr-gen"
          value={id}
          size={290}
          level={"H"}
          includeMargin={true}
        />
        <p>
          <button type="button" onClick={downloadQRCode}>
            Download QR Code
          </button>
        </p>
      </div>
    </div>
  )
}

export default QRView