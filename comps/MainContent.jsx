/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRestData,
  selectSearchInput,
  setSearchInput,
  selectTheme,
} from "../store/dataSlice";
import styles from "../styles/main-content.module.css";
import Filter from "./Filter";
import { LargeLoader } from "./Loader";

const MainContent = ({ selected, setSelected }) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [filtered, setFiltered] = useState();
  const searchInput = useSelector(selectSearchInput);
  const searchCountries = (value) => {
    dispatch(setSearchInput(value));
    if (searchInput) {
      const filteredCountries = info.filter((country) => Object.values(country)
        .join("")
        .toLowerCase()
        .includes(value.toLowerCase()));
      setFiltered(filteredCountries);
    } else {
      setFiltered(info);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://restcountries.com/v2/all");
      dispatch(setRestData(result.data));
      setInfo(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <Filter
        searchCountries={searchCountries}
        selected={selected}
        setSelected={setSelected}
        // filterData={filterData}
      />
      <div className={styles.inner}>
        {searchInput.length > 0 ? (
          <main className={styles.main}>
            {loading ? <LargeLoader /> : null}
            {filtered?.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link key={key} href={`/${val.name}`}>
                <a className={theme ? styles.card_light : styles.card_dark}>
                  <img src={val.flags.png} alt="" />
                  <div
                    className={
                      theme
                        ? styles.card_content_light
                        : styles.card_content_dark
                    }
                  >
                    <h2>{val.name}</h2>
                    <p>
                      <span>Population:</span> {val.population}
                    </p>
                    <p>
                      <span>Region:</span> {val.region}
                    </p>
                    <p>
                      <span>Capital:</span> {val.capital}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </main>
        ) : (
          <main className={styles.main}>
            {loading ? <LargeLoader /> : null}
            {info?.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link key={key} href={`/${val.name}`}>
                <a className={theme ? styles.card_light : styles.card_dark}>
                  <img src={val.flags.png} alt="" />
                  <div
                    className={
                      theme
                        ? styles.card_content_light
                        : styles.card_content_dark
                    }
                  >
                    <h2>{val.name}</h2>
                    <p>
                      <span>Population:</span> {val.population}
                    </p>
                    <p>
                      <span>Region:</span> {val.region}
                    </p>
                    <p>
                      <span>Capital:</span> {val.capital}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </main>
        )}
      </div>
    </div>
  );
};

export default MainContent;
