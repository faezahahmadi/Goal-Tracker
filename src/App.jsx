import Layout from "./Layout/Layout"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import CreateGoal from "./pages/CreateGoal";
import GoalsList from "./pages/GoalsList";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import GoalDetails from "./pages/GoalDetails";
import getTheme from "./theme";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";


function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const [goals, setGoals] = useState([]);


  const handleAddGoal = (goalData) => {
    setGoals((prev) => [...prev, {
      id: Date.now() + Math.random(),
      ...goalData,
      progress: 0,
      status: "Active"
    }])
  }



  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/createGoal" element={<CreateGoal addGoal={handleAddGoal} />} />
          <Route path="/goalsList" element={<GoalsList goals={goals} />} />
          <Route path="/goalsList/:id" element={<GoalDetails goals={goals} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
