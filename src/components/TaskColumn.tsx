import { Task, TaskStatus } from "../types";
import { TaskCard } from "./TaskCard";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  moveTask: (id: string, direction: "previous" | "next") => void;
}

export function TaskColumn({ title, tasks, moveTask }: TaskColumnProps) {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <TaskCard
              task={task}
              onMovePrevious={(id) => moveTask(id, "previous")}
              onMoveNext={(id) => moveTask(id, "next")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
