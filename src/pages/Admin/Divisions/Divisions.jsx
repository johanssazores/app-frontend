import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';

const Divisions = () => {

  const [division, setDivision] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDivision() {
    const getDivision = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division`);
    setDivision(getDivision.data);
    setIsLoading(false)
  }

  useEffect(() => {
    getDivision();
  }, []);

  const SubmitDeleteDivision = (value) => {

    console.log(value)

  }

  const columns = [
    {
     name: "division",
     label: "Division Name",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <>
              <Link className="button-table-view" to={`/division/${value}`}>View More</Link>
              <button className="button-table-delete" onClick={() => { if (window.confirm('Are you sure you wish to delete this division?')) SubmitDeleteDivision(value) } }>Delete</button>
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
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Divisions</h1>
        <Link to="/division-add" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Division</Link>
      </div>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Divisions List"}
          data={division}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
    {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </>
  )
}

export default Divisions