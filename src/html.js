import React from "react";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            NOVIXI - Executive Search - Wij leveren de leiders die bedrijven
            begeleiden naar de nieuwe wereld.
          </title>
          <meta
            name="title"
            content="NOVIXI - Executive Search - We recruit leaders who guide your company to the new world."
          />
          <meta
            name="description"
            content="To grow and transform an organization needs executives with a vision, who put a clear dot on the horizon and who help build new propositions. Leaders that embrace new ways of working and commit themselves to an innovative corporate culture."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.novixi.com " />
          <meta
            property="og:title"
            content="NOVIXI - Executive Search - We recruit leaders who guide your company to the new world."
          />
          <meta
            property="og:description"
            content="To grow and transform an organization needs executives with a vision, who put a clear dot on the horizon and who help build new propositions. Leaders that embrace new ways of working and commit themselves to an innovative corporate culture."
          />
          <meta property="og:image" content="https://a.storyblok.com/f/89986/1200x608/0734046bde/novixi.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.novixi.com" />
          <meta
            property="twitter:title"
            content="NOVIXI - Executive Search - We recruit leaders who guide your company to the new world."
          />
          <meta
            property="twitter:description"
            content="To grow and transform an organization needs executives with a vision, who put a clear dot on the horizon and who help build new propositions. Leaders that embrace new ways of working and commit themselves to an innovative corporate culture."
          />
          <meta property="twitter:image" content="https://a.storyblok.com/f/89986/1200x608/0734046bde/novixi.png" />
          {this.props.headComponents}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Pathway+Gothic+One&family=Poly:ital@0;1&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
