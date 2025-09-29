import { useState } from "react";
import { TaskColumn } from "./components/TaskColumn";
import { TaskStatus, TaskStatusArray } from "./types";
import { getTasks } from "./services/tasksService";
import { filterByStatus } from "./helpers/tasks";
import { CreateTaskForm } from "./components/CreateTaskForm";

const TASK_STATUS_IDS: TaskStatusArray = ["todo", "inProgress", "done"];
const COLUMN_LABELS: Record<TaskStatus, string> = {
  todo: "To Do",
  inProgress: "In Progress",
  done: "Done",
};

export function ChallengeComponent() {
  const mockTasks = getTasks();
  const [tasks, setTasks] = useState(mockTasks);

  return (
    <div className="flex justify-evenly m-4 border-1">
      <div>
        <CreateTaskForm
          onCreate={(task) => {
            setTasks((prev) => [...prev, { id: crypto.randomUUID(), ...task }]);
          }}
        />
      </div>
      {TASK_STATUS_IDS.map((taskStatusId) => (
        <TaskColumn
          key={taskStatusId}
          title={COLUMN_LABELS[taskStatusId]}
          tasks={filterByStatus(tasks, taskStatusId)}
        />
      ))}
    </div>
  );
}

// TODO:
// Categories: iterate and render on field
// TaskCards: iterate on Categories
// TaskCard update
