import type { Dispatch, SetStateAction } from 'react';
import { useRef, useState } from 'react';

import Alert from '../Alert';

const ANSWERED_CORRECT_MESSAGE = 'The answer you chose was correct!';
const ANSWERED_WRONG_MESSAGE = 'The answer you chose was wrong!';

interface Answer {
  content: string;
  value: number;
}

interface PracticeQuestion {
  question: string;
  code: string;
  answers: Answer[];
  correctAnswer: number;
}

const practiceQuestion: PracticeQuestion = {
  question: 'What would the following lines of code give us',
  code: '<span>int a, int b = 30, int c;</span><span>System.out.println(b);</span><span>System.out.println(c);</span>',
  answers: [
    {
      content: 'Error',
      value: 0,
    },
    {
      content: '30',
      value: 1,
    },
  ],
  correctAnswer: 0,
};

interface AnsweredStatus {
  answered: boolean;
  choice: number;
  correct: boolean;
}

const PracticeQuestionAnswer = ({
  answer,
  correctAnswer,
  setAnsweredStatus,
}: {
  answer: Answer;
  correctAnswer: number;
  setAnsweredStatus: Dispatch<SetStateAction<AnsweredStatus>>;
}) => {
  const radioRef: any = useRef(null);

  return (
    <>
      <input
        ref={radioRef}
        type="radio"
        id={`${answer.value}`}
        name="radios"
        value={answer.value}
        onChange={() => {
          setAnsweredStatus({
            answered: false,
            choice: answer.value,
            correct: answer.value === correctAnswer,
          });
        }}
      ></input>
      <label htmlFor={`${answer.value}`}> {answer.content}</label>
      <br></br>
      <br></br>
    </>
  );
};

const Practice = () => {
  const [answeredStatus, setAnsweredStatus] = useState<AnsweredStatus>({
    answered: false,
    choice: 0,
    correct: false,
  });

  const handleSubmit = () => {
    setAnsweredStatus((prevAnsweredStatus) => ({
      ...prevAnsweredStatus,
      answered: true,
    }));
  };

  return (
    <>
      {answeredStatus.answered && (
        <Alert
          type={answeredStatus.correct ? 'success' : 'danger'}
          message={`${
            answeredStatus.correct
              ? ANSWERED_CORRECT_MESSAGE
              : ANSWERED_WRONG_MESSAGE
          }`}
        />
      )}
      <div className="flex flex-col px-4">
        <span className="text-xl font-medium md:text-3xl">
          {practiceQuestion.question}:{' '}
        </span>
        <br />
        <div
          className="flex flex-col italic"
          dangerouslySetInnerHTML={{ __html: practiceQuestion.code }}
        ></div>

        <div className="p-8">
          {practiceQuestion.answers.map((answer) => (
            <PracticeQuestionAnswer
              key={answer.value}
              answer={answer}
              correctAnswer={practiceQuestion.correctAnswer}
              setAnsweredStatus={setAnsweredStatus}
            />
          ))}

          <button
            type="button"
            id="btn"
            className="submit-btn mt-3 rounded-3xl border-2 border-red-800 px-6 py-2 text-red-800 hover:bg-red-800 hover:text-white md:px-8 md:py-3"
            onClick={handleSubmit}
          >
            <span className="text-base md:text-xl">Submit</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Practice;
