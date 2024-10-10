import React, { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }
  useEffect(function () {
    getadvice();
  }, []);
  return (
    <>
      <section>
        <div>
          <p>{advice}</p>
          <button onClick={getadvice}>get advice</button>
          <p>
            you have read <strong>{count}</strong> pieces of advice
          </p>
        </div>
      </section>
    </>
  );
}
