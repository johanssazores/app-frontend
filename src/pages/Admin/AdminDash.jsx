import React from 'react';
import Grid from '@mui/material/Grid';
import { Pie, Line } from "react-chartjs-2";

const AdminDash = () => {

  const dataPopulation = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: '# of Votes',
        data: [65, 71],
        backgroundColor: [
          'blue',
          'pink',

        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const AgeGroup = {
    labels: ['0 - 10 years old', '0 - 10 years old', '11 - 25 years old', '	26 - 35 years old', '	36 - 45 years old', '46 - 55 years old', '56 - 65 years old', '65 years old - above'],
    datasets: [
      {
        label: '# of Votes',
        data: [9, 24, 47, 28, 28, 0, 0],
        backgroundColor: [
          'grey',
          'brown',
          'yellow',
          'blue',
          'green',
          'pink',
          'violet',
          'black',
        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const workStatus = {
    labels: ['Permanent/Regular', 'Part-time', 'Contractual', 'Project Based', 'On-Call', 'Contract of Service', 'Job Order', 'Not Applicable/No work'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 7, 47, 23, 2, 3, 0, 42],
        backgroundColor: [
          'purple',
          'violet',
          'brown',
          'yellow',
          'red',
          'blue',
          'green',
          'black',
        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const medRecords = {
    labels: ['With Maintenance', 'With Medical Condition', 'On going medication'],
    datasets: [
      {
        label: '# of Votes',
        data: [63, 80, 73],
        backgroundColor: [
          'pink',
          'violet',
          'purple',
        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const pregRecords = {
    labels: ['1 month', '2 month', '3 month', '4 month', '5 month', '6 month', '7 month', '8 month', '9 month'],
    datasets: [
      {
        label: '# of Votes',
        data: [7, 9, 5, 0, 0, 12, 19, 0 , 5],
        backgroundColor: [
          'brown',
          'blue',
          'violet',
          'green',
          'yellow',
          'purple',
          'red',
          'pink',
          'black',
        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };


  const Education = {
    labels: ['1st year', '2nd year', '3rd year', '4th year', '5th year'],
    datasets: [
      {
        label: '# of Votes',
        data: [6, 17, 10, 12, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };



  const lineP = {
      labels: ['Dec-21', 'Jun-22', 'Dec-22', 'Jun-23', 'Dec-23', 'Jun-24', 'Dec-24'],
      datasets: [
        {
          label: '2022',
          data: [136, 172, 193, 193, 193, 193, 193],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };


    
  const EducationGraduate = {
    labels: ['2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        label: '# of Votes',
        data: [6, 17, 10, 12, 15],
        backgroundColor: [
          'yellow',
          'blue',
          'green',
          'red',
          'violet',
          'brown',
          'black',
        ],
        borderColor: [
          'rgb(33, 24, 19)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h1>Analytics</h1>
      <Grid container spacing={4}>

        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pie data={dataPopulation} />
            </Grid>
            <Grid item xs={6}>
              <h3>Total Population as of 2021</h3>
              <h4>Total Population: 136</h4>
              <h5> <span className="label-chart" style={{backgroundColor: "blue"}}></span> Male:	65 </h5>
              <h5> <span className="label-chart" style={{backgroundColor: "pink"}}></span>Female:	71 </h5>
            </Grid>
          </Grid>
        </Grid>

        {/* 'grey',
          'brown',
          'yellow',
          'blue',
          'green',
          'pink', */}

        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <Pie data={AgeGroup} />
            </Grid>
            <Grid item xs={4}>
              <h3>Age Group</h3>
              <h5><span className="label-chart" style={{backgroundColor: "grey"}}></span> 0 - 10 years old:	9 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "brown"}}></span> 11 - 25 years old:	24 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "yellow"}}></span> 26 - 35 years old:	47 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "blue"}}></span> 36 - 45 years old:	28 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "green"}}></span> 46 - 55 years old:	28 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "violet"}}></span> 56 - 65 years old:	0 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "black"}}></span> 65 years old above:	0 </h5>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pie data={workStatus} />
            </Grid>
            <Grid item xs={6}>
              <h3>Work Status</h3>
              <h5><span className="label-chart" style={{backgroundColor: "purple"}}></span> Permanent/Regular:	12 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "violet"}}></span> Part-time:	7 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "brown"}}></span> Contractual:	47 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "yellow"}}></span> Project Based:	23 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "red"}}></span> On-Call:	2 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "blue"}}></span> Contract of Service:	3 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "green"}}></span> Job Order:	0 </h5>
              <h5><span className="label-chart" style={{backgroundColor: "black"}}></span> Not Applicable/No work:	42 </h5>
            </Grid>
          </Grid>
        </Grid>
 
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pie data={medRecords} />
            </Grid>
            <Grid item xs={6}>
              <h3> Medical Record</h3>
              <h5><span className="label-chart" style={{backgroundColor: "pink"}}></span> With Maintenance:	63</h5>
              <h5><span className="label-chart" style={{backgroundColor: "violet"}}></span> With Medical Condition:	80</h5>
              <h5><span className="label-chart" style={{backgroundColor: "purple"}}></span> On going medication:	73</h5>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pie data={pregRecords} />
            </Grid>
            <Grid item xs={6}>
              <h5>Total number of Pregnant: 57</h5>
              <h5><span className="label-chart" style={{backgroundColor: "brown"}}></span> 1 month:	7</h5>
              <h5><span className="label-chart" style={{backgroundColor: "blue"}}></span> 2 months:	9</h5>
              <h5><span className="label-chart" style={{backgroundColor: "violet"}}></span> 3 months:	5</h5>
              <h5><span className="label-chart" style={{backgroundColor: "green"}}></span> 4 month:	0</h5>
              <h5><span className="label-chart" style={{backgroundColor: "yellow"}}></span> 5 month:	0</h5>
              <h5><span className="label-chart" style={{backgroundColor: "purple"}}></span> 6 months:	12</h5>
              <h5><span className="label-chart" style={{backgroundColor: "red"}}></span> 7 months:	19</h5>
              <h5><span className="label-chart" style={{backgroundColor: "pink"}}></span> 8 months:	0</h5>
              <h5><span className="label-chart" style={{backgroundColor: "black"}}></span> 9 months:	5</h5>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pie data={Education} />
            </Grid>
            <Grid item xs={6}>
              <h5>Total number of college and graduate studies students: </h5>
              <h5>Total: 60</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "rgba(255, 99, 132, 0.2)"}}></span> 1st year:	6</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "rgba(54, 162, 235, 0.2)"}}></span> 2nd year:	17</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "rgba(255, 206, 86, 0.2)"}}></span> 3rd year:	10</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "rgba(75, 192, 192, 0.2)"}}></span> 4th year:	12</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "rgba(153, 102, 255, 0.2)"}}></span> 5th year:	15</h5>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      <div style={{marginTop: "5em"}}></div>

      <h1>Predictive Analytics</h1>
      <Grid container spacing={4}>

        <Grid item xs={10}>
          <Grid container spacing={10}>
            <Grid item xs={8}>
              <h3>Projected Population for year 2022 </h3>
              <Line data={lineP} />
            </Grid>
            <Grid item xs={4}>
              
              <h3>Totals: </h3>
              <h5><span className="label-chart"></span>Dec-21: 136</h5>
              <h5><span className="label-chart"></span>Jun-22: 172</h5>
              <h5><span className="label-chart"></span>Dec-22: 193</h5>
              <h5><span className="label-chart"></span>Jun-23: 193</h5>
              <h5><span className="label-chart"></span>Dec-23: 193</h5>
              <h5><span className="label-chart"></span>Jun-24: 193</h5>
              <h5><span className="label-chart"></span>Dec-24: 193</h5>
            </Grid>
          </Grid>
        </Grid>



        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={6}>
               <h3>Projected number of graduates of college and graduates studies per year </h3>
              <h5>Total Number of Student: 60</h5>
              <Pie data={EducationGraduate} />
            </Grid>
            <Grid item xs={6}>
            <div style={{marginTop: "10em"}}></div>
              <h3>Totals: </h3>
              <h5><span className="label-chart"  style={{backgroundColor: "yellow"}}></span>Year 2022:	7</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "blue"}}></span>Year 2023:	22</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "green"}}></span>Year 2024:	10</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "red"}}></span>Year 2025:	17</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "violet"}}></span>Year 2026: 6</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "brown"}}></span>Year 2027:	0</h5>
              <h5><span className="label-chart"  style={{backgroundColor: "black"}}></span>Year 2028:	0</h5>
            </Grid>
          </Grid>
        </Grid>


      </Grid>
      <div style={{marginTop: "10em"}}></div>
    </>
  )
}

export default AdminDash