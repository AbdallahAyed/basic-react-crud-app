import { useEffect } from "react";
import Home from "./Home";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    console.log(Outlet);
  });

  return (
    <div id="app">
      <div className="container">
        <Sidebar />
        {!(<Outlet />) ? <Home /> : <Outlet />}
      </div>
    </div>
  );
}

export default App;
