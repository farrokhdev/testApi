import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="errbox">
        <h1>sorry page not found !</h1>
        <Button type="primary" block onClick={() => navigate("/")}>
          go back
        </Button>
      </div>
    </div>
  );
};
