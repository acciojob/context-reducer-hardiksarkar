import React from "react";
import ContextReducer from "./ContextReducer";
import AuthProvider from "../contexts/AuthProvider";
import "../styles/App.css"

export default function App() {
  return (
    <div>
      <AuthProvider>
        <ContextReducer />
      </AuthProvider>
    </div>
  );
}
