import React from 'react';
// import { getUser, removeUserSession } from '../../utils/Common'
import QRCode from "qrcode.react";

const Dashboard = (props) => {

  // const user = getUser();

  // const handleLogout = () => {
  //   removeUserSession();
  //   props.history.push('/login');
  // }

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `test.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  return (
    <div>
      {/* Hello {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" /> */}

      <div className="container">
        <div style={{textAlign: "center", marginTop: "20px"}}>
          <h2>Hello Johanss! </h2>
          <QRCode
            id="qr-gen"
            value={`Testing`}
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
    </div>
  )
}

export default Dashboard