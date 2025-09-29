import { Task } from "../types";

interface TaskColumnProps {
  task: Task;
}

export function TaskCard({ task }: TaskColumnProps) {
  const { title, description, status } = task;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
