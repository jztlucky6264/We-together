import React from "react";
import Card from "../../../../components/shared/Navigation/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import { useState } from "react";
import styles from "../StepPhoneEmail.module.css";
const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Card title="Enter you Phone number" icon="telephone">
        <TextInput
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext}></Button>
        </div>

        <p className={styles.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </>
  );
};

export default Phone;
