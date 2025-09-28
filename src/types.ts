export type TodoStatus = "todo" | "inProgress" | "done";
export type TodoStatusArray = TodoStatus[];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}
