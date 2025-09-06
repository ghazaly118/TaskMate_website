import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // ✅ Import Bootstrap Icons

export default function ShowTask({tasks,settasks,task,settask,theme}) {

  function handle_clearall(){
  settasks([])
}
function handle_delete(id){
  const updatedlist=tasks.filter(task=>task.id !== id)
  settasks(updatedlist)
  
}
function handle_edit(id){
const selected=tasks.find(task=>task.id===id)
settask(selected)
  
}


  return (
    <section className="p-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <span className={`h5 mb-0 ${theme !=="light" ? "text-white" : ""}`}>Todo</span>
          <span className="badge bg-primary">{tasks.length}</span> 
        </div>
        <button onClick={handle_clearall}  className={`btn btn-sm  ${theme === "g2" ? "btn-light text-danger" : "btn-outline-danger"}`}>Clear</button>
      </div>

      {/* Task List */}
      <ul className="list-group">
      {tasks.map((task) => (
  <li 
    className="list-group-item d-flex justify-content-between align-items-center"
  >
    <div>
      <span className="fw-bold">{task.name}</span>
      <small className="text-muted ms-2">{task.time} {task.date} </small>
    </div>
    <div className="d-flex gap-2">
      <i  onClick={() => handle_edit(task.id)}className="bi bi-pen text-primary" role="button"></i>
      <i onClick={() => handle_delete(task.id)} className="bi bi-trash3 text-danger" role="button"></i>
    </div>
  </li>
))}
      
      </ul>
    </section>
  );
}
