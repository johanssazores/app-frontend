import React from 'react';
import Grid from '@mui/material/Grid';
import { Pie, Line } from "react-chartjs-2";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AdminDash = () => {

  const dataPopulation = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: '# of Votes',
        data: [65, 71],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',

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
        data: [9, 24, 47, 28, 28, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
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




  const workStatus = {
    labels: ['Permanent/Regular', 'Part-time', 'Contractual', 'Project Based', 'On-Call', 'Contract of Service', 'Job Order', 'Not Applicable/No work'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 7, 47, 23, 2, 3, 0, 42],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'grey',
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
          "#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"
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
          "#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"
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
      <Tabs>
      <TabList>
        <Tab>Data Analytics</Tab>
        <Tab>Predictive Analytics</Tab>
      </TabList>

      <TabPanel>
      <Grid container>


      <Grid item xs={12}>
        <div>
            <Tabs>
              <TabList>
                <Tab>Population</Tab>
                <Tab>Age Group</Tab>
                <Tab>Work Status</Tab>
                <Tab>Medical Record</Tab>
                <Tab>Total Pregnant</Tab>
                <Tab>Education</Tab>
              </TabList>

              <TabPanel>
                <div className="row">
                  <div className="col-md-5">
                    <Pie data={dataPopulation} />
                  </div>
                  <div className="col-md-6">
                    <h3>Total Population as of 2021</h3>
                    <h4>Total Population: 136</h4>
                    <h5> <span className="label-chart" style={{backgroundColor: "rgba(255, 99, 132, 0.2)"}}></span> Male:	65 </h5>
                    <h5> <span className="label-chart" style={{backgroundColor: "rgba(54, 162, 235, 0.2)"}}></span>Female:	71 </h5>
                  </div>
                </div>
              </TabPanel>
            

              <TabPanel>
                <div className="row">
                  <div className="col-md-5">
                  <Pie data={AgeGroup} />
                  </div>
                  <div className="col-md-6">
                    <h3>Age Group</h3>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(255, 99, 132, 0.2)"}}></span> 0 - 10 years old:	9 </h5>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(54, 162, 235, 0.2"}}></span> 11 - 25 years old:	24 </h5>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(255, 206, 86, 0.2"}}></span> 26 - 35 years old:	47 </h5>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(75, 192, 192, 0.2)"}}></span> 36 - 45 years old:	28 </h5>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(153, 102, 255, 0.2)"}}></span> 46 - 55 years old:	28 </h5>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(153, 102, 255, 0.2)"}}></span> 56 - 65 years old:	0 </h5>
                    <h5><span className="label-chart" style={{backgroundColor: "rgba(255, 159, 64, 0.2)"}}></span> 65 years old above:	0 </h5>
                  </div>
                </div>
              </TabPanel>
              
              <TabPanel>
                <div className="row">
                  <div className="col-md-5">
                  <Pie data={workStatus} />
                  </div>
                  <div className="col-md-4">
                  <h3>Work Status</h3>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(255, 99, 132, 0.2)"}}></span> Permanent/Regular:	12 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(54, 162, 235, 0.2)"}}></span> Part-time:	7 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(255, 206, 86, 0.2)"}}></span> Contractual:	47 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(75, 192, 192, 0.2)"}}></span> Project Based:	23 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(153, 102, 255, 0.2)"}}></span> On-Call:	2 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(255, 159, 64, 0.2)"}}></span> Contract of Service:	3 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "rgba(153, 102, 255, 0.2)"}}></span> Job Order:	0 </h5>
                  <h5><span className="label-chart" style={{backgroundColor: "grey"}}></span> Not Applicable/No work:	42 </h5>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row">
                  <div className="col-md-5">
                  <Pie data={medRecords} />
                  </div>
                  <div className="col-md-4">
                    <h3>Medical Records</h3>
                    <h5><span className="label-chart" style={{backgroundColor: "pink"}}></span> With Maintenance:	63</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "violet"}}></span> With Medical Condition:	80</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "purple"}}></span> On going medication:	73</h5>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row">
                  <div className="col-md-5">
                  <Pie data={pregRecords} />
                  </div>
                  <div className="col-md-6">
                    <h3>Pregnant</h3>
                    <h5>Total number of Pregnant: 57</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#fd7f6f"}}></span> 1 month:	7</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#7eb0d5"}}></span> 2 months:	9</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#b2e061"}}></span> 3 months:	5</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#bd7ebe"}}></span> 4 month:	0</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#ffb55a"}}></span> 5 month:	0</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#ffee65"}}></span> 6 months:	12</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#beb9db"}}></span> 7 months:	19</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#fdcce5"}}></span> 8 months:	0</h5>
                    <h5><span className="label-chart" style={{backgroundColor: "#8bd3c7"}}></span> 9 months:	5</h5>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row">
                  <div className="col-md-5">
                  <Pie data={Education} />
                  </div>
                  <div className="col-md-6">
                  <h3>Education</h3>
                  <h5>Total number of college and graduate studies students: </h5>
                  <h5>Total: 60</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "rgba(255, 99, 132, 0.2)"}}></span> 1st year:	6</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "rgba(54, 162, 235, 0.2)"}}></span> 2nd year:	17</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "rgba(255, 206, 86, 0.2)"}}></span> 3rd year:	10</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "rgba(75, 192, 192, 0.2)"}}></span> 4th year:	12</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "rgba(153, 102, 255, 0.2)"}}></span> 5th year:	15</h5>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
      </Grid>

      </Grid>
      </TabPanel>

      <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Projected Population</Tab>
              <Tab>Graduates</Tab>
            </TabList>

            <TabPanel>
              <div className="row">
                <div className="col-md-8">
                <Line data={lineP} />
                </div>
                  <div className="col-md-4">
                  <h3>Projected Population for year 2022 </h3>
                  <h3>Totals: </h3>
                  <h5><span className="label-chart"></span>Dec-21: 136</h5>
                  <h5><span className="label-chart"></span>Jun-22: 172</h5>
                  <h5><span className="label-chart"></span>Dec-22: 193</h5>
                  <h5><span className="label-chart"></span>Jun-23: 193</h5>
                  <h5><span className="label-chart"></span>Dec-23: 193</h5>
                  <h5><span className="label-chart"></span>Jun-24: 193</h5>
                  <h5><span className="label-chart"></span>Dec-24: 193</h5>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row">
                <div className="col-md-4">
                  <Pie data={EducationGraduate} />
                </div>
                  <div className="col-md-6">
                  <h3>Projected number of graduates of college and graduates studies per year </h3>
                  <h5>Total Number of Student: 60</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#e60049"}}></span>Year 2022:	7</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#0bb4ff"}}></span>Year 2023:	22</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#50e991"}}></span>Year 2024:	10</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#e6d800"}}></span>Year 2025:	17</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#9b19f5"}}></span>Year 2026: 6</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#ffa300"}}></span>Year 2027:	0</h5>
                  <h5><span className="label-chart"  style={{backgroundColor: "#dc0ab4"}}></span>Year 2028:	0</h5>
                </div>
              </div>
            </TabPanel>
          </Tabs>
      </TabPanel>
    </Tabs>


    </>
  )
}

export default AdminDash