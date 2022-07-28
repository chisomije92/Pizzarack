import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <base href="/"></base>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
        <script
          async
          // src="https://cdn.jsdelivr.net/npm/swipe-pay@2.0.1"
          src="/swipe-pay-widget.js"
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
