import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Resume from "../components/Resume";

const Routers = () => {
  return <>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
     
  </>;
};

export default Routers;
