import React from 'react';
import Layout from '@theme/Layout';
import '/src/pages/front-page/frontpage.css';

export default function frontPage() {
  return (
    <Layout title="Front Page" description="Hello React Page">
    <div className="container">
      <div className="left-side">
        <h1 className="hero-text">MapsIndoors is a dynamic mapping platform with endless use cases.</h1>
        <h3 className="description">Use our SDKs to integrate MapsIndoors into your existing apps, or build a custom app suited to your needs.</h3>
        <div className="left-buttons-container">
          <button className="left-button">Android</button>
          <button className="left-button">iOS</button>
          <button className="left-button">Web</button>
          <button className="left-button">CMS</button>
        </div>
      </div>
      <div className="divider">
        <img src="/static/img/frontpage-divider.png/" alt="divider" />
      </div>
      <div className="right-side">
        <h2 className="learn-more">Or learn more...</h2>
        <div className="learn-more-button-container">
          <button className="learn-more-button">Product Overview</button>
          <button className="learn-more-button">Map</button>
          <button className="learn-more-button">Directions & Routing</button>
          <button className="learn-more-button">Searching</button>
          <button className="learn-more-button">Working with Data</button>
          <button className="learn-more-button">Integration API</button>
          <button className="learn-more-button">Various</button>
        </div>
      </div>
    </div>
    </Layout>
  )
}