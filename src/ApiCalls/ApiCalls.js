import { message } from "antd";

//   FETCH ALL DATA (sliced to 20 first items)

export const fetchData = async (setLoading, setCurrentPag, setData) => {
  setLoading(true);
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const fakeData = await res.json();
    setCurrentPag(1);

    setData(fakeData.slice(0, 20));
    setLoading(false);
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};

//    FETCH SINGLE DATA
export const fetchDataById = async (setSingleData, setSingleLoading, id) => {
  setSingleLoading(true);
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const singleFakeData = await res.json();

    setSingleData(singleFakeData);
    setSingleLoading(false);
  } catch (err) {
    console.log(err);
    setSingleLoading(false);
  }
};
//    UPDATE SINGLE DATA (UPDATE OPRATION IS NOT REALY EFFECT THE API JUST FOR TEST)

export const updateSingleData = async (
  setSingleData,
  setSingleLoading,
  vals
) => {
  setSingleLoading(true);
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${vals.id}`,
      {
        method: "PUT",
        body: JSON.stringify(vals),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const update = await res.json();
    setSingleData(update);
    message.success("update has been successfuly done");
    setSingleLoading(false);
  } catch (err) {
    console.log(err);
    setSingleLoading(false);
  }
};
