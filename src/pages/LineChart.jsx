import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart components for Line Chart









// src/components/Charts.js


// Register necessary chart components for Line Chart
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const LineChartAgent = ({ data }) => {
  console.log(data, "testChart")
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.datasets,
        fill: false, // No fill under the line
        tension: 0.4, // Curved line tension
        borderWidth: 2, // Line thickness
        color: '#ffffff',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        font:{
          color: '#ffffff',
        },
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          padding: 10,
          color: '#ffffff',
          font: {
            size: 14,
            color: '#ffffff',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '', 
          font: {
            color: '#ffffff',
            size: 16,
          },
        },
        grid: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
          text: 'GOLD PRICES',
          font: {
            color: '#ffffff',
            size: 16,
          },
        },
        grid: {
          display: false, 
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='text-white' style={{ width: '90%', margin: '0 auto', marginTop: '20px' }}> {/* Increased width */}
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
export {LineChart, LineChartAgent}
export default LineChart;
