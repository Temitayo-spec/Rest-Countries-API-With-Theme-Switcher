import React, { useState } from "react";
import Sidebar from "../comps/Sidebar";
import tabStyle from "../styles/Tabs.module.css";
import { dataList } from "../comps/DiscussionData";
import Comments from "../comps/Comments";
import Write from "../comps/Write";
function discussion() {
  const [toggleState, setToggleState] = useState(1);
  const [toggleStateTwo, setToggleStateTwo] = useState(1);
  const [update, setUpdate] = useState(false);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleTabTwo = (index) => {
    setToggleStateTwo(index);
  };

  //Filtering input
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  const excludeColumns = ["body", "image", "likes", "time", "comment"];
 
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    
    if (!lowerCaseValue) {
      setData(dataList);
    } else {
      const filteredData = dataList.filter((item) => {
        
        return Object.keys(item).some((key) => {
          return excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      console.log(filteredData);
      setData(filteredData);
    }
  };
  return (
    <div className="mainpage_wrapper">
      <Sidebar />

      <main className="main-section main">
        <section className={tabStyle.section_a}>
          <header className={tabStyle.header}>
            <div className={tabStyle.main_heading}>
              <h2>Discussion</h2>
            </div>

            <div className="left circle one"></div>
            <div className="circle two"></div>
            <div className="name">
              <p>Hi Favour</p>
            </div>
          </header>
        </section>

        <div className={tabStyle.conversation_wrapper}>
          <div className={tabStyle.conversation_title}>
            <header>
              <input
                type="text"
                placeholder="Search discussion by title"
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
              />
              <div
                style={{
                  padding: "0.3em 0.5em",
                  borderRadius: "34px",
                }}
                id="write_container"
              >
                <svg
                  onClick={() => {
                    const all = document.querySelectorAll("#convo");
                    if (!update) {
                      document.getElementById(
                        "write_container"
                      ).style.backgroundColor = "#dad2d2";
                      document.getElementById("discuss").style.display =
                        "block";
                      all.forEach((val) => {
                        if (val.id == "convo") {
                          val.style.display = "none";
                        } else {
                          val.style.display = "block";
                        }
                      });
                      setUpdate(true);
                    } else {
                      document.getElementById(
                        "write_container"
                      ).style.backgroundColor = "";
                      document.getElementById("discuss").style.display = "none";
                      document.getElementById("convo").style.display = "block";
                      all.forEach((val) => {
                        if (val.id == "convo") {
                          val.style.display = "";
                        } else {
                          val.style.display = "none";
                        }
                      });
                      setUpdate(false);
                    }
                  }}
                  id="open"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0263 0C20.2603 0 19.5074 0.300375 18.9297 0.877096L9.01126 10.7635L8.79099 10.9837L8.73091 11.2971L8.04005 14.8015L7.72966 16.2713L9.1985 15.961L12.7029 15.2701L13.0163 15.21L13.2365 14.9897L23.1229 5.07134C23.537 4.65583 23.8188 4.12707 23.9329 3.55168C24.047 2.97629 23.9882 2.38 23.764 1.83794C23.5398 1.29588 23.1602 0.832296 22.673 0.505586C22.1859 0.178875 21.6129 0.00365612 21.0263 0.00200236V0ZM21.0263 1.94243C21.2616 1.94243 21.4909 2.06258 21.7151 2.28586C22.1617 2.73242 22.1617 3.21502 21.7151 3.66258L12.015 13.3607L10.2929 13.7051L10.6383 11.983L20.3384 2.28285C20.5617 2.05957 20.791 1.93942 21.0263 1.93942V1.94243ZM0 3.97497V24H20.025V10.7955L18.0225 12.798V21.9975H2.0025V5.97747H11.202L13.2045 3.97497H0Z"
                    fill="#2E9CCA"
                  />
                </svg>
              </div>
            </header>
            <section className={tabStyle.section_one}>
              <div
                onClick={() => toggleTab(1)}
                className={toggleState === 1 ? "trend active_trend" : "trend"}
              >
                newest
              </div>
              <div
                onClick={() => toggleTab(2)}
                className={toggleState === 2 ? "trend active_trend" : "trend"}
              >
                most popular
              </div>
              <select>
                <option value="All Courses">All Courses</option>
                <option value="GEK 207">GEK 207</option>
                <option value="CSC 312">CSC 312</option>
                <option value="PHY 112">PHY 112</option>
              </select>
            </section>
            <div className={tabStyle.content_container}>
              {data.map((val) => {
                return (
                  <div
                    onClick={(e) => {
                      toggleTabTwo(val.id);
                    }}
                    key={val.id}
                    id={toggleStateTwo == val.id ? "focus" : ""}
                    className={tabStyle.main_content}
                  >
                    <h3>{val.title}</h3>
                    <div className={tabStyle.row_two}>
                      <h4>{val.course}</h4>
                      <p>
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0H2C0.896875 0 0 0.896875 0 2V11C0 12.1031 0.896875 13 2 13H5V15.625C5 15.9312 5.35 16.1094 5.59688 15.9281L9.5 13H14C15.1031 13 16 12.1031 16 11V2C16 0.896875 15.1031 0 14 0Z"
                              fill="#2E9CCA"
                            />
                          </svg>
                        </div>
                        {val.comment} comments
                      </p>
                      <p>
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.755 1.69425C14.6282 1.55056 14.4921 1.41528 14.3477 1.28925C13.658 0.68625 12.7235 0.2655 11.5677 0.25H11.5432C11.4742 0.25 11.4045 0.254 11.336 0.258C10.618 0.2905 8.54573 1.1375 8.02873 2.80975C7.51298 1.13725 5.44023 0.28975 4.72198 0.258C4.65523 0.254 4.58448 0.25 4.51723 0.25H4.49048C3.33623 0.26525 2.40173 0.68625 1.71298 1.28925C1.56899 1.41579 1.4329 1.55105 1.30548 1.69425C0.431978 2.693 0.0164782 4.1065 0.555478 5.3955C0.620728 5.57775 0.695228 5.76625 0.779978 5.95825C2.04948 8.8485 5.50123 12.8293 7.20898 14.704C7.57548 15.1623 7.85598 15.514 8.02323 15.7212V15.7445L8.02523 15.7425C8.02523 15.7463 8.02923 15.7483 8.03098 15.7502V15.7353L8.03248 15.733L8.03448 15.7353V15.7502C8.03898 15.7483 8.04098 15.746 8.04098 15.7425L8.04298 15.7445V15.7212C8.20998 15.514 8.49173 15.1625 8.85723 14.704C10.5642 12.8293 14.0147 8.8485 15.2837 5.95825C15.3652 5.77341 15.44 5.58571 15.508 5.3955C16.0457 4.10525 15.6337 2.69175 14.758 1.692"
                              fill="#E03A4D"
                            />
                          </svg>
                        </div>
                        {val.likes} likes
                      </p>
                    </div>

                    <div className={tabStyle.row_three}>
                      <p>
                        Discussion by <strong>{val.name}</strong>
                      </p>
                      <p>{val.time} mins</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {data.length === 0 && (
              <span>No records found to be displayed!!</span>
            )}
          </div>
          <div className={tabStyle.cover}>
            <Write />
            <div className={tabStyle.display_content}>
              {data.map((val, key) => {
                return (
                  <div
                    key={key}
                    className={
                      toggleStateTwo == val.id ? "activate" : "data_body"
                    }
                    id="convo"
                  >
                    <header>
                      <h2>{val.title}</h2>

                      <div className={tabStyle.row_three}>
                        <p>
                          Discussion by <strong>{val.name}</strong>
                        </p>
                        <p>{val.time} mins</p>
                      </div>
                    </header>

                    <section className={tabStyle.body_content}>
                      <img src={val.image} />
                      <p>{val.body}</p>
                    </section>
                    <Comments id={val.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default discussion;
