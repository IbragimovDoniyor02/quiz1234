import React,{useState} from "react";
import { AppButton } from "../components/AppButton";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { ListedAnswerItem } from "../components/ListedAnswerItem";

export const StepThree = ({ onGoNextPage }) => {
  const [checkedItem, setCheckedItem] = useState(null)
  const  answerType = [
    {
      id:"variant-1",
      text:"Ваш ответ 1",
      img:"./img/laugh.png",
    },
    {
      id:"variant-2",
      text:"Ваш ответ 2",
      img:"./img/hearts.png",
    },
    {
      id:"variant-3",
      text:"Ваш ответ 3",
      img:"./img/smirk.png",
    },
    {
      id:"variant-4",
      text:"Ваш ответ 4",
      img:"./img/fright.png",
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <Indicator progress={3} />
          <div className="question">

          <Header type="h2" headerText="3. Занимательный вопрос" />

            <ul className="emoji-variants">
            {
              answerType.map(answerItem => (
                <ListedAnswerItem 
                key={answerItem.id} 
                id={answerItem.id} 
                answerText={answerItem.text} 
                answerImg={answerItem.img}
                isChecked={checkedItem === answerItem.id}
                onChange={() => setCheckedItem (answerItem.id)}
                />
              ))
            }
            </ul>
            <AppButton 
          isDisabled={!checkedItem}
          id="next-btn"
          buttonText="Далее"
          type="submit"
          onClick={() => onGoNextPage()}
          />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree;
