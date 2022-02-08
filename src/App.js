import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { LayoutMain } from "./components/Layout/LayoutMain";
import { useMainContext } from "./context/MainContext";
import { Error } from "./pages/Error";

function App() {
  const { auth } = useMainContext();

  return (
    <>
      <Routes>
        <>
          <Route
            exact
            path="/"
            element={
              auth ? (
                <LayoutMain>
                  <Home />
                </LayoutMain>
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </>
      </Routes>
    </>
  );
}

export default App;
