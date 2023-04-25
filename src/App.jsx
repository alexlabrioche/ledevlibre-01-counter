import React from "react";
import logo from "./logo.svg";

export default function App() {
  const count = 0;

  const handleIncrement = () => {
    alert("You must handle counter by incrementing it");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-700 text-center text-white selection:bg-green-900">
      <header className="mb-16 rounded-xl bg-slate-400">
        <img
          src={logo}
          className="animate-speed h-60 p-12 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
      </header>
      <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
        Counter App
      </p>
      <div className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text font-bold text-transparent selection:bg-transparent">
        <p className="mt-4 text-2xl">count is: {count}</p>
        <button
          type="button"
          className="my-6 mr-4 rounded px-2 py-2 transition-all"
          onClick={handleIncrement}
        >
          increment
        </button>
      </div>
      <div className="text-lg">
        <p>
          Implement a simple counter with{" "}
          <a
            className="text-sky-300 transition-all hover:text-blue-400"
            href="https://react.dev/reference/react/useState"
            target="_blank"
            rel="noopener noreferrer"
          >
            useState
          </a>
        </p>
        <p className="text-sm">
          BONUS: implement a new button that decrement the counter
        </p>
      </div>
    </div>
  );
}
