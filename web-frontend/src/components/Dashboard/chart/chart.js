import * as React from 'react';
import styles from './chart.module.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "10pm",
    uv: 4000,
    custemers: 90,
    amt: 2400
  },
  {
    name: "11pm",
    uv: 3000,
    custemers: 70,
    amt: 2210
  },
  {
    name: "12am",
    uv: 2000,
    custemers: 50,
    amt: 2290
  },
  {
    name: "01am",
    uv: 2780,
    custemers: 80,
    amt: 2000
  },
  {
    name: "02am",
    uv: 1890,
    custemers: 20,
    amt: 2181
  },
  {
    name: "03am",
    uv: 2390,
    custemers: 60,
    amt: 2500
  },
  {
    name: "04am",
    uv: 2390,
    custemers: 60,
    amt: 2100
  },
  {
    name: "05am",
    uv: 3190,
    custemers: 80,
    amt: 2000
  },
  {
    name: "06am",
    uv: 3290,
    custemers: 30,
    amt: 2500
  },
  {
    name: "07am",
    uv: 3490,
    custemers: 100,
    amt: 2000
  }
];

const Chart = () => {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer >
        <AreaChart width={660} height={160} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCustemers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e46e61" stopOpacity={7} />
              <stop offset="95%" stopColor="#f09c60" stopOpacity={4} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="custemers"
            stroke="black"
            fillOpacity={1}
            fill="url(#colorCustemers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
