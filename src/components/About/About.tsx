import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
//rafce
const About = () => {
  //state variables: when the value changes -> the html is re-rendered!
  const [showProgress, setShowProgress] = useState(false);
  return (
    <div>
      <button className="bg-purple-500 text-white rounded p-5 text-2xl mb-2"
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
