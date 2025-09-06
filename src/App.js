import React from 'react';
import './App.css';
import Myheader from "./components/header"
import Addtask from "./components/addftask"
import Showtask from "./components/showtask"
function App() {
  const [tasks,settasks]=React.useState(JSON.parse(localStorage.getItem("tasks"))||[])
  const [task,settask]=React.useState({})
  const [theme,settheme] = React.useState(JSON.parse(localStorage.getItem("theme"))||"light")


  React.useEffect(()=>
    {localStorage.setItem("tasks",JSON.stringify(tasks))}

  ,[tasks])
React.useEffect(() => {
  document.querySelectorAll(".themeselector span").forEach(el => {
    if (!el.classList.contains(theme)) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });

  document.body.className = theme;
  localStorage.setItem("theme", JSON.stringify(theme));
}, [theme]);
  return (
    <div className="App">
      <Myheader theme={theme} settheme={settheme}/>
      <Addtask tasks={tasks} settasks={settasks} task={task} settask={settask}/>
      <Showtask tasks={tasks} settasks={settasks} task={task} settask={settask} theme={theme} />
    </div>
  );
}

export default App;
