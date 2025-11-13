import React, { useState } from "react";

// Default export: Two independent counters in one component
function Counters() {
  // Counter A state
  const [countA, setCountA] = useState(0);
  // Counter B state
  const [countB, setCountB] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl w-full grid md:grid-cols-2 gap-6">
        {/* Card for Counter A */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Counter A</h2>
          <div className="text-4xl font-bold mb-4">{countA}</div>

          <div className="flex gap-3">
            <button
              onClick={() => setCountA((c) => c + 1)}
              className="px-4 py-2 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition"
            >
              +
            </button>

            <button
              onClick={() => setCountA((c) => c - 1)}
              className="px-4 py-2 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition"
            >
              -
            </button>

            <button
              onClick={() => setCountA(0)}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Card for Counter B */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Counter B</h2>
          <div className="text-4xl font-bold mb-4">{countB}</div>

          <div className="flex gap-3">
            <button
              onClick={() => setCountB((c) => c + 1)}
              className="px-4 py-2 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition"
            >
              +
            </button>

            <button
              onClick={() => setCountB((c) => c - 1)}
              className="px-4 py-2 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition"
            >
              -
            </button>

            <button
              onClick={() => setCountB(0)}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Shared controls / summary (spans full width) */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Combined total</p>
            <p className="text-2xl font-semibold">{countA + countB}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setCountA(0);
                setCountB(0);
              }}
              className="px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition"
            >
              Reset Both
            </button>

            <button
              onClick={() => {
                // example: sync B to A
                setCountB(countA);
              }}
              className="px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
            >
              Set B = A
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Counters