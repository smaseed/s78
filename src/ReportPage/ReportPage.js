import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import PieChart from '../PieChart/PieChart';
import './ReportPage.css'

function ReportPage() {

  const [investmentChartData, setInvestmentChartData] = useState([]);
  const [technologyChartData, setTechnologyChartData] = useState([]);
  const [prevChartData, setPrevChartData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchInvestmentChartData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getInvestmentsData', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setInvestmentChartData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };
    const fetchTechnologyChartData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getTypeChartData', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setTechnologyChartData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };
    const fetchPrevData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/get2015InvestmentData', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setPrevChartData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };
    const fetchCurrentData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/get2024InvestmentData', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setCurrentData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };

    fetchInvestmentChartData(); 
    fetchTechnologyChartData();
    fetchPrevData();
    fetchCurrentData();
  }, []);

    return (
      <div className='single-card-container'>

      <div className="single-card">
            <h2>Rising Investments in Clean Energy</h2>
            <section>
                <p>
                  <strong>Source:</strong>{" "}
                  <a
                    href= "https://www.iea.org/reports/world-energy-investment-2024/overview-and-key-findings?utm_campaign=heatmap_am&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--uE-zL2qnaMmDw_PwBJluu5zC_r1ex8Lp0SaMOONMbN-RJKsaHOixKUrEUci6fNUrWouly#:~:text=Rising%20investments%20in%20clean%20energy%20push%20overall%20energy%20investment%20above%20USD%203%20trillion%20for%20the%20first%20time"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black" }}
                  >
                    IEA (2024), World Energy Investment 2024, IEA, Paris
                  </a>
                </p>
              </section>
            <p>
              In 2024, global energy investments are projected to exceed $3 trillion for the first time, with $2 trillion allocated to clean energy technologies and infrastructure. Clean energy spending now surpasses that of fossil fuels, driven by accelerated investment since 2020. Solar PV leads the way, with projected investments exceeding $500 billion, making it the top energy generation technology. Wind and solar investments produce 2.5 times more energy output per dollar than they did a decade ago.
            </p>
              <div className="chart-holder">
                <div className="pie-chart-holder">
                  {prevChartData.length > 0 ? (
                    <>
                      <PieChart data={prevChartData} />
                      <p className="chart-title">Investments in 2015</p>
                    </>
                  ) : (
                    <p>Loading chart...</p>
                  )}
                </div>
                <div className="pie-chart-holder">
                  {prevChartData.length > 0 ? (
                    <>
                      <PieChart data={currentData} />
                      <p className="chart-title">Investments in 2024</p>
                    </>
                  ) : (
                    <p>Loading chart...</p>
                  )}
                </div>
              </div>
              <p>
                The above two charts show how investments in Clean energy has been increased since 2015. Back in the day, Fossil fuels have been given more importance and has been invested. But through out the years, the latest innovations with solar energy, and the way wind and solar energy generations have been increased has led a way for an increase in Clean Energy investments. 
              </p>
              <p>
                Falling costs for solar panels (down 30% in two years) and easing supply chain pressures have mitigated the effects of rising financing costs. Prices for essential minerals and metals, particularly for battery production, have also dropped significantly.
              </p>
              <p>
                Clean energy investment in emerging economies outside China is expected to reach $320 billion in 2024, marking a 50% increase since 2020. Progress is notable in countries like India, Brazil, and parts of Africa, with Africa doubling its clean energy investments since 2020. However, these investments still account for only 15% of global clean energy spending, far below what’s needed to ensure energy access and meet climate goals.
              </p>
              <p>
                Global grid investment is set to hit $400 billion in 2024, following years of stagnation. Battery storage investment is expected to exceed $50 billion but remains highly concentrated in advanced economies and China. Investments in energy efficiency and electrification have shown resilience, with transport leading the way, driven by record electric vehicle sales.
              </p>
              <p>
                China is poised to lead clean energy spending with $680 billion in 2024, followed by the European Union at $370 billion and the U.S. at $300 billion. These regions are leveraging strategic policies to expand clean energy manufacturing and enhance energy security, although challenges remain in maintaining cost-competitiveness in sectors like solar PV.
              </p>
            <div className="chart-container">
              <div className="pie-chart-container">
                {investmentChartData.length > 0 ? (
                  <>
                    <PieChart data={investmentChartData} />
                  </>
                ) : (
                  <p>Loading chart...</p>
                )}
              </div>
              <div className="chart-title">
                <h3>Clean Energy Investment Trends 2024</h3> 
              </div>
              <section>
                <p>
                  <strong>Chart Source:</strong>{" "}
                  <a
                    href= "https://www.iea.org/data-and-statistics/charts/global-investment-in-clean-energy-and-fossil-fuels-2015-2024#:~:text=Global%20investment%20in%20clean%20energy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black" }}
                  >
                    World Energy Investment 2024
                  </a>

                </p>
              </section>
              <p>
                Falling costs for solar panels (down 30% in two years) and easing supply chain pressures have mitigated the effects of rising financing costs. Prices for essential minerals and metals, particularly for battery production, have also dropped significantly.
              </p>
            </div>
        </div>
        <div className='single-card'>
            <h2>U.S. clean energy tax credit market</h2>
            <section>
                <p>
                  <strong>Source:</strong>{" "}
                  <a
                    href= "https://pv-magazine-usa.com/2024/07/29/u-s-clean-energy-tax-credit-market-to-reach-25-billion-in-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black" }}
                  >
                    PV Magazine, USA
                  </a>
                </p>
              </section>
            <p>
              The Inflation Reduction Act (IRA) of 2022 has spurred the growth of a new market by making more capital available for clean energy developers. One of the key provisions of the IRA allows developers to sell federal tax credits to third parties for cash, accelerating investment in the clean energy sector. The first transactions under this program took place in January 2023.
            </p>
            <p>
              According to a mid-year Market Intelligence Report from Crux, the market for tax credit sales in 2024 has exceeded expectations. Crux tracked $6.8 billion in specific transactions during the first half of 2024, with total nationwide transactions reaching between $9 billion to $11 billion.
            </p>
            <p>
              Crux predicts that by the end of the year, U.S. clean energy tax credit transactions will total between $20 billion and $25 billion.
            </p>
            <p>
              Most of the transactions this year have been in established technologies, with wind, utility-scale solar, energy storage, and advanced manufacturing credits accounting for 95% of all reported deals. In the second half of 2024, other sectors, such as distributed generation, residential solar projects, additional 45X manufacturing credits, and renewable natural gas (RNG), are expected to contribute to an even larger market.
            </p>
            <div className="chart-container">
              <div className="pie-chart-container">
                {technologyChartData.length > 0 ? (
                  <>
                    <PieChart data={technologyChartData} />
                  </>
                ) : (
                  <p>Loading chart...</p>
                )}
              </div>
              <div className="chart-title">
                <h3>Share of transacted tax credits by technology type</h3> 
              </div>
              <section>
                <p>
                  <strong>Chart Source:</strong>{" "}
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
            </div>
            <p>
              Solar energy has played a dominant role, with 41% of the total tax credits coming from solar projects. Additionally, hybrid projects combining solar and storage represented another 9% of the tax credit supply.
            </p>
        </div>

      </div>

    );
  }
  
  export default ReportPage;