import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';

const Persons = () => {

  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getPersons() {
    const getUsers = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/person`);
    setPersons(getUsers.data);
    setIsLoading(false)
  } 

  useEffect(() => {
    getPersons();
  }, []);

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
      name: "division",
      label: "Division",
      options: {
        filter: true,
        sort: true,
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
              <Link className="button-table-view" to={`/admin/person/${value}`}>View More</Link>
              <button className="button-table-delete">Delete</button>
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
        <h1 className="h3 mb-0 text-gray-800">Persons</h1>
        <Link to="/admin/person-add" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Person</Link>
      </div>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Person List"}
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