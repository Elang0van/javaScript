import React, { useState } from "react";

function CheckboxButtonForm() {
  // State to track the checkboxes
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
  ]);

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    setCheckboxes((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  // Function to handle button click (remove checked checkboxes)
  const handleButtonClick = () => {
    setCheckboxes((prev) => prev.filter((checkbox) => !checkbox.checked));
  };

  // Check if any checkbox is checked
  const isAnyChecked = checkboxes.some((checkbox) => checkbox.checked);

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id}>
          <label>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            Checkbox {checkbox.id}
          </label>
        </div>
      ))}

      <br />

      {/* Button with dynamic color and disabled state */}
      <button
        onClick={handleButtonClick}
        disabled={!isAnyChecked}
        style={{
          backgroundColor: isAnyChecked ? "blue" : "gray",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: isAnyChecked ? "pointer" : "not-allowed",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default CheckboxButtonForm;
