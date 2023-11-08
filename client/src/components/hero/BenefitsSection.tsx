import Benefits from "../benefits/benefits";
import "./benefits-section.css";

export default function BenefitSection() {
  return (
    <div className="benefits-section">
      <Benefits />
    </div>
  );
  // const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
}
