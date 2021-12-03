/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
import { useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LargeLoader } from "../comps/Loader";
import styles from "../styles/name.module.css";
import Header from "../comps/Header";
import { selectTheme } from "../store/dataSlice";

/* eslint-disable quotes */
const Name = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);
    const getCountry = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v2/name/${router.query.name}`
      );
      setCountry(data);
      setIsLoading(false);
    };
    getCountry();
  }, []);

  const theme = useSelector(selectTheme);
  return (
    <div className={theme ? styles.wrapper_light : styles.wrapper_dark}>
      <Header />
      <div className={theme ? styles.inner_light : styles.inner_dark}>
        <Link href="/">
          <a>
            <button type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-left"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </span>
              Back
            </button>
          </a>
        </Link>
        <section className={styles.country_ctn}>
          {isLoading ? <LargeLoader /> : null}
          {country.map((val) => (
            <div key={val.name} className={styles.country}>
              <div className={styles.country_img}>
                <img src={val.flag} alt={val.name} />
              </div>
              <div className={styles.flex_ctn}>
                <div
                  className={
                    theme ? styles.country_info_light : styles.country_info_dark
                  }
                >
                  <div className={styles.flex}>
                    <h2>{val.name}</h2>
                    <p>
                      <span>Native Name: </span>
                      {val.nativeName}
                    </p>
                    <p>
                      <span>Population: </span>
                      {val.population}
                    </p>
                    <p>
                      <span>Region: </span>
                      {val.region}
                    </p>
                    <p>
                      <span>Sub Region: </span>
                      {val.subregion}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {val.capital}
                    </p>
                  </div>
                  <div className={styles.top_levl}>
                    <p>
                      <span>Top Level Domain: </span>
                      {val.topLevelDomain}
                    </p>
                    <p>
                      <span>Currencies: </span>
                      {val.currencies.map((curr) => curr.name)}
                    </p>
                    <p className={styles.lang}>
                      <span>Languages: </span>
                      {val.languages.map((lang) => (
                        <span key={lang.name}>{lang.name}, </span>
                      ))}
                    </p>
                  </div>
                </div>
                {val.borders === undefined ? null : (
                  <div
                    className={
                      theme
                        ? styles.country_borders_light
                        : styles.country_borders_dark
                    }
                  >
                    <h3>Border Countries:</h3>
                    <ul>
                      {val.borders?.map((border) => (
                        <li key={border}>{border}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Name;
