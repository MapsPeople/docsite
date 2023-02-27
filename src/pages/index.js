import React from 'react';
import Layout from '@theme/Layout';
import '/src/pages/front-page/frontpage.css';

export default function frontPage() {
  return (
    <Layout title="Front Page" description="Hello React Page">
      <div className="front-page-container">
        <div className="left-side">
          <h1 className="hero-text">MapsIndoors is a dynamic mapping platform with endless use cases.</h1>
          <h3 className="description">Use our SDKs to integrate MapsIndoors into your existing apps, or build a custom app suited to your needs.</h3>
        </div>
        <div className="left-buttons-container">
          <a href="/getting-started/android/v4/"><button className="left-button">Android</button></a>
          <a href="/getting-started/ios/"><button className="left-button">iOS</button></a>
          <a href="/getting-started/web/"><button className="left-button">Web</button></a>
          <a href="/cms/"><button className="left-button">CMS</button></a>
          <a href="/api/"><button className="left-button">API</button></a>
        </div>
        <div className="divider">
          {/* <img src={require("/static/img/frontpage-divider.png")} alt="divider" /> */}
        </div>
        <div className="right-side buttons">
          <h2 className="learn-more">Or learn more...</h2>
          <div className="learn-more-button-container">
            <a href="/product/"> <button className="learn-more-button">Product Overview</button> </a>
            <a href="/display-rules/"> <button className="learn-more-button">Map</button> </a>
            <a href="/directions-intro/"> <button className="learn-more-button">Directions & Routing</button> </a>
            <a href="/searching/"> <button className="learn-more-button">Searching</button> </a>
            <a href="/api/"> <button className="learn-more-button">Working with Data</button> </a>
            <a href="/glossary/"> <button className="learn-more-button">Other Guides</button> </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}