import React from "react";
import axios from "axios";
import { AppProps } from "next/app";

import "../public/globals.css";

if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "http://localhost/";
} else {
  axios.defaults.baseURL = "https://api.neutralstack.io/";
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
