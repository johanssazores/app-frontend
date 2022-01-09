import React from 'react';
import Grid from '@mui/material/Grid';
import moment from 'moment'
import { Bar, Line } from "react-chartjs-2";

const AdminDashboard = () => {


  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    datasets: [
      {
        label: "Data 2021",
        data: [45, 53, 85, 41, 44, 65, 85, 41, 44, 65, 50, 24],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Data 2022",
        data: [33, 25, 35, 51, 54, 76,33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  const startDate = new Date();
  const labels = [];
  
  for (let i = 0; i < 6; i++) {
    const date = moment(startDate)
      .add(i, "days")
      .format("YYYY-MM-DD");
    labels.push(date.toString());
  }

  const dataLine = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
      backgroundColor: gradient,
      labels,
      datasets: [
        {
          label: "# of Pregnant",
          data: [12, 19, 3, 50, 2, 3],
          borderWidth: 3,
          fill: false,
          borderColor: "pink"
        }
      ]
    };
  };


  return (
    <>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={6}>
          <Bar data={data} />
        </Grid>


        <Grid item xs={12} md={6} lg={6}>
          <Line data={dataLine} />
        </Grid>

        <Grid item xs={10}>
         <Line data={data2} />
        </Grid>
      </Grid>
    </>
  )
}

export default AdminDashboard