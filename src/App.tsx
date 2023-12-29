import Sidebar from "./components/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
