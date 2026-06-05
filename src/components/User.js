import { useState } from "react";

const User = (props) => {
  const { method, name, location, contact } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  return (
    <div className="user-container">
      <h1>{method}</h1>
      <h2>count: {count}</h2>
      <h2>count2: {count2}</h2>
      <div className="class-function">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count +
        </button>
        <button
          onClick={() => {
            setCount2(count2 + 2);
          }}
        >
          Count2 +
        </button>
      </div>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;
