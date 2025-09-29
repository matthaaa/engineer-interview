import { Task, TaskStatus } from "../types";

interface TaskCardProps {
  task: Task;
  onMovePrevious?: (taskId: string) => void;
  onMoveNext?: (taskId: string) => void;
}

export function TaskCard({ task, onMovePrevious, onMoveNext }: TaskCardProps) {
  const { id, title, description, status } = task;

  const statusOrder: TaskStatus[] = ["todo", "inProgress", "done"];
  const currentIndex = statusOrder.indexOf(status);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
      <p>{description}</p>
      <div>
        <button
          className="mr-8"
          onClick={() => onMovePrevious?.(id)}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={() => onMoveNext?.(id)}
          disabled={currentIndex === statusOrder.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
