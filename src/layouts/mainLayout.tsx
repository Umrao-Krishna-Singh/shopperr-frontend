import { Outlet } from "react-router-dom";
import Nav from "../components/navbar";

const main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default main;
