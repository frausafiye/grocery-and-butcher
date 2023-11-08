import { Card } from "antd";

const { Meta } = Card;
type InfoCardProps = {
  title: string;
  icon: string;
  desc: string;
};

export default function InfoCard({ title, icon, desc }: InfoCardProps) {
  return (
    <Card
      style={{
        width: "70%",
        borderRadius: "15px",
        borderWidth: "3px",
        boxShadow: "rgba(0, 0, 0, 0.24) -7px 10px 5px 15px",
        padding: "20px",
        margin: "40px auto",
      }}
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
