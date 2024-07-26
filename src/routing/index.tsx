 
import { Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home/home";
import AddPost from "../pages/addPost/AddPost";
   
function Routing() {
  return (
       <Routes>
         <Route path="*" element={<NotFound />} />
           <Route path="/" element={<Home/>} />
          <Route path="/addPost" element={<AddPost />} />
       </Routes>
   );
}

export default Routing;