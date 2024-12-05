import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import PieChart from '../PieChart/PieChart';

function ReportPage() {

  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getInvestmentsData');
        setChartData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };

    fetchChartData(); // Fetch the chart data when the component mounts
  }, []);

    return (
      <div className="chart-container">
          <div className="pie-chart-container">
            {chartData.length > 0 ? (
              <PieChart data={chartData} />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
      </div>
    );
  }
  
  export default ReportPage;