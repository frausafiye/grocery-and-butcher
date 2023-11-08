import Benefit from "./benefit";
import definedBenefits from "./definedBenefits";
//import groceryBackground from "../../images/";

const Benefits = () => {
  return (
    <>
      <h3 className="benefits-title">Why Choose Us</h3>
      <div className="benefits-center">
        {definedBenefits.map((benefitItem) => {
          const { title, icon, desc } = benefitItem;
          return <Benefit title={title} icon={icon} desc={desc} />;
        })}
      </div>
    </>
  );
};

export default Benefits;
