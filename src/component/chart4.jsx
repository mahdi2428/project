import React,{ PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./chart4.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';




export default function Chart4(){

      const data24 = [{
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },];
      const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}`}</p>
              <p className="desc"></p>
            </div>
          );
        }
    }
    const [Stats , setstate]=React.useState(false);
    function handledropdown1(){
    setstate(!Stats)
}
    return(
        <div>
            <div className="row">
                <div className="big-d col-xl-8" >
                    <div>
                        <div id="all-cahrt">
                            <div className="title1">
                                <div className="all-note">
                                    <p className="note1">254856 USD</p>
                                    <p className="note2">125648 USD (20%)</p>
                                </div>
                                    <div >
                                        <button className="bibtn">All</button>
                                        <button className="bibtn">1M</button>
                                        <button className="bibtn">6M</button>
                                        <button className="bibtn">1Y</button>
                                        <button className="bibtn">YTD</button>
                                    </div>
                            </div>
                                <div className="char-4">
                                    <LineChart  width={770.45} height={300} data={data24} >
                                    <Line  type="monotone" dataKey="uv" stroke="#0d6efd"/>
                                    <Tooltip content={<CustomTooltip/>}/>
                                    </LineChart >
                                </div>
                        </div>
                        
                </div>
                
            </div>
                <div className=" col-xl-4">
                    <div className="color-pro">
                      <div className="p-4">
                        <div className="d-flex justify-content-between ps-2 pb-3 ">
                            <h3 className="fs-4 ">Your Portfolio</h3>
                            <span>
                              <svg onClick={handledropdown1} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots position-relative " viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                              </svg>
                              {Stats && (<div>
                                <ul className="position-absolute chart4-ul shadow list-unstyled p-0">
                                  <li className="pb-2 ps-3 pe-5 pt-2 "><span><i class="bi bi-eye pe-1 "></i></span>Action</li>
                                  <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-trash pe-1"></i></span>Delete</li>
                                  <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-pencil-square pe-1"></i></span>Edit</li>
                                  <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-printer pe-1"></i></span>Print</li>
                                  <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-download pe-1"></i></span>Download</li>
                                </ul>
                              </div>)}
                            </span>
                        </div>
                            <div className="d-flex flex-column justify-content-center align-items-center"> 
                              <p className="m-0">$63411.00</p>
                              <p>Total Balance</p>
                            </div>
                            <div className="d-flex justify-content-between padding-1 aling-items-center  ">
                              <div className="mt-4 d-flex aling-items-center">
                                <img className="p-3 mb-2 chart4-img" src="../image/bitcoin.svg"/>
                                <span className="d-flex pb-2 align-items-center ">Bitcoin</span>
                              </div>
                              <div className="mt-4 pt-2">
                                <span>0.000242 BTC</span>
                                <p className="chart4-ps">0.125 USD</p>
                              </div>
                            </div>
                            <div className=" d-flex aling-items-center padding-1 justify-content-between ">
                              <div className=" d-flex aling-items-center ">
                                <img className="p-3 mb-2 chart4-img" src="../image/litcoin.svg"/>
                                <span className="d-flex pb-3 align-items-center">Litecoin</span>
                              </div>
                              <div className=" pt-2">
                                <span>0.000242 BTC</span>
                                <p className="chart4-ps">0.125 USD</p>
                              </div>
                            </div>
                            <div className=" d-flex aling-items-center justify-content-between ">
                              <div className=" d-flex aling-items-center ">
                                <img className="p-3 mb-2 chart4-img" src="../image/ripple.svg"/>
                                <span className="d-flex pb-3 align-items-center">Ripple</span>
                              </div>
                              <div className=" pt-2">
                                <span>0.000242 BTC</span>
                                <p className="chart4-ps">0.125 USD</p>
                              </div>
                            </div>
                      </div>
                    </div>
                  
                </div>
            </div>
 
        </div>
    )
}