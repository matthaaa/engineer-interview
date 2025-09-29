import { useState } from "react";
import { TaskColumn } from "./components/TaskColumn";
import { Task, TaskStatus } from "./types";
import { getTasks } from "./services/tasksService";
import { filterByStatus } from "./helpers/tasks";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { COLUMN_LABELS, TASK_STATUS_IDS } from "./utils/constants";

export function ChallengeComponent() {
  const mockTasks = getTasks();
  const [tasks, setTasks] = useState(mockTasks);

  const moveTask = (id: string, direction: "previous" | "next") => {
    setTasks((prev: Task[]) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        const order: TaskStatus[] = ["todo", "inProgress", "done"];
        let taskStatusIndex = order.indexOf(task.status);

        if (direction === "previous")
          taskStatusIndex = Math.max(0, taskStatusIndex - 1);
        if (direction === "next")
          taskStatusIndex = Math.min(order.length - 1, taskStatusIndex + 1);

        return { ...task, status: order[taskStatusIndex] };
      })
    );
  };

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
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}
