import InfoCard from "../ui/infoCard";

type BenefitProps = {
  title: string;
  icon: string;
  desc: string;
};

export default function Benefit({ title, icon, desc }: BenefitProps) {
  return <InfoCard title={title} icon={icon} desc={desc} />;
}
