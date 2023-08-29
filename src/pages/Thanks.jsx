import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { Paragraph } from "../components/Paragraph";

export const Thanks = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header type="h1" headerText="Спасибо за прохождение опроса!" />
          <Paragraph paragrahText="Получи свою скидку по ссылке ниже или другое" />
          <AppButton id="get-link" type="submit" buttonText="Получить ссылку" />
        </div>
      </div>
    </div>
  )
}

export default Thanks;
