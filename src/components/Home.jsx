import React, { useEffect, useState } from 'react'
import { BsFillArchiveFill, BsListCheck}from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { AiFillMedicineBox } from "react-icons/ai";
import pic2 from './coronapic2.jpg';

 

function Home() {
  const [codata, setCodata] = useState([]);
     
     const getCoviData = async () => {
      try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);  // I have shown the statewise data from the API
        setCodata(actualData.statewise[0])
      } catch (error) {
          console.log(error);
      }
    }

  useEffect(()=>{
       getCoviData();
  }, [])  

    // Bar Chart data
    const data = [
        {
          name: '13/08/2021',
          recovered: 4500,
          death: 2400,
          amt: 2400,
        },
        {
          name: '12/08/2021',
          recovered: 5000,
          death: 2000,
          amt: 2210,
        },
        {
          name: '11/08/2021',
          recovered: 4600,
          death: 2800,
          amt: 2290,
        },
        {
          name: '10/08/2021',
          recovered: 2780,
          death: 1908,
          amt: 2000,
        },
        {
          name: '09/08/2021',
          recovered: 2000,
          death: 1800,
          amt: 2181,
        },
        {
          name: '08/08/2021',
          recovered: 2390,
          death: 1800,
          amt: 2500,
        },
        {
          name: '07/08/2021',
          recovered: 4490,
          death: 2300,
          amt: 2100,
        },
      ];

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>Covid-19 Live Tracker Dashboard</h2>
            <h4>Last Updated: {codata.lastupdatedtime}</h4>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Cases</h3><BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{codata.confirmed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Death</h3><BsListCheck className='card_icon'/>
                </div>
                <h1>{codata.deaths}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Recovered</h3><AiFillMedicineBox className='card_icon'/>
                </div>
                <h1>{codata.recovered}</h1>
            </div>
        </div>

        { <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={100}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="death" fill="red" />
                <Bar dataKey="recovered" fill="green" />
                </BarChart>
            </ResponsiveContainer>

        </div> }
        <hr/>
        <div className="image-container">
           <image>
              <img 
              src={pic2} 
              alt='pic' 
              ></img>
           </image>
        </div>
        <hr/>
    </main>
  )
}

export default Home;
