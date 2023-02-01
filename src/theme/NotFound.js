import React from 'react';
import Layout from '@theme/Layout';
import NotFound from '@theme-original/NotFound';
import '/src/pages/front-page/frontpage.css';

export default function NotFoundWrapper(props) {
  return (
    <Layout title="Page Not Found" description="Hello React Page">
      <div className="notfound-container">
        <h1 className="notfound-whoops">Whoops!</h1>
        <h2 className="notfound-descriptive">It seems the page you were trying to reach doesn't exist, and you've run into a 404 error!</h2>
        <h3>Perhaps you can find what you were looking for in these suggested topics?</h3>

        <div className="notfound-button-container">
            <div className="notfound-buttons-row">
              <a href="/product/"> <button className="notfound-button">Product Overview</button> </a>
              <a href="/display-rules/"> <button className="notfound-button">Map</button> </a>
              <a href="/directions-intro/"> <button className="notfound-button">Directions & Routing</button> </a>
            </div>
            <div className="notfound-buttons-row">
              <a href="/searching/"> <button className="notfound-button">Searching</button> </a>
              <a href="/booking/"> <button className="notfound-button">Working with Data</button> </a>
              <a href="/api/"> <button className="notfound-button">Integration API</button> </a>
            </div>
            <a href="/glossary/"> <button className="notfound-button">Various</button> </a>
          </div>
        </div>
    </Layout>
  );
}
