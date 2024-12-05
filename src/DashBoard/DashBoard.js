import React from 'react';
import './Dashboard.css';

const DashBoard = () => {
  const summaries = [
    {
      title: "Renewable Energy",
      text: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished. Renewable energy sources are plentiful and all around us.",
      source: "https://www.un.org/en/climatechange/what-is-renewable-energy",
      label: "United Nations - Climate Action"
    },
    {
      title: "Investments in Renewable Energy",
      text: "Renewable energy, once a niche segment of the broader energy industry, is growing rapidly to become an important source of power in many regions and nations across the globe. Companies within the sector provide a variety of clean energy solutions including solar, wind, hydroelectric, geothermal, and biomass. Large renewable energy companies are headquartered in Spain, Denmark, China, the United States, and Canada.",
      source: "https://www.investopedia.com/investing/top-alternative-energy-companies/",
      label: "Investopedia"
    },
    {
      title: "U.S. Clean Energy Tax Credit",
      text: "The marketplace provider said buyers are now beginning to look out to 2025 tax credit deals, with data indicating that forward commitments tend to transact at a one to three cent discount to 2024 deals. About 25% of 2024 reported deals included a forward component, including a full or partial purchase of future year tax credits, said Crux",
      source: "https://pv-magazine-usa.com/2024/07/29/u-s-clean-energy-tax-credit-market-to-reach-25-billion-in-2024/",
      label: "pv-magazine"
    },
  ];

  const quotation = {
    text: "International cooperation – centred on the Paris Agreement – is indispensable to climate action.",
    author: "ANTÓNIO GUTERRES, United Nations Secretary-General ",
    image: "/images/quote.png",
  };

  const main_content = {
    title: "Clean Energy",
    text: "A clean energy revolution is taking place across America, underscored by the steady expansion of the U.S. renewable energy sector. The clean energy industry generates hundreds of billions in economic activity, and is expected to continue to grow rapidly in the coming years. There is tremendous economic opportunity for the countries that invent, manufacture and export clean energy technologies. Responsible development of all of America’s rich energy resources -- including solar, wind, water, geothermal, bioenergy & nuclear -- will help ensure America’s continued leadership in clean energy. Moving forward, the Energy Department will continue to drive strategic investments in the transition to a cleaner, domestic and more secure energy future.",
    source: "https://www.energy.gov/clean-energy",
    label: "U.S. Department of Energy"
  }
  const techDetails =
    "This project uses React for the frontend, styled with CSS for responsiveness and accessibility. The backend is built with Node.js and Express, leveraging MongoDB as the database. JWT (JSON Web Token) handles authentication for secure user sessions. The application is hosted on a cloud platform using NGINX as the reverse proxy to serve both frontend and backend services efficiently.";

  return (
    <div className="dashboard-container">
      <div className="main-card">
        <h2>{main_content.title}</h2>
        <p>{main_content.text}</p>
        <p>
              <strong>Source:</strong>{" "}
              <a
                href={main_content.source}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                {main_content.label}
              </a>
            </p>
      </div>
      <div className="card-container">
        {summaries.map((summary, index) => (
          <div className={`card card${index + 1}`} key={index}>
            <h3>{summary.title}</h3>
            <p>{summary.text}</p>
            <p>
              <strong>Source:</strong>{" "}
              <a
                href={summary.source}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                {summary.label}
              </a>
            </p>
          </div>
        ))}
      </div>
      <div className="large-card">
        <img src={quotation.image} alt="Author" />
        <p>{quotation.text}</p>
        <strong>-
          {quotation.author} 
          <a href='https://www.un.org/sg/en/content/sg/press-encounter/2024-11-21/secretary-generals-press-encounter-cop29'>(21 November 2024)</a>
          </strong>
      </div>
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <p>{techDetails}</p>
      </div>
    </div>
  );
}

export default DashBoard