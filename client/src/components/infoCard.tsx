import React, { ReactElement } from "react";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
  title: string;
  icon: string;
  desc: string;
}

export default function InfoCard({ title, icon, desc }: Props): ReactElement {
  return (
    <Card
      style={{
        width: "70%",
        backgroundColor: "#EA4335",
        borderColor: "#EA4335",
        borderRadius: "10px",
        padding: "40px",
        margin: "40px auto",
      }}
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <Meta
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        avatar={<img src={icon} alt="icon" />}
        title={title}
        description={desc}
      />
    </Card>
  );
}
