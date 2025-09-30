import { useEffect, useState } from "react";
import { TaskColumn } from "./components/TaskColumn";
import { Task, TaskStatus } from "./types";
import { taskService } from "./services/taskService";
import { filterByStatus } from "./helpers/tasks";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { COLUMN_LABELS, TASK_STATUS_IDS } from "./utils/constants";

export function ChallengeComponent() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks on mount (seed if empty)
  useEffect(() => {
    (async () => {
      let allTasks = await taskService.fetchAll();
      if (allTasks.length === 0) {
        allTasks = await taskService.seed();
      }
      setTasks(allTasks);
    })();
  }, []);

  const moveTask = async (id: string, direction: "previous" | "next") => {
    const order: TaskStatus[] = ["todo", "inProgress", "done"];
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    let taskStatusIndex = order.indexOf(task.status);
    if (direction === "previous")
      taskStatusIndex = Math.max(0, taskStatusIndex - 1);
    if (direction === "next")
      taskStatusIndex = Math.min(order.length - 1, taskStatusIndex + 1);

    const updated = await taskService.update(id, {
      status: order[taskStatusIndex],
    });

    if (updated) {
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    }
  };

  const handleCreate = async (task: Omit<Task, "id">) => {
    const newTask = await taskService.create(task);
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="flex justify-evenly m-4 border-1">
      <div>
        <CreateTaskForm onCreate={handleCreate} />
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
