import { useState } from "react";

import Calendar from "Components/Calendar";
import Meetings from "Components/Meetings";
import { startOfToday } from "date-fns";
import Layout from "Components/Layout";
import Header from "Components/Header";

const App = () => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);

  return (
    <Layout>
      <Calendar
        selectedDay={selectedDay}
        onSelect={(day) => setSelectedDay(day)}
      />

      <Meetings selectedDay={selectedDay} />
    </Layout>
  );
};

export default App;
