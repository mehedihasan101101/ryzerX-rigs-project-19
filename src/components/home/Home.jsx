import Categoryies from "../categories/Categoryies";

import { Outlet} from "react-router";
import Herosection from "../heroSection/Herosection";


const Home = () => {


  return (
    <>
      <Herosection></Herosection>
      <h1 className=" text-black text-center text-3xl font-extrabold mt-10 mb-10">Discover Our Tech Collection</h1>
      <div className="flex lg:max-w-[90%]  m-auto gap-5">
        <Categoryies></Categoryies>
        <Outlet> </Outlet>
      </div>




    </>
  );
};

export default Home;