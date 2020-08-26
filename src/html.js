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
            content="NOVIXI - Executive Search - Wij leveren de leiders die bedrijven begeleiden naar de nieuwe wereld."
          />
          <meta
            name="description"
            content="Een organisatie die wil groeien en transformeren heeft executives nodig die een visie hebben, die een duidelijke stip op de horizon zetten en die meebouwen aan nieuwe proposities. Leiders die nieuwe manieren van werken omarmen en zich inzetten voor een innovatieve bedrijfscultuur."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.novixi.com " />
          <meta
            property="og:title"
            content="NOVIXI - Executive Search - Wij leveren de leiders die bedrijven begeleiden naar de nieuwe wereld."
          />
          <meta
            property="og:description"
            content="Een organisatie die wil groeien en transformeren heeft executives nodig die een visie hebben, die een duidelijke stip op de horizon zetten en die meebouwen aan nieuwe proposities. Leiders die nieuwe manieren van werken omarmen en zich inzetten voor een innovatieve bedrijfscultuur."
          />
          <meta property="og:image" content="https://a.storyblok.com/f/89986/1200x608/0734046bde/novixi.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.novixi.com" />
          <meta
            property="twitter:title"
            content="NOVIXI - Executive Search - Wij leveren de leiders die bedrijven begeleiden naar de nieuwe wereld."
          />
          <meta
            property="twitter:description"
            content="Een organisatie die wil groeien en transformeren heeft executives nodig die een visie hebben, die een duidelijke stip op de horizon zetten en die meebouwen aan nieuwe proposities. Leiders die nieuwe manieren van werken omarmen en zich inzetten voor een innovatieve bedrijfscultuur."
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
