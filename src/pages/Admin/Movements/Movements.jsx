import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { Line } from "react-chartjs-2";
import moment from 'moment';
// import { Link } from 'react-router-dom';

const Movements = () => {

  const [movement, setMovement] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataDates = [];

  var startDate = new Date('December 30, 2021');
  var nowDate = new Date();

  const SMF = [];
  const SMN = [];

  for (let d = startDate; d < nowDate; d.setDate(d.getDate() + 1)) {
    // console.log(moment(d).format('MMM Do YY'));
    SMF.push(Math.floor((Math.random() * 100) + 1))
    SMN.push(Math.floor((Math.random() * 100) + 1))
    dataDates.push(moment(d).format('MMM Do YY'))
  }

  function addD(accumulator, a) {
    return accumulator + a;
  }

  const SMFSUM = SMF.reduce(addD, 0); 
  const SMNSUM = SMN.reduce(addD, 0); 



  console.log(SMFSUM, SMNSUM);


  async function getMovement() {
    const getMovement = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movement`);
    setMovement(getMovement.data);
    setIsLoading(false)
  }

  useEffect(() => {
    getMovement();
  }, []);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "email",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "ip",
      label: "IP Address",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "region",
      label: "Region",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "country",
      label: "Country",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "locationName",
      label: "Location",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "branch",
      label: "Branch",
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
      name: "time",
      label: "Track Time",
      options: {
        filter: true,
        sort: true,
      }
    },

    // {
    //   name: "_id",
    //   label: "Actions",
    //   options: {
    //     filter: false,
    //     customBodyRender: (value) => {
    //       return (
    //         <>
    //           <Link className="button-table-view" to={`/admin/Movement/${value}`}>View More</Link>
    //           <button className="button-table-delete" onClick={() => { if (window.confirm('Are you sure you wish to delete this Movement?')) SubmitDeleteMovement(value) } }>Delete</button>
    //         </>
    //       );
    //     },
    //   }
    // },
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




  const lineP = {
    labels: dataDates,
    datasets: [
      {
        label: 'SM North',
        data: SMF,
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'SM Fairview - Jollibee',
        data: SMN,
        borderColor: 'red',
        backgroundColor: 'red',
      },
    ],
  };



  return (
    <>
    <div className="container-fluid">
      <h1>Movements Analytics</h1>
      <div className="row">
        <div className="col-md-3">
          <h2>Total People</h2>
          <h3>SM North: 
            <br /> 
          <strong>{SMFSUM}</strong>
          </h3>
          <h3>SM Fairview - Jollibee: 
            <br/>
          <strong>{SMNSUM} </strong></h3>
        </div>
        <div className="col-md-9">
            <Line data={lineP} />
        </div>
      </div>


      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Movements</h1>
        {/* <Link to="/admin/Movement-add" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Movement</Link> */}
      </div>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Movements"}
          data={movement}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
    {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </>
  )
}

export default Movements