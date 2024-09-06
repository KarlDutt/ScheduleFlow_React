import React, { useState } from "react";
import "./App.css";

const backendUrl = "https://f4c8f6eb-fb75-4cd1-8c61-59c98773fda2-00-1cmj587v4b97u.worf.replit.dev/"



const TodoApp = () => {
  // State to manage the array of todolists for each day
  const [currentDay, setCurrentDay] = useState("Monday");
  const [todolists, setTodolists] = useState({
    Monday: ["Matemaatika", "Ajalugu", "Eesti keel", "Kirjandus", "Füüsika", "Muusika"],
    Tuesday: ["Ehitamine", "Suusatamine", "Tantsimine", "Inglise keel", "Saksa keel"],
    Wednesday: ["Geograafia", "Kehalise kasvatus", "Eesti keel", "Rootsi keel", "Codesters"],
    // Add more days and their corresponding tasks here if needed
  });
  const [newTask, setNewTask] = useState("");
  const [counter, setCounter] = useState(3);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTodolists({
      ...todolists,
      [currentDay]: [...todolists[currentDay], newTask],
    });

    setNewTask("");
    setCounter(counter + 1);
  };

  const getColorClass = (index) => {
    const numberOfColors = 5;
    const colorIndex = index % numberOfColors + 1;
    return `color${colorIndex}`;
  };

  const teachers = ["M. Randvee", "M. Kõrbe", "P. Järvela"];
  const time = ["8:30-9:45", "10:00-11:15", "11:30-12:45"];
  const classroomNumber = ["108", "205", "420"];
  const [additionalTexts, setAdditionalTexts] = useState([
    "Some text 1",
    "Some text 2",
    "Some text 3"
  ]);

  return (
    <div className="thebigbox">
      <p className="notmyjob">i dont get paid enough to add more days</p>
      <div class="container2">
        <div class="profile1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg>
        </div>
        <button class="abigbutton">
          <span>Notifications</span> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 3C6.5 3 2 6.58 2 11a7.218 7.218 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6m5-5v-2h-2v2zm-4 0v-2h-2v2zm-4 0v-2H7v2z"/>
          </svg>
        </button>
      </div>
      <div className="dayButtons">
        <button onClick={() => setCurrentDay("Monday")}>Monday</button>
        <button onClick={() => setCurrentDay("Tuesday")}>Tuesday</button>
        <button onClick={() => setCurrentDay("Wednesday")}>Wednesday</button>
        <button onClick={() => setCurrentDay("Tuesday")}>Thursday</button>
        <button onClick={() => setCurrentDay("Tuesday")}>Friday</button>
        {/* Add buttons for other days if needed */}
      </div>
      <div className="allLessons">
        {todolists[currentDay].map((task, index) => (
          <div className={`todolist ${getColorClass(index)}`} key={index}>
            <div className="left">
              <ul className="lessons">
                <li className="lessonBold">{task}</li>
              </ul>
              <div className="classroomNumber">
                {classroomNumber[index % classroomNumber.length]}
              </div>
            </div>
            <div className="right">
              <div className="teacherName">
                {teachers[index % teachers.length]}
              </div>
              <div className="classDuration">
                {time[index % time.length]}
              </div>
            </div>
          </div>
        ))}
      </div>
    

      <div className="inputfield">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">New task:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default TodoApp;