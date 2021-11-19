import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';

const Division = () => {

  const [division, setDivision] = useState([]);
  async function getDivision() {
    const getDivision = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division`);
    setDivision(getDivision.data);
  }

  useEffect(() => {
    getDivision();
  }, []);

  // const columns = [
  //   { name: "Division", options: { filterOptions: { fullWidth: true } } },
  //   "Actions"
  // ];

  const columns = [
    {
      name: "Division",
      options: {
        filter: true,
      }
    },
    {
      name: "Edit",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Link>{division._id}</Link>
          );
        }
      }
    }
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
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  return (
    <>
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Divisions</h1>
        <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Division</a>
      </div>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Divisions Data"}
          data={division}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
    </>
  )
}

export default Division