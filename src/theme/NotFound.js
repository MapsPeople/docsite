import React from 'react';
import Layout from '@theme/Layout';
import NotFound from '@theme-original/NotFound';
import '/src/pages/front-page/frontpage.css';

export default function NotFoundWrapper(props) {
  return (
    <Layout title="Page Not Found" description="Hello React Page">
      <div className="notfound-container">
        <h1 className="notfound-whoops">Whoops!</h1>
        <h2 className="notfound-descriptive">It seems the page you were looking for doesn't exist, and you've run into a 404 error! If you clicked a link, please contact the website administrator so we can get it fixed!</h2>
        <h3>In the meantime, perhaps you can find what you were looking for in these topics?</h3>

        <div className="notfound-button-container">
            <a href="/product/"> <button className="notfound-button">Product Overview</button> </a>
            <a href="/display-rules/"> <button className="notfound-button">Map</button> </a>
            <a href="/directions-intro/"> <button className="notfound-button">Directions & Routing</button> </a>
            <a href="/searching/"> <button className="notfound-button">Searching</button> </a>
            <a href="/booking/"> <button className="notfound-button">Working with Data</button> </a>
            <a href="/api/"> <button className="notfound-button">Integration API</button> </a>
            <a href="/glossary/"> <button className="notfound-button">Various</button> </a>
          </div>
        </div>
    </Layout>
  );
}
