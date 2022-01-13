import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import moment from 'moment'
import {
  // Bar, Line,
  Doughnut } from "react-chartjs-2";

const toStartOfDate = (date) => {
  return moment(date).utc().hour(0).minute(0).second(0).millisecond(0).toDate();
}

const toEndOfDate = (date) => {
  return moment(date).utc().hour(23).minute(59).second(59).millisecond(999).toDate();
}

const AdminDashboard = () => {
  const [datas, setDatas] = useState();
  const [isLoading, setIsLoading] = useState(null);

  const userJson = sessionStorage.getItem("user");
  const user = JSON.parse(userJson);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request({
        method: 'POST',
        url: `${process.env.REACT_APP_BACKEND_URL}/filter/all-analytics`,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          role: user.role,
          address: user.address,
          startDate: startDate ? toStartOfDate(startDate) : undefined,
          endDate: endDate ? toEndOfDate(endDate) : undefined
        })
      });

      setDatas(response.data);
      setIsLoading(false)
    }
    catch (error) {
      console.error(error);
    }
  }

  const [startDate, setStartDate] = useState(new Date("1920-01-01"));
  const [endDate, setEndDate] = useState(new Date("2050-01-01"));

  const handleChangeStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleChangeEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(datas)

  const datasz = {
    labels: [
      // 'Total Constituents',
      'Pregnant',
      'With Maintenance',
      'Male',
      'Female',
      'Smoking',
      'Drinking'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: datas,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h2>Analytics</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit} style={{display:"flex"}}>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">From Date</label>
                <div className="form-group">
                  <input type="date" placeholder="FROM" className="form-control" onChange={handleChangeStartDate} value={startDate} />
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="">To Date</label>
                <div className="form-group">

                  <input type="date" placeholder="TO" className="form-control" onChange={handleChangeEndDate} value={endDate} />
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="" style={{backgroundColor: "#f5deb300", color: "#f5deb300"}}>ACTION</label>
                <div className="form-group">
                  <button className="btn btn-primary form-control" type="submit">Filter</button>
                </div>
              </div>
            </div>
          </form>
        </Grid>

        <Grid item xs={6}>
          <Doughnut data={datasz} />
        </Grid>

        <Grid item xs={6}>
            <h2>Total Pregnant: {datas[0]}</h2>
            <h2>Total With Maintenance: {datas[1]}</h2>
            <h2>Total Male: {datas[2]}</h2>
            <h2>Total Female: {datas[3]}</h2>
            <h2>Total Smoking: {datas[4]}</h2>
            <h2>Total Drinking: {datas[5]}</h2>
        </Grid>

        {/* <Grid item xs={6}>
         <Line data={data2} />
        </Grid> */}

        {/* <Grid item xs={12} md={6} lg={6}>
          <Bar data={data} />
        </Grid> */}
       {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
      </Grid>
    </>
  )
}

export default AdminDashboard