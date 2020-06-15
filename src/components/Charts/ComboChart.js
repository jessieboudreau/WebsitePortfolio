import React, { Component } from 'react'
import Chart from "react-apexcharts";
import './Chart.css'

class ComboChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: 
            [
                {
                    name: this.props.data.series1.name,
                    type: this.props.data.series1.type,
                    data: this.props.data.series1.map(a => a.toFixed(0))
                }, 
                {
                    name: this.props.data.series2.name,
                    type: this.props.data.series2.type,
                    data: this.props.data.series2.map(a => a.toFixed(0))
                }
            ],
          options: {
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              type:'solid',
              opacity: [0.35, 1],
            },
            markers: {
              size: 0
            },
            xaxis: {
                type: 'category',
                tickAmount: 17,
                categories: this.props.xAxis.map(a => a.toFixed(0)),
                labels: {
                    show: false,
                }
            },
            yaxis: [
              {
                title: {
                  text: 'Series A',
                },
              },
            ],
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if(typeof y !== "undefined") {
                    return  y.toFixed(0) + " points";
                  }
                  return y;
                }
              }
            }
          },
        
        
        };
      }

    render() {
        return (
        <div className="app">
            <div className="row">
                <div className="col mixed-chart">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        width="100%"
                    />
                </div>
            </div>
        </div>
        );
    }
    }

export default ComboChart;