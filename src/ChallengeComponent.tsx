import { TaskColumn } from "./components/TaskColumn";
import { Task, TaskStatus, TaskStatusArray } from "./types";

const COLUMN_IDS: TaskStatusArray = ["todo", "inProgress", "done"];
const COLUMN_LABELS: Record<TaskStatus, string> = {
  todo: "To Do",
  inProgress: "In Progress",
  done: "Done",
};

export function ChallengeComponent() {
  return (
    <div className="flex justify-evenly m-4 border-1">
      {COLUMN_IDS.map((columnId) => (
        <TaskColumn
          key={columnId}
          columnStatus={columnId}
          title={COLUMN_LABELS[columnId]}
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
//   {
//     id: "2",
//     title: "Do dishes",
//     description: "Handwash the skillet",
//     status: "inProgress",
//   },
//   {
//     id: "3",
//     title: "Nap",
//     description: "Need I say more?",
//     status: "done",
//   },
// ] as Task[];
