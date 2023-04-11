import React, { useCallback, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Contexts/DataContext';

const Answers = () => {
    const {questionId} = useParams();
    const {data} = useContext(DataContext);
    const selectedQuestion = data.find(({id}) => id === parseInt(questionId));
  return (
    <div>
     <h1>Answer:</h1>
     <p>
        {selectedQuestion.answer}
     </p>

    </div>
  )
}

export default Answers
