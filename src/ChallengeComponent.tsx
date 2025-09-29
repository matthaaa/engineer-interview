import { useState } from "react";
import { TaskColumn } from "./components/TaskColumn";
import { Task, TaskStatus, TaskStatusArray } from "./types";
import { getTasks } from "./services/tasksService";
import { filterByStatus } from "./helpers/tasks";

const COLUMN_IDS: TaskStatusArray = ["todo", "inProgress", "done"];
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
      {COLUMN_IDS.map((columnId) => (
        <TaskColumn
          key={columnId}
          title={COLUMN_LABELS[columnId]}
          tasks={filterByStatus(tasks, columnId)}
        />
      ))}
    </div>
  );
}

// TODO:
// Categories: iterate and render on field
// TaskCards: iterate on Categories
// TaskCard update
