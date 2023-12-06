import React, { useContext } from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Menu } from '../../../Context/MenuContext'
import {WindowSize} from '../../../Context/WindowContext'

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const WindowContext = useContext(WindowSize)
  const windowSize = WindowContext.windowSize;
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const data = {
    labels: ["0", "5", "15", "20", "25", "30", "35"],
    datasets: [
      {
        data: [30, 15, 35, 20, 35, 15, 35, 20],
        backgroundColor: 'transparent',
        borderColor: 'green',
        pointBorderColor: 'transparent',
        pointBorderWidth: 10,
        tension: 0.5
      },
      {
        data: [25, 10, 30, 10, 30, 10, 20, 40],
        backgroundColor: 'transparent',
        borderColor: 'red',
        pointBorderColor: 'transparent',
        pointBorderWidth: 10,
        tension: 0.5
      },
    ],
  };

  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        min: 0,
        max: 15,
        ticks: { stepSize: 5 }
      },
      y: {
        min: 0,
        max: 40,
        ticks: {
          stepSize: 10,
          callback: (value) => value + ' $'
        },
        grid: {
          borderDash: [10]
        }
      }
    }
  };

  // Calculate the chart width based on windowSize and sidebar isOpen
  const chartWidth = isOpen ? (windowSize >= 768 ? '50%' : '50%') : '50%';
  const marginLeft = isOpen ? (windowSize >= 768 ? '40rem' : '10rem') : (windowSize >= 768 ? '20rem' : '1rem');

  const chartStyle = {
    width: chartWidth,
    marginLeft: marginLeft,
  };

  return (
    <div className="linear-chart" style={chartStyle}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;