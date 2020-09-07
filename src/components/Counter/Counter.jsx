import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked {count} times.
      </p>
      <button
        type="button"
        className="px-4 py-2 mt-2 text-white bg-pink-400 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
    </div>
  );
};

export default Counter;
