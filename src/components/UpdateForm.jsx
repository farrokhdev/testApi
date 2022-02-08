import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import TextArea from "antd/lib/input/TextArea";

export const UpdateForm = ({
  singleData,
  onFinish,
  onFinishFailed,
  handleCancel,
}) => {
  const init = { title: singleData.title, desc: singleData.body };

  return (
    <>
      {singleData && (
        <>
          <Form
            name="basic"
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 24,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={init}
          >
            <Form.Item
              label="title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your title!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="desc"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please input your desc!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
            <div className="action">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  ویرایش
                </Button>
              </Form.Item>
              <Button type="primary" danger onClick={handleCancel}>
                انصراف
              </Button>
            </div>
          </Form>
        </>
      )}
    </>
  );
};
