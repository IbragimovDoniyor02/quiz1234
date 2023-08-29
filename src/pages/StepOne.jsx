import React, { useState } from "react";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { Indicator } from "../components/Indicator";

export const StepOne = ({ onGoNextPage }) => {
  const[ userText, setUsertext ] = useState(null) 
  
  const isNextButtonDisablid = !userText

  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
        <Indicator progress={1} />
          <div className="question">
          <Header type="h2" headerText="1. Занимательный вопрос" />.
          <label className="input-wrapper">
              <AppInput 
              isRequierd="isRequired"
              type="text"
              name="username"
              placeholderText="Ваш ответ"
              errorText="Введите номер в правильном формате например"
              onChange={(e) => setUsertext (e.target.value.trim())}
              />
              </label>
            <AppButton 
            isDisabled={false}
            type="submit"
            id="next-btn"
            buttonText="Далее"
            onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
