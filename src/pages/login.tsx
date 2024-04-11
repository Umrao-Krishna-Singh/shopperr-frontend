import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ title: "" });
  const [loading, setLoading] = useState(true);

  const sendData = async (val: { title: string }) => {
    try {
      const check = await axios.post("http://localhost:3000/myroute", val);
      console.log(check);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendData(data);
    setData({ title: "" });
  };

  return (
    <>
      <div>Login Page</div>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitFunc}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Test Form
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Test field
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={data.title}
                  onChange={(e) => setData({ title: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
