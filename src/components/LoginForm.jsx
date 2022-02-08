import React from "react";
import { Card, Form, Input, Button } from "antd";

export const LoginForm = ({ onFinish }) => {
  return (
    <>
      <Card>
        <Form onFinish={onFinish}>
          <h2 className="title">Login form</h2>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
