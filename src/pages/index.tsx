'use client';

import React, { useRef } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const radio1: any = useRef(null);
  const radio2: any = useRef(null);

  const handleSubmit = () => {
    // console.log(radio2.current?.checked);
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
      <section id="courses-section">
        <h1 className="pb-16 text-2xl text-black md:text-4xl">
          Our Course Programs.
        </h1>
        <div className="top-courses-container flex flex-col md:flex-row">
          <article className="course-card first-course-card flex flex-col justify-center py-8 px-24 drop-shadow-2xl">
            {/* <h2 className="text-lg text-black md:text-xl">Course Title</h2>
            <p className="text-base text-black opacity-75 md:text-lg">
              this is the details about the course and shit idk like more info
              and stuff...
            </p>
            <button>More details</button> */}
          </article>
          <article className="course-card second-course-card flex flex-col justify-center py-8 px-24 drop-shadow-2xl">
            {/* <h2 className="text-lg text-black md:text-xl">Course Title</h2>
            <p className="text-base text-black opacity-75 md:text-lg">
              this is the details about the course and shit idk like more info
              and stuff...
            </p>
            <button>More details</button> */}
          </article>
        </div>
        <div className="z-10">
          <article className="course-card third-course-card flex flex-col justify-center py-8 px-24 drop-shadow-2xl">
            {/* <h2 className="text-lg text-black md:text-xl">Course Title</h2>
            <p className="text-base text-black opacity-75 md:text-lg">
              this is the details about the course and shit idk like more info
              and stuff...
            </p>
            <button>More details</button> */}
          </article>
        </div>
      </section>
      <section id="practice-section" className="flex w-fit">
        <div className="flex flex-col p-6 md:p-16">
          <span className="flex pb-8 text-6xl font-black md:pb-12 md:text-8xl">
            Practice!
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <img
                src="/assets/images/logo.png"
                className="logo-footer"
                alt="Practice image"
              ></img>
            </div>
          </span>
          <span className="text-xl font-medium md:text-3xl">
            What would the following lines of code give us : <br></br>int a, int
            b = 30, int c;<br></br>System.out.println(b); <br></br>
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

        {/* <div className="image-container">
          <img src="/assets/images/problems.png" alt="not responding atm"></img>
        </div> */}
      </section>
    </Main>
  );
};

export default Index;
