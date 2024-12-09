import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div style={{  margin: "80px", display:"flex" }}>
      {step === 1 && (
        <div>
          <h2>Step 1: Name</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ margin: "10px", width:"70vh" }}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Address</h2>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            style={{ margin: "30px", width:"70vh" }}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}style={{margin:"5px" }}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Payment</h2>
          <input
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            placeholder="Enter payment details"
            style={{ margin: "30px", width:"70vh" }}
            
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={() => alert(JSON.stringify(formData))} class= "btn">Submit</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
