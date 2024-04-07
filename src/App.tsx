import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [dataFromApi, setDataFromApi] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/myroute");
        setDataFromApi(res?.data.toString());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <p>page loaded</p>
      <p>{dataFromApi}</p>
    </>
  );
}

export default App;
