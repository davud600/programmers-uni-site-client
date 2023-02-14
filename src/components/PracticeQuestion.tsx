import { useRef } from 'react';

const PracticeQuestion = () => {
  const radio1: any = useRef(null);
  const radio2: any = useRef(null);

  const handleSubmit = () => {
    // console.log(radio2.current?.checked);
  };

  return (
    <div className="flex flex-col p-4">
      <span className="text-xl font-medium md:text-3xl">
        What would the following lines of code give us : <br></br>int a, int b =
        30, int c;<br></br>System.out.println(b); <br></br>
        System.out.print(c);
      </span>
      <div className="p-8">
        <input
          ref={radio1}
          type="radio"
          id="radio1"
          name="radios"
          value="Error"
        ></input>
        <label htmlFor="radio1"> Error</label>
        <br></br>
        <br></br>

        <input
          ref={radio2}
          type="radio"
          id="radio3"
          name="radios"
          value="30"
        ></input>
        <label htmlFor="radio3"> 30</label>
        <br></br>
        <br></br>

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
  );
};

export default PracticeQuestion;
