import React, { useState } from "react";

function ThrottledButton() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const apiCall = () => {
    console.log("api call");
  };

  // Function to be throttled
  const handleClick = (fun, delay) => {
    if (!isButtonDisabled) {
      // Perform action or function here
      setIsButtonDisabled(true);
      fun();

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, delay); // Adjust the throttle interval as per your needs
    }
  };

  return (
    <div>
      <button
        onClick={() => handleClick(apiCall, 6000)}
        disabled={isButtonDisabled}
      >
        Throttled Button
      </button>
    </div>
  );
}

export default ThrottledButton;
