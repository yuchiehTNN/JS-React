import { Bar } from 'react-chartjs-2';
import './Chart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import React, {useState, useEffect} from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({label,data}) => {
    const [chartData, setChartData] = useState({
        datasets:[],
    });

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels:label,
            datasets: [
                {
                    label:'',
                    data: [data],
                    border:"rgba(227, 23, 23, 1)",
                    backgroundColor:"rgba(227, 23, 23, 0.25)",
                    borderWidth: 1,
                }
            ]
        });
        setChartOptions({
            responsive:true,
            maintainAspectRatio: false,
            plugins:{
                tooltips: {
                    enabled: false,
                },
                
                legend: {
                    display: false,
                    labels: {
                        fontColor: "#3f3936",
                    },
                }
            },
            hover: {
                animationDuration: 0
            },
            animations: {
                duration: 1600,
            }
        })
    },[data])

    return(
        <div className='barChartContainer'>
            <Bar options={chartOptions} data={chartData}/>
        </div>
    )
}
export default BarChart