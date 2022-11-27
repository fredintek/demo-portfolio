import { useState } from "react";
import Card from "./../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqCard = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card onClick={() => setShowAnswer(!showAnswer)}>
      <div className="faq_qheader">
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  );
};

export default FaqCard;
