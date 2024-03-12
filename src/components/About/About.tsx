import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
//rafce
const About = () => {
  const [showProgress, setShowProgress] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowProgress(!showProgress);
        }}
      >
        Toggle
      </button>
      {/* conditional rendering: if (condition) show! */}
      {showProgress && (
        <ClimbingBoxLoader color="#36d7b7" speedMultiplier={3} />
      )}
    </div>
  );
};

export default About;
