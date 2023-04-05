import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const { text } = await (await fetch("/api/message")).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
