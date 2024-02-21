"use client";

import React, { useState } from "react";

export default function Test() {
  const [text, setText] = useState("HERROW!");
  const [box, setBox] = useState(false);
  const [border, setBorder] = useState(true);
  const [size, setSize] = useState(true);
  const [textSize, setTextSize] = useState(true);

  const [score, setScore] = useState(0);

  const [bt, setBt] = useState(false);
  const [pt, setPt] = useState(false);
  const [ct, setCt] = useState(false);

  const [commandList, setCommandList] = useState([]);

  const [shake, setShake] = useState(false);

  const textChange = () => {
    setText("FUCK YOU!!");
    setScore(score + 1);
  };

  const textReset = () => {
    setText("YES! IVE BEEN RESET!!");
    setScore(score + 1);
  };

  const boxChange = () => {
    setBox(true);
    setScore(score + 1);
  };

  const boxReset = () => {
    setBox(false);
    setScore(score + 1);
  };

  const borderChange = () => {
    setBorder(true);
    setScore(score + 1);
  };

  const borderReset = () => {
    setBorder(false);
    setScore(score + 1);
  };

  const sizeChange = () => {
    setSize(true);
    setText("BIG!");
    setTextSize(false);
    setScore(score + 1);
  };

  const sizeReset = () => {
    setSize(false);
    setText("SMALL!");
    setTextSize(true);
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleButtons = () => {
    setBt(!bt);
  };

  const togglePanel = () => {
    setPt(!pt);
  };

  const toggleCounter = () => {
    setCt(!ct);
    appendString("You toggle the counter!");
  };

  const appendString = (a) => {
    setCommandList((prevList) => [...prevList, a]);
  };

  const resetCommandList = () => {
    setCommandList([]);
  };

  const handleMouseDown = () => {
    setShake(true);
  };

  const handleMouseUp = () => {
    setShake(false);
  };

  return (
    <div className="w-full items-center justify-center mx-auto">
      <div
        className={`${
          shake ? "animate-shake" : "block"
        } flex gap-x-2 justify-center`}
      >
        <div className="w-1/3">
          <div className=" bg-white rounded-md mt-20 p-2 mx-auto">
            <div className="flex w-full p-2">
              <button
                onClick={toggleButtons}
                className="grow h-10 text-white bg-blue-300 hover:bg-blue-500 active:bg-blue-700 rounded-md"
              >
                Show/Hide Buttons
              </button>
              <button
                onClick={togglePanel}
                className="grow  mx-1 h-10 text-white bg-red-300 hover:bg-red-500 active:bg-red-700 rounded-md"
              >
                Show/Hide Panel
              </button>
              <button
                onClick={toggleCounter}
                className="grow h-10 text-white bg-yellow-300 hover:bg-yellow-500 active:bg-yellow-700 rounded-md"
              >
                Show/Hide Counter
              </button>
            </div>
          </div>
          <div
            className={`${
              bt ? "hidden" : ""
            }   bg-white flex mx-auto mt-2 p-4 rounded-md`}
          >
            <div className="bg-zinc-200 rounded-md w-full mx-auto p-2 ">
              <div className="m-1 ">
                <button
                  onClick={() => {
                    textChange();
                    appendString("You changed the text!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Change
                </button>
                <button
                  onClick={() => {
                    textReset();
                    appendString("You reset the text!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    sizeChange();
                    appendString("You changed the text size!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Bigger
                </button>
                <button
                  onClick={() => {
                    sizeReset();
                    appendString("You reset the text size!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Smaller
                </button>
              </div>
              <div className="m-1">
                <button
                  onClick={() => {
                    borderChange();
                    appendString("You changed the border!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Border Change
                </button>
                <button
                  onClick={() => {
                    borderReset();
                    appendString("You reset the border!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Border Reset
                </button>
                <button
                  onClick={() => {
                    boxChange();
                    appendString("You changed the box colour!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Change colour
                </button>
                <button
                  onClick={() => {
                    boxReset();
                    appendString("You reset the box colour!\n");
                  }}
                  className="bg-zinc-400 p-2 rounded-md w-1/4 hover:bg-zinc-600 active:bg-zinc-800"
                >
                  Reset Colour
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${
              pt ? "hidden" : ""
            } bg-white flex mx-auto mt-2 p-4 rounded-md`}
          >
            <div className="bg-zinc-200 flex rounded-md w-full h-96 mx-auto items-center">
              <div
                className={`${box ? "bg-blue-200 " : "bg-green-200 "} ${
                  border ? "border-black border-4 " : "border-red-500 border-8 "
                } ${
                  size ? "w-4/5 h-4/5" : "w-1/3 h-1/3"
                } flex mx-auto items-center rounded-md`}
              >
                <p
                  id="tc"
                  className={`${
                    textSize ? "text-xl text-center" : "text-6xl text-center"
                  } "flex mx-auto p-4 text-green-900 font-semibold"`}
                >
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 text-black rounded-md bg-white mt-20 p-4">
          <div className=" h-[490px] bg-zinc-200 rounded-md w-full mx-auto p-4 overflow-auto">
            {commandList.map((command, index) => (
              <div className="-m-1" key={index}>
                {" "}
                {command}{" "}
              </div>
            ))}
          </div>
          <div
            className={`${
              ct ? "hidden" : ""
            } bg-white w-full  h-auto mx-auto mt-2 rounded-md`}
          >
            <div className="text-zinc-900 text-center font-semibold">
              Counter
            </div>

            <p className="w-full text-black text-center text-6xl bg-zinc-200 rounded-md">{`${score}`}</p>
            <button
              onClick={() => {
                resetScore();
                resetCommandList();
                appendString("You reset the score!\n");
              }}
              className="flex text-2xl bg-red-600 hover:bg-red-800 active:bg-red-900 w-full h-10 rounded-md mx-auto mt-2"
            >
              <p className="m-auto text-white">Reset</p>
            </button>
          </div>
        </div>
      </div>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={() => {
          resetScore();
          resetCommandList();
          appendString("You reset the score!\n");
        }}
        className="bg-slate-800 hover:bg-slate-700 text-3xl flex justify-between rounded-md font-bold mx-auto mt-2 p-4"
      >
        SHAKE TO RESET!
      </button>
    </div>
  );
}
