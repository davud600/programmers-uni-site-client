'use client';

import React, { useRef } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const radio1: any = useRef(null);
  const radio2: any = useRef(null);

  // const [practice_Label, setPracticeLabel] = useState()
  const handleSubmit = () => {
    console.log(radio2.current?.checked);
  };

  return (
    <Main
      meta={
        <Meta
          title="Programmer's University"
          description="Community for students, made by students."
        />
      }
    >
      <section id="home-section">
        <h1 className="text-black">coming soon...</h1>
      </section>
      <section id="practice-section" className="practice-section">
        <div className="main-text-container">
          <span className="main-text">
            Practice!
            <div className="main-text-image-container">
              <img src="/assets/images/logo.png" className="logo-footer"></img>
            </div>
          </span>
          <span className="second-text">
            What would the following lines of code give us : <br></br>int a, int
            b = 30, int c;<br></br>System.out.println(b); <br></br>
            System.out.print(c);
          </span>
          <div className="answer-container">
            <input
              ref={radio1}
              type="radio"
              id="radio1"
              name="radios"
              value="Error"
              className="radios"
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
              className="radios"
            ></input>
            <label htmlFor="radio3"> 30</label>
            <br></br>
            <br></br>

            <button
              type="button"
              id="btn"
              className="submit-btn"
              onClick={handleSubmit}
            >
              <span>Submit</span>
            </button>
          </div>
        </div>

        <div className="image-container">
          <img src="/assets/images/problems.png" alt="not responding atm"></img>
        </div>
      </section>
    </Main>
  );
};

export default Index;
