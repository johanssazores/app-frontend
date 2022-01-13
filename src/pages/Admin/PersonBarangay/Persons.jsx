import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Persons = () => {

  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sessionD = sessionStorage.getItem("user")
  const ses = JSON.parse(sessionD);

  useEffect(() => {
    async function getPersons() {
      const filteredPerson = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/filter/street`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "role": ses.role,
            "streetName": ses.address,
          })
        }
      )
      setPersons(filteredPerson.data.persons)
      setIsLoading(false)
    } 
    getPersons();
  }, [ses.address, ses.role]);

  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "my_qr.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  const columns = [
    {
     name: "email",
     label: "Email",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "firstName",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "district",
      label: "District",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "streetName",
      label: "Street",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "barangay",
      label: "Barangay",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "_id",
      label: "QR Code",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return (
            <>
              <QRCode
                id="qrCodeEl"
                size={100}
                value={value}
                onClick={downloadQRCode}
                className="qr-class"
              />
            </>
          );
        },
      }
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return (
            <>
              <Link className="button-table-view" to={`/admin/person/${value}`}><ModeEditOutlinedIcon /></Link>
              <button className="button-table-delete"><DeleteOutlineOutlinedIcon /></button>
            </>
          );
        },
      }
    },
   ];

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    tableBodyHeight: "",
    tableBodyMaxHeight: "",
    selectableRowsHideCheckboxes: true,
    // onTableChange: (action, state) => {
    //   console.log(action);
    //   console.dir(state);
    // }
  };

  return (
    <>
      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Constituents VV</h1>
          <Link to="/admin/person-add" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Constituents </Link>
        </div>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"Constituents List"}
            data={persons}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </>
  )
}

export default Persons