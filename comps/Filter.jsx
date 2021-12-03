/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useState } from "react";
import { useSelector } from "react-redux";
import { itemList } from "./DropboxData";
import styles from "../styles/filter.module.css";
import { selectSearchInput, selectTheme } from "../store/dataSlice";

const Filter = ({ selected, setSelected, searchCountries }) => {
  const [drop, setDrop] = useState(false);
  const initial = useSelector(selectSearchInput);
  const [inputValue, setInputValue] = useState(initial);
  const theme = useSelector(selectTheme);
  return (
    <header className={styles.header}>
      <div className={theme ? styles.search_light : styles.search_dark}>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
            searchCountries(e.target.value);
          }}
          type="text"
          value={inputValue}
          placeholder="Search for a country..."
        />
        <svg
          className={theme ? styles.searchIcon_light : styles.searchIcon_dark}
          onClick={() => {
            searchCountries(inputValue);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>

      <div className={theme ? styles.filter_light : styles.filter_dark}>
        <div
          onClick={() => setDrop(!drop)}
          className={theme ? styles.dropdown_light : styles.dropdown_dark}
        >
          <p>{selected}</p>
          <svg
            className={
              theme ? styles.dropdownIcon_light : styles.dropdownIcon_dark
            }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div
          className={`${theme ? styles.dropbox_light : styles.dropbox_dark} ${
            drop === true ? styles.active_dropbox : styles.dropbox
          }`}
        >
          {itemList.map((val) => (
            // eslint-disable-next-line react/no-array-index-key
            <li
              onClick={() => {
                setSelected(val.region);
                searchCountries(val.region);
                setDrop(false);
              }}
              id="option"
              key={val.id}
            >
              {val.region}
            </li>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Filter;
