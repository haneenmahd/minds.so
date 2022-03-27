import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* Main rendering outlet for the app, define global context values and functions here */}

      <Outlet />
    </div>
  );
}
