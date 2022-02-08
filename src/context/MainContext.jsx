import React, { useContext, useState, useEffect } from "react";
import {
  fetchData,
  fetchDataById,
  updateSingleData,
} from "../ApiCalls/ApiCalls";
import { useNavigate } from "react-router";

export const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const navigate = useNavigate();
  // FOR AUTHNTICATION
  const [userInfo, setUserInfo] = useState(() => {
    return localStorage.getItem("user");
  });
  const [auth, setAuth] = useState(userInfo ? true : false);

  const signIn = () => {
    setAuth(true);
    setUserInfo(localStorage.getItem("user"));
    navigate("/");
  };

  useEffect(() => {}, []);

  const signOut = () => {
    localStorage.removeItem("user");
  };

  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState("");
  const [singleloading, setSingleLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPag, setCurrentPag] = useState(1);

  //   FETCH ALL DATA (sliced to 20 first items)
  useEffect(() => {
    fetchData(setLoading, setCurrentPag, setData);
  }, []);

  //   FETCH SINGLE DATA
  const fetchOne = (id) => {
    fetchDataById(setSingleData, setSingleLoading, id);
  };
  //   UPDATE SINGLE DATA
  const updateOne = (vals) => {
    updateSingleData(setSingleData, setSingleLoading, vals);
  };

  //   FILTER DATAs
  const filterData = async (e) => {
    setLoading(true);
    const find = await fetch("https://jsonplaceholder.typicode.com/posts");
    const findfakeData = await find.json();

    const filtered = findfakeData.filter((item) =>
      item.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setCurrentPag(1);
    setData(filtered.slice(0, 20));
    setLoading(false);
  };

  //   REFETCH ALL DATAs
  const getAll = () => {
    fetchData(setLoading, setCurrentPag, setData);
  };

  return (
    <>
      <MainContext.Provider
        value={{
          auth,
          setAuth,
          signIn,
          signOut,
          userInfo,
          data,
          singleData,
          loading,
          singleloading,
          filterData,
          fetchOne,
          updateOne,
          getAll,
          currentPag,
          setCurrentPag,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
