import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddTask({ tasks, settasks, task, settask }) {

  console.log(task);

  function handle_click(e) {
    e.preventDefault();
    const taskName = e.target.taskk.value;
    const date = new Date();

    if (task.id) {
      const updatedtasks = tasks.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              date: date.toLocaleDateString(),
              time: date.toLocaleTimeString(),
            }
          : todo
      );
      settasks(updatedtasks);   // ✅ fixed here
          // ✅ reset input
    } else {
      const todo = {
        id: date.getTime(),
        name: taskName,
        date: date.toLocaleDateString(),
          time: date.toLocaleTimeString(),
        };
      taskName && settasks([...tasks, todo]);
    }
    settask({});    // ✅ reset input
  }

  return (
    <section className="addtask container my-5 w-3">
      <form onSubmit={handle_click} className="d-flex gap-2">
        <input
          type="text"
          name="taskk"
          value={task.name||""}
          maxLength={25}
          placeholder="Add the task"
          autoComplete="off"
          className="form-control"
          onChange={(e) => settask({ ...task, name: e.target.value })}
        />
        <button type="submit" className="btn btn-success">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
}
