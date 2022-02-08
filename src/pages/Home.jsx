import React, { useEffect, useState } from "react";
import { List, Avatar, Space, Card, Button } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { useMainContext } from "../context/MainContext";
import { UpdateModal } from "../components/UpdateModal";
import { UpdateForm } from "../components/UpdateForm";

export const Home = () => {
  const {
    data,
    singleData,
    loading,
    singleloading,
    currentPag,
    setCurrentPag,
    fetchOne,
    updateOne,
  } = useMainContext();
  const [isModalVisible, setIsModalVisible] = useState({
    id: null,
    status: false,
  });

  if (loading) {
    return (
      <div className="container">
        <h2>در حال بارگذاری اطلاعات...</h2>
      </div>
    );
  }

  // FORM SUBMIT HANDLERS
  const onFinish = (val) => {
    console.log("Success:", val);
    updateOne({
      id: singleData.id,
      userId: singleData.userId,
      title: val.title,
      body: val.desc,
    });
    setIsModalVisible({ ...isModalVisible, status: false });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // MODAl HANDLERS
  const showModal = (item) => {
    fetchOne(item.id);
    setIsModalVisible({ ...isModalVisible, id: item.id, status: true });
  };

  const handleCancel = () => {
    setIsModalVisible({ ...isModalVisible, status: false });
  };

  return (
    <>
      <UpdateModal
        showModal={showModal}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible.status}
        title={singleData.title}
        loading={singleloading}
      >
        <UpdateForm
          singleData={singleData}
          singleloading={singleloading}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          handleCancel={handleCancel}
        />
      </UpdateModal>

      <div className="container">
        {data.length > 0 ? (
          <List
            itemLayout="vertical"
            size="large"
            className="list"
            pagination={{
              onChange: (page) => {
                console.log(page);
                setCurrentPag(page);
              },
              pageSize: 6,
              current: currentPag,
            }}
            dataSource={data}
            renderItem={(item) => (
              <Card key={item.id} onClick={() => showModal(item)}>
                <h2>{item.title}</h2>
                <Button className="seemore" type="primary">
                  مشاهده اطلاعات
                </Button>
              </Card>
            )}
          />
        ) : (
          <h2>هیچ دیتایی یافت نشد</h2>
        )}
      </div>
    </>
  );
};
