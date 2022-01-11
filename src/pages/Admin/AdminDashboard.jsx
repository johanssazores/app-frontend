import React from 'react';
import Grid from '@mui/material/Grid';
// import moment from 'moment'
import { 
  // Bar, 
  Line } from "react-chartjs-2";

const AdminDashboard = () => {

  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ],
  //   datasets: [
  //     {
  //       label: "Data 2021",
  //       data: [45, 53, 85, 41, 44, 65, 85, 41, 44, 65, 50, 24],
  //       fill: true,
  //       backgroundColor: "rgba(75,192,192,0.2)",
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

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "District",
        data: [54, 3, 23, 43, 54, 12, 7, 86, 2, 24, 12, 35],
        fill: false,
        borderColor: "violet"
      },
      {
        label: "Barangay",
        data: [7, 86, 4, 24, 12, 35, 33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "purple"
      },
      {
        label: "Street Name",
        data: [7, 86, 68, 24, 12, 35, 13, 41, 53, 24, 54, 65],
        fill: false,
        borderColor: "brown"
      },
      {
        label: "Gender",
        data: [33, 53, 85, 41, 44, 65, 24, 12, 35, 13, 41, 2],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Maintenance",
        data: [13, 41, 53, 24, 54, 65, 22, 24, 12, 9, 5, 10],
        fill: false,
        borderColor: "green"
      },
      {
        label: "Pregnant",
        data: [13, 41, 53, 24, 54, 65, 24, 12, 35, 13, 41, 53],
        fill: false,
        borderColor: "orange"
      },
      {
        label: "Education",
        data: [7, 86, 68, 24, 12, 35, 13, 41, 53, 24, 54, 65],
        fill: false,
        borderColor: "pink"
      }
    ]
  };

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
      <Grid container spacing={3}>
        <h2>Analytics</h2>
        <Grid item xs={12}>
         <Line data={data2} />
        </Grid>

        {/* <Grid item xs={12} md={6} lg={6}>
          <Bar data={data} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Line data={dataLine} />
        </Grid> */}

      </Grid>
    </>
  )
}

export default AdminDashboard