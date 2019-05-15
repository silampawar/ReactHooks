import React, { useState, useEffect } from "react";

const Actions = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const data = (
    <div>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <div>Current count:{count}</div>
    </div>
  );
  return data;
};

export default Actions;
