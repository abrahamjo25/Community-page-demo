import React from "react";
import MainContent from "../components/MainContent";
import Latest from "../components/Latest";
import { Provider } from "./Provider";
export const Home = () => {
  return (
    <div>
      <Provider>
        <MainContent />
        <Latest />
      </Provider>
    </div>
  );
};
