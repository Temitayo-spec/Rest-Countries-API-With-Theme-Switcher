/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/dataSlice";
import styles from "../styles/default.module.css";
import Header from "../comps/Header";
import MainContent from "../comps/MainContent";

const Home = () => {
  const [selected, setSelected] = useState("Filter by Region");
  const theme = useSelector(selectTheme);
  return (
    <div className={theme === true ? styles.light : styles.dark}>
      <Header />
      <MainContent selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Home;
