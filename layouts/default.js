/* eslint-disable quotes */
import Head from "next/head";
import { useSelector } from "react-redux";
import styles from "../styles/default.module.css";
import { selectTheme } from "../store/dataSlice";

const Default = ({ children }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={theme ? styles.container_light : styles.container_dark}>
      <Head>
        <title>Rest Countries API</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      {children}
      <script
        src="https://kit.fontawesome.com/c82c9b0abd.js"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Default;
