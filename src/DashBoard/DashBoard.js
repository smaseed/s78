import React from 'react';
import './Dashboard.css';

const DashBoard = () => {
  const summaries = [
    {
      title: "Clean Energy",
      text: "Clean energy reduces carbon emissions and combats climate change. Renewable sources such as solar, wind, and hydropower are crucial for sustainable development.",
      source: "https://www.un.org/en/climatechange/what-is-renewable-energy",
    },
    {
      title: "Investments in Renewable Energy",
      text: "Renewable energy, once a niche segment of the broader energy industry, is growing rapidly to become an important source of power in many regions and nations across the globe. Companies within the sector provide a variety of clean energy solutions including solar, wind, hydroelectric, geothermal, and biomass. Large renewable energy companies are headquartered in Spain, Denmark, China, the United States, and Canada.",
      source: "https://www.investopedia.com/investing/top-alternative-energy-companies/",
    },
    {
      title: "U.S. Clean Energy Tax Credit",
      text: "The marketplace provider said buyers are now beginning to look out to 2025 tax credit deals, with data indicating that forward commitments tend to transact at a one to three cent discount to 2024 deals. About 25% of 2024 reported deals included a forward component, including a full or partial purchase of future year tax credits, said Crux",
      source: "https://pv-magazine-usa.com/2024/07/29/u-s-clean-energy-tax-credit-market-to-reach-25-billion-in-2024/",
    },
  ];

  const quotation = {
    text: "International cooperation – centred on the Paris Agreement – is indispensable to climate action.",
    author: "ANTÓNIO GUTERRES, United Nations Secretary-General ",
    image: "/images/quote.png",
  };

  const techDetails =
    "This project uses React for the frontend, styled with CSS for responsiveness and accessibility. The backend is built with Node.js and Express, leveraging MongoDB as the database. JWT (JSON Web Token) handles authentication for secure user sessions. The application is hosted on a cloud platform using NGINX as the reverse proxy to serve both frontend and backend services efficiently.";

  return (
    <div className="dashboard-container">
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
                style={{ color: "white" }}
              >
                {summary.source}
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