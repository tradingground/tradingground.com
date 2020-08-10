import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
  body {
    font-family: Helvetica,Arial,sans-serif;
  }
`

export default ({ children }) => (
  <>
    <Helmet>
      <meta charset="utf-8"/>
      <title>The Trading Ground | A Trading Community</title>
      <meta name="description" content="A community for traders."/>
      <link rel="icon" type="image/png" href="https://aws1.discourse-cdn.com/standard14/uploads/thetradingground/optimized/1X/c6975e4a154cfc5cb9feb49382e9c45682e2090c_2_32x32.png"/>
      <link rel="apple-touch-icon" type="image/png" href="https://aws1.discourse-cdn.com/standard14/uploads/thetradingground/optimized/1X/c6975e4a154cfc5cb9feb49382e9c45682e2090c_2_180x180.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover"/>
      <link rel="search" type="application/opensearchdescription+xml" href="https://community.thetradingground.com/opensearch.xml" title="The Trading Ground Search"/>
      <meta property="og:site_name" content="The Trading Ground"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="https://aws1.discourse-cdn.com/standard14/uploads/thetradingground/original/1X/8b7bb5bba3397b8fe0fa7e7868b0c0630f00803d.png"/>
      <meta property="og:image" content="https://aws1.discourse-cdn.com/standard14/uploads/thetradingground/original/1X/8b7bb5bba3397b8fe0fa7e7868b0c0630f00803d.png"/>
      <meta property="og:url" content="https://thetradingground.com/"/>
      <meta name="twitter:url" content="https://thetradingground.com/"/>
      <meta property="og:title" content="The Trading Ground"/>
      <meta name="twitter:title" content="The Trading Ground"/>
      <meta property="og:description" content="A community for traders."/>
      <meta name="twitter:description" content="A community for traders."/>

      <script>
      {
          `(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"56210490"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`
      }
      </script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169273132-1"></script>
      <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-169273132-1');
        `
      }
      </script>

    </Helmet>
    <GlobalStyle />
    {children}
  </>
)
