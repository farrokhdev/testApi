import React from "react";
import { Modal } from "antd";

export const UpdateModal = ({
  handleCancel,
  isModalVisible,
  children,

  loading,
}) => {
  return (
    <>
      <Modal
        title={"edit data"}
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        {loading ? <h2>loading...</h2> : children}
      </Modal>
    </>
  );
};
