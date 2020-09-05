import React, { Component } from 'react'
import Chart from "chart.js";
import 'chartjs-plugin-labels';
// Chart.defaults.global.legend.display = false;
import theme from 'utils/theme'



class PieChart extends Component {
    constructor(props){
        super(props)
        this.data = props.data;
        this.bgc = [theme.colors.primary.normal, theme.colors.accent.normal, theme.colors.accent.second]
    }
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "pie",
            data: {
                labels: ["B", "W", "T"],
                datasets: [
                    {
                        data: this.data,
                        backgroundColor: this.bgc,
                    }
                ]
            },
            options: {
                plugins: {
                    labels: {
                      // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
                      render: 'procentage',
              
                      // precision for percentage, default is 0
                      precision: 0,
              
                      // identifies whether or not labels of value 0 are displayed, default is false
                      showZero: true,
              
                      // font size, default is defaultFontSize
                      fontSize: 18,
              
                      // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
                      fontColor: '#fff',
              
                      // font style, default is defaultFontStyle
                      fontStyle: 'normal',
              
                      // font family, default is defaultFontFamily
                      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              
                      // draw text shadows under labels, default is false
                      textShadow: true,
              
                      // text shadow intensity, default is 6
                      shadowBlur: 10,
              
                      // text shadow X offset, default is 3
                      shadowOffsetX: -5,
              
                      // text shadow Y offset, default is 3
                      shadowOffsetY: 5,
              
                      // text shadow color, default is 'rgba(0,0,0,0.3)'
                      shadowColor: 'rgba(255,0,0,0.75)',
              
                      // draw label in arc, default is false
                      // bar chart ignores this
                      arc: true,
              
                      // position to draw label, available value is 'default', 'border' and 'outside'
                      // bar chart ignores this
                      // default is 'default'
                      position: 'default',
              
                      // draw label even it's overlap, default is true
                      // bar chart ignores this
                      overlap: true,
              
                      // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
                      showActualPercentages: true,
                    }
                }
              }
            });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}


export default PieChart;