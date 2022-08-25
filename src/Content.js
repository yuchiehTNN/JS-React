import './Content.css';
import BarChart from './Component/BarChart';
import DouChart from './Component/DouChart';
import {BarData, DouData} from './Data';
import React, {useEffect,useState} from "react";

const Content = () => {
    const douData = {  //get data from Data.js
        douDataYear: DouData.map((data) => data.dataYear),
        douDataMonth : DouData.map((data) => data.dataMonth),
        douDataDay : DouData.map((data) => data.dataDay),
        douDataYearTarget : DouData.map((data) => data.dataTargetYear),
        douDataMonthTarget : DouData.map((data) => data.dataTargetMonth),
        douDataDayTarget : DouData.map((data) => data.dataTargetDay),
    }
    const barData = {  //get data from Data.js
        barDataYear : BarData.map((data) => data.dataYear),
        barDataMonth : BarData.map((data) => data.dataMonth),
        barDataDay : BarData.map((data) => data.dataDay)
    }


    const [interval, setInterval] = useState('年')
    const [dataAssembly, setDataAssembly] = useState(barData.barDataYear[0])
    const [dataWelding, setDataWelding] = useState(barData.barDataYear[1])
    const [dataGrinding, setDataGrinding] = useState(barData.barDataYear[2])
    const [dataCoating, setDataCoating] = useState(barData.barDataYear[3])
    const [datDouAssembly, setDataDouAssembly] = useState([douData.douDataYear[0],douData.douDataYearTarget[0]])
    const [dataDouWelding, setDataDouWelding] = useState([douData.douDataYear[1],douData.douDataYearTarget[1]])
    const [dataDouGrinding, setDataDouGrinding] = useState([douData.douDataYear[2],douData.douDataYearTarget[2]])
    const [dataDouCoating, setDataDouCoating] = useState([douData.douDataYear[3],douData.douDataYearTarget[3]])
    
    const handleDDLChange = (e) => {
        if(e.target.value === '年'){
            setInterval(e.target.value)
        }
        else if(e.target.value === '月'){
            setInterval(e.target.value)
        }
        else{
            setInterval(e.target.value)
        }
    }
    useEffect(() => {
        let parameters;
        if(interval === '年'){
            parameters = {
                barData: barData.barDataYear,
                douData: douData.douDataYear,
                douTargetData: douData.douDataYearTarget,
            }
        }
        else if(interval ==='月'){
            parameters = {
                barData: barData.barDataMonth,
                douData: douData.douDataMonth,
                douTargetData: douData.douDataMonthTarget,
            }
        }
        else{
            parameters = {
                barData: barData.barDataDay,
                douData: douData.douDataDay,
                douTargetData: douData.douDataDayTarget,
            }
        }
        console.log(parameters.barData[0])
        setDataAssembly(parameters.barData[0])
        setDataWelding(parameters.barData[1])
        setDataGrinding(parameters.barData[2])
        setDataCoating(parameters.barData[3])
        setDataDouAssembly([parameters.douData[0], parameters.douTargetData[0]])
        setDataDouWelding([parameters.douData[1], parameters.douTargetData[1]])
        setDataDouGrinding([parameters.douData[2], parameters.douTargetData[2]])
        setDataDouCoating([parameters.douData[3], parameters.douTargetData[3]])
    }, [interval])
    return(
        <div className='container'>
            <div className='column'>
                    <select value={interval} onChange={(e) => handleDDLChange(e)}>
                        <option value="年">年</option>
                        <option value="月">月</option>
                        <option value="日">日</option>
                    </select>
                <div className='col'>
                    <span className="title1">當{interval}生產量</span>
                    <div className='col-flex'>
                        <span className="lab1_title">焊接</span>
                        <div>
                            <DouChart label={["焊接"]} data={datDouAssembly[0]} dataTarget={datDouAssembly[1]} />
                        </div>
                        <div className="div_wrap_data1 right">
							<span className="lab1_tieleS">即時產量</span><br />
							<span className="lab1_data orange">{datDouAssembly[0]}</span><br />
							<span className="lab1_tieleS target">即時目標</span><br />
							<span className="lab1_data">{datDouAssembly[1]}</span><br />
							<span className="lab1_tieleS headcount">產線人數</span><br />
							<span className="lab1_data">56</span>
						</div>
                        <span className="lab1_title">組配</span>
                        <div>
                            <DouChart label={["組配"]} data={dataDouWelding[0]} dataTarget={dataDouWelding[1]} />
                        </div>
                        <div className="div_wrap_data1 right">
							<span className="lab1_tieleS">即時產量</span><br />
							<span className="lab1_data orange">{dataDouWelding[0]}</span><br />
							<span className="lab1_tieleS target">即時目標</span><br />
							<span className="lab1_data">{dataDouWelding[1]}</span><br />
							<span className="lab1_tieleS headcount">產線人數</span><br />
							<span className="lab1_data">56</span>
						</div>
                    </div>
                    <div className='col-flex'>
                        <span className="lab1_title">研磨</span>
                        <div>
                            <DouChart label={["研磨"]} data={dataDouGrinding[0]} dataTarget={dataDouGrinding[1]} />
                        </div>
                        <div className="div_wrap_data1 right">
							<span className="lab1_tieleS">即時產量</span><br />
							<span className="lab1_data orange">{dataDouGrinding[0]}</span><br />
							<span className="lab1_tieleS target">即時目標</span><br />
							<span className="lab1_data">{dataDouGrinding[1]}</span><br />
							<span className="lab1_tieleS headcount">產線人數</span><br />
							<span className="lab1_data">56</span>
						</div>
                        <span className="lab1_title">塗裝</span>
                        <div>
                            <DouChart label={["塗裝"]} data={dataDouCoating[0]} dataTarget={dataDouCoating[1]} />
                        </div>
                        <div className="div_wrap_data1 right">
							<span className="lab1_tieleS">即時產量</span><br />
							<span className="lab1_data orange">{dataDouCoating[0]}</span><br />
							<span className="lab1_tieleS target">即時目標</span><br />
							<span className="lab1_data">{dataDouCoating[1]}</span><br />
							<span className="lab1_tieleS headcount">產線人數</span><br />
							<span className="lab1_data">56</span>
						</div>
                    </div>
                </div>
                
                
            </div>
            <div className='column'>
                <div className='col'>
                    <span className="title1">當{interval}生產量</span>
                    <div className='col-flex'>
                        <div>
                            <BarChart label={["焊接"]} data={dataWelding} />
                        </div>
                        <div>
                            <BarChart label={["組配"]} data={dataAssembly} />
                        </div>
                    </div>
                    <div className='col-flex'>
                        <div>
                            <BarChart label={["研磨"]} data={dataGrinding} />
                        </div>
                        <div>
                            <BarChart label={["塗裝"]} data={dataCoating} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content