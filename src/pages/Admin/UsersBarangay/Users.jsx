import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Users = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sessionD = sessionStorage.getItem("user")
  const ses = JSON.parse(sessionD);

  useEffect(() => {
    async function getPersons() {
      const filteredPerson = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/filter/user`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "address": ses.address,
          })
        }
      )
      setUsers(filteredPerson.data.users)
      setIsLoading(false)
    } 
    getPersons();
  }, [ses.address]);

  
  // async function getUsers() {
  //   const getUsers = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/filter/user`);
  //   setUsers(getUsers.data);
  //   setIsLoading(false)
  // } 

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const SubmitDeleteUser = (value) => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setIsLoading(false)
      alert('User Deleted')
      window.location.href="/admin/users"
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsLoading(false)
    });
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
      name: "role",
      label: "Role",
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
      name: "barangay",
      label: "Barangay",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "address",
      label: "Address",
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
              <Link className="button-table-view" to={`/admin/user-barangay/${value}`}> <ModeEditOutlinedIcon/> </Link>
              <button className="button-table-delete" style={{marginTop:"20px"}} onClick={() => { if (window.confirm('Are you sure you wish to delete this user?')) SubmitDeleteUser(value) } }> <DeleteOutlineOutlinedIcon /></button>
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
        <h1 className="h3 mb-0 text-gray-800">Barangay Users</h1>
        <Link to="/admin/user-barangay-add" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add User</Link>
      </div>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"User List"}
          data={users}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
    {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </>
  )
}

export default Users