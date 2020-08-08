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
          {this.props.headComponents}
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Pathway+Gothic+One&family=Poly&display=swap" as="style" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Pathway+Gothic+One&family=Poly&display=swap" rel="stylesheet" />
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
