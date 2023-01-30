import React from "react";
import axios from "axios";
import { AppProps } from "next/app";

import "../public/globals.css";

import { API_URL } from "../src/utils/constants";

axios.defaults.baseURL = API_URL;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
