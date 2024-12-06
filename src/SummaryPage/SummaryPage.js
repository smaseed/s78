import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import PieChart from '../PieChart/PieChart';
import './SummaryPage.css';

function SummaryPage() {
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getTypeChartData', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setChartData(response.data); 
        console.log(chartData);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };

    fetchChartData(); // Fetch the chart data when the component mounts
  }, []);
    return (
      <div className="single-card-container">
        <div className='single-card'>
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
              <h1 style={{ color: "#2E7D32" }}>Clean Energy Investments Reach Record Highs in 2024</h1>
              
              <section style={{ marginBottom: "20px" }}>
                <h2>Key Highlights</h2>
                <ul>
                  <p><strong>Historic Milestone:</strong> Over $2 trillion will be invested in clean energy projects in 2024, nearly double the investment in fossil fuels.</p>
                  <p><strong>Shift Since 2015:</strong> Clean energy spending has surpassed fossil fuels due to falling costs, increased efficiency, and policy-driven goals.</p>
                </ul>
              </section>

              <section style={{ marginBottom: "20px" }}>
                <h2>Solar Power and Storage Lead the Way</h2>
                <p>
                  Solar projects now attract more investment than all other power sources combined, including fossil fuels. 
                  Energy storage investments are set to exceed <strong>$50 billion</strong> in 2024, doubling since 2022.
                </p>
                <p>Global grid expansions are being driven by renewable energy growth.</p>
              </section>

              <section style={{ marginBottom: "20px" }}>
                <h2>Challenges in Equal Distribution</h2>
                <ul>
                  <p>
                    Most investments are concentrated in <strong>China, the United States, and the EU</strong>, with developing nations outside China accounting for only 15%.
                  </p>
                  <p>
                    Investments in developing economies need to <strong>quadruple</strong> to meet COP28 climate goals.
                  </p>
                </ul>
              </section>

              <section>
                <p>
                  <strong>Source:</strong>{" "}
                  <a
                    href= "https://www.canarymedia.com/articles/climatetech-finance/-clean-energy-investment-2-trillion-fossil-fuels-record-high"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black" }}
                  >
                    Canary Media
                  </a>
                </p>
              </section>
            </div>
          </div>
        <div className="single-card">
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ color: "#2E7D32" }}>U.S. Clean Energy Tax Credit Market - 2024 Report</h1>
              <ul>
                <p><strong>Total transactions in 2024:</strong> $6.8 billion (first half) with an expected $9-11 billion for the year.</p>
                <p><strong>End-year estimate:</strong> $20 billion to $25 billion in tax credit transactions.</p>
                <p><strong>Dominant technologies:</strong> Wind, solar, energy storage, and advanced manufacturing credits make up 95% of the deals.</p>
                <p><strong>Growth opportunities:</strong> Residential solar, distributed generation, and renewable natural gas (RNG) are expected to boost market size further.</p>
              </ul>
              <div className="pie-chart-container">
                {chartData.length > 0 ? (
                  <PieChart data={chartData} />
                ) : (
                  <p>Loading chart...</p>
                )}
                </div>
                <section>
                  <p>
                    <strong>Source:</strong>{" "}
                    <a
                      href= "https://pv-magazine-usa.com/2024/07/29/u-s-clean-energy-tax-credit-market-to-reach-25-billion-in-2024/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black" }}
                    >
                      pv-magazine
                    </a>
                  </p>
              </section>
              <p><strong>Solar's share:</strong> The above chart depicts the share of transacted tax credits by technology type. Solar accounts for 41% of the available tax credits; hybrid projects (solar + storage) make up an additional 9%. Wind accounts for a significant amount as always.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default SummaryPage;