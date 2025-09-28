import { TaskColumn } from "./components/TaskColumn";
import { TodoStatus, TodoStatusArray, Task } from "./types";

const COLUMN_IDS: TodoStatusArray = ["todo", "inProgress", "done"];
const COLUMN_LABELS: Record<TodoStatus, string> = {
  todo: "To Do",
  inProgress: "In Progress",
  done: "Done",
};

export function ChallengeComponent() {
  return (
    <div className="flex justify-evenly m-4 border-1">
      {COLUMN_IDS.map((column_id) => (
        <TaskColumn
          key={column_id}
          title={COLUMN_LABELS[column_id]}
          tasks={[]}
        />
      ))}
    </div>
  );
}

// TODO:
// Categories: iterate and render on field
// TaskCards: iterate on Categories
// TaskCard update
// const testTasks = [
//   {
//     id: "1",
//     title: "Do laundry",
//     description: "Don't forget to run the dryer this time",
//     status: "todo",
//   },
// ] as Task[];
