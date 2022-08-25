import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import React, {useState, useEffect} from "react"

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    Title,
    Tooltip,
    Legend
);

const DouChart = ({label,data,dataTarget}) => {
    // console.log(data + ";" + dataTarget)
    let realtime_color = "#cc2727";
    function calculate(dataYear, dataYearTarget){
        let result = parseInt(dataYear) / parseInt(dataYearTarget)
        result *= 100
        if(result >=50){
            realtime_color = "#7bced6";
        }
        return result
    }
    const [chartData, setChartData] = useState({
        datasets:[],
    })

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels:label,
            datasets: [
                {
                    label:'',
                    data: [calculate(data,dataTarget),100-calculate(data,dataTarget)],
                    border:"rgba(227, 23, 23, 1)",
                    backgroundColor:[realtime_color,"#F0F8FF"],
                    borderWidth: 1,
                }
            ]
        });
        setChartOptions({
			cutout: 45,
            responsive:true,
            plugins:{
                tooltips: {
                    enabled: false,
                },
                maintainAspectRatio: false,
                elements: {
                    center: {
                        text: "99%",
                        color: "#ee8819",// Default is #000000
                        sidePadding: 32 // Defualt is 20 (as a percentage)
                    }
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
        <div style={{width: 130}}>
            <Doughnut options={chartOptions} data={chartData}/>
        </div>
    )
}
export default DouChart