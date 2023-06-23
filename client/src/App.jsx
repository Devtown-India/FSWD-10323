import { useState } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Timer from "./components/Timer";
import Navabar from "./layout/Navbar";

const App = () => {
  const [view,setView] = useState("home");
  const changeView = (view)=>setView(view);
  return ( 
    <div>
      <Navabar changeView={changeView} />
      {
        view === "home" ? <Home/> : view === "posts" ? <Posts/> : <Timer/>
      }
    </div>
   );
}
 
export default App;