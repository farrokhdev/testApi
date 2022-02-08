import React from "react";
import User from "../../images/user/1.jpg";
import { Input, Space, Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const { Search } = Input;

export const LayoutMain = ({ children }) => {
  const { data, filterData, getAll, signOut, userInfo } = useMainContext();

  return (
    <>
      <div className="layout">
        <div className="header">
          <div className="part1">
            <div className="container">
              <div className="user">
                <img src={User} alt="" />
                <span>{userInfo} has been logged in</span>
              </div>

              <Link className="auth" to="./login" onClick={() => signOut()}>
                sign out
              </Link>
            </div>
          </div>
          <div className="part2">
            <div className="container">
              <Search
                className="searchBar"
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={filterData}
              />
              <div className="all-items"></div>
              <div className="search-count">
                <span>نتایج جستجو {data.length && data.length}</span>
                <Button type="primary" onClick={getAll}>
                  همه داده ها
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="main">{children}</div>
      </div>
    </>
  );
};
