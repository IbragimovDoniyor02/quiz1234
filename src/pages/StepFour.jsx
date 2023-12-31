import React from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { NumericAnswerItem } from "../components/NumericAnswerItem";
import { AppButton } from "../components/AppButton";

const StepFour = ({ onGoNextPage }) => {
const answerOptions = [
  {
  id: 'numeric-answer-1',
  answerText: 1
  },
  {
  id: 'numeric-answer-2',
  answerText: 2
  },
  {
  id: 'numeric-answer-3',
  answerText: 3
  },
  {
  id: 'numeric-answer-4',
  answerText: 4
  },
  {
  id: 'numeric-answer-5',
  answerText: 5
  }
]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={4} />
          <div className="question">
            <Header type="h2" headerText="4. Занимательный вопрос" />
            <ul className="level-variants">
              {answerOptions.map(answerItem => (
                <NumericAnswerItem key={answerItem.id} id={answerItem.id} answerText={answerItem.answerText} />
              ))}
            </ul>
            <AppButton 
            id="next-btn"
            disabled={false}
            type="submit"
            buttonText="Завершить"
            onClick={() => onGoNextPage()}
            />
            {/* <button id="next-btn" disabled>Далее</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour;
