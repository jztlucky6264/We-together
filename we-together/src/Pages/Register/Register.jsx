import React from "react";
import styles from "./Register.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/stepOtp/StepOtp";
import StepName from "../Steps/stepName/StepName";
import StepAvatar from "../Steps/stepAvatar/StepAvatar";
import StepUsername from "../Steps/stepUsername/StepUsername";
import { useState } from "react";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
