import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useRef, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}) => {
    const chartData = {
        labels: data.map((item) => item.type),
        datasets: [
          {
            data: data.map((item) => item.value),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C9CBCF',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C9CBCF',
            ],
          },
        ],
      };

    const chartContainer = useRef(null);

    useEffect(() => {
    // Adjust the size of the canvas dynamically
        const resizeChart = () => {
        if (chartContainer.current) {
            chartContainer.current.width = chartContainer.current.offsetWidth;
            chartContainer.current.height = chartContainer.current.offsetWidth;
        }
    };

    // Initial resize
    resizeChart();

    // Resize listener
    window.addEventListener('resize', resizeChart);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', resizeChart);
  }, []);
  return (
    <div>
    <Pie data={chartData} />
  </div>
  )
}

export default PieChart