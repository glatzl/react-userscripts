import React from "react";
import "./styles/output.css";

function App() {
  return (
    <div>
      <header className="flex justify-center flex-col items-center bg-slate-700 min-h-screen text-2xl">
        <p className="text-white">
          Edit{" "}
          <code className="font-mono bg-slate-600 rounded-md px-1">
            src/App.js
          </code>{" "}
          and save. Then, refresh the page.
        </p>
        <a
          className="text-teal-400 hover:text-teal-300 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
