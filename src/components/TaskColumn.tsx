import { Task, TaskStatus } from "../types";
import { TaskCard } from "./TaskCard";
import { filterByStatus } from "../helpers/tasks";

interface TaskColumnProps {
  columnStatus: TaskStatus;
  title: string;
  tasks: Task[];
}

export function TaskColumn({ title, tasks, columnStatus }: TaskColumnProps) {
  const filteredTasks = filterByStatus(tasks, columnStatus);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
