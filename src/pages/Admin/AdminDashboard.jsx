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
    setIsLoading(true);

    try {
      const queryParams = [];
      
      if (startDate) queryParams.push(`startDate=${toStartOfDate(startDate)}`);
      if (endDate) queryParams.push(`endDate=${toEndOfDate(endDate)}`)

      const getData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/filter/all-analytics?${queryParams.join("&")}`);
      setDatas(getData.data);
      setIsLoading(false)
    }
    catch (error) {
      console.error(error);
    }
  };
  // console.log(datas)

  const datasz = {
    labels: ['Total Constituents', 'Total Pregnant', 'Total with Maintenance', 'Total Male', 'Total Female'],
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

  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ],
  //   datasets: [
  //     {
  //       label: "Data 2021",
  //       data: [45, 53, 85, 41, 44, 65, 85, 41, 44, 65, 50, 24],
  //       fill: false,
  //       borderColor: "rgba(75,192,192,1)"
  //     },
  //     {
  //       label: "Data 2022",
  //       data: [33, 25, 35, 51, 54, 76,33, 25, 35, 51, 54, 76],
  //       fill: false,
  //       borderColor: "#742774"
  //     }
  //   ]
  // };

  // const data2 = {
  //   labels: ["Jan"],
  //   datasets: [
  //     {
  //       label: "District",
  //       data: [54],
  //       fill: false,
  //       borderColor: "violet"
  //     },
  //     {
  //       label: "Barangay",
  //       data: [7],
  //       fill: false,
  //       borderColor: "purple"
  //     },
  //     {
  //       label: "Street Name",
  //       data: [7],
  //       fill: false,
  //       borderColor: "brown"
  //     },
  //     {
  //       label: "Gender",
  //       data: [33],
  //       fill: false,
  //       borderColor: "rgba(75,192,192,1)"
  //     },
  //     {
  //       label: "Maintenance",
  //       data: [13],
  //       fill: false,
  //       borderColor: "green"
  //     },
  //     {
  //       label: "Pregnant",
  //       data: [13],
  //       fill: false,
  //       borderColor: "orange"
  //     },
  //     {
  //       label: "Education",
  //       data: [7],
  //       fill: false,
  //       borderColor: "pink"
  //     }
  //   ]
  // };

  // const startDate = new Date();
  // const labels = [];
  
  // for (let i = 0; i < 6; i++) {
  //   const date = moment(startDate)
  //     .add(i, "days")
  //     .format("YYYY-MM-DD");
  //   labels.push(date.toString());
  // }

  // const dataLine = canvas => {
  //   const ctx = canvas.getContext("2d");
  //   const gradient = ctx.createLinearGradient(0, 0, 100, 0);
  //   return {
  //     backgroundColor: gradient,
  //     labels,
  //     datasets: [
  //       {
  //         label: "# of Pregnant",
  //         data: [12, 19, 3, 50, 2, 3],
  //         borderWidth: 3,
  //         fill: false,
  //         borderColor: "pink"
  //       }
  //     ]
  //   };
  // };




  return (
    <>
      <h2>Analytics</h2>
      <h3>Overall Totals</h3>

      <form onSubmit={handleSubmit}>
        <label>
          From
          <input type="date" onChange={handleChangeStartDate} value={startDate} />
        </label>
        <label>
          To
          <input type="date" onChange={handleChangeEndDate} value={endDate} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Doughnut data={datasz} />
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