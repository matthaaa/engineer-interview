import { Task } from "../types";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

export function TaskColumn({ title, tasks }: TaskColumnProps) {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
