import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs, CategoryScale, LinearScale, BarController, BarElement } from "chart.js";

ChartJs.register(CategoryScale, LinearScale, BarController, BarElement);

const BarChart = () => {
  const data = {
    labels: ["0", "5", "15", "20", "25", "30", "35"],
    datasets: [
      {
        label: "Sample Data",
        data: [30, 15, 35, 20, 35, 15, 35],
        backgroundColor: "rgb(94, 126, 138,0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        min: 0,
        max: 40,
        ticks: { stepSize: 5 },
      },
      y: {
        min: 0,
        max: 40,
        ticks: {
          stepSize: 10,
          callback: (value) => value + " $",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
