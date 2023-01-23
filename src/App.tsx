import { useState } from "react";

import Calendar from "Components/Calendar";
import Meetings from "Components/Meetings";

import Layout from "Components/Layout";
import Header from "Components/Header";

const App = () => {
  

  return (
    <Layout>
      <Calendar />

      <Meetings />
    </Layout>
  );
};

export default App;
