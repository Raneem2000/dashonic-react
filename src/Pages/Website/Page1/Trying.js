import React from 'react';
import { Bar } from 'react-chartjs-2';

const Trying = () => {
  const chartData1 = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Chart 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartData2 = {
    labels: ['Label A', 'Label B', 'Label C', 'Label D', 'Label E'],
    datasets: [
      {
        label: 'Chart 2',
        data: [7, 10, 5, 2, 8],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
    <div className="chart-container">
      <Bar data={chartData1} />
    </div>
    <div className="chart-container">
      <Bar data={chartData2} />
    </div>
  </div>
  );
};

export default Trying;
