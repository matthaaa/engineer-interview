import { Task } from "@/types";

export const getTasks = () => {
  // TODO: add connection to "api" here
  return [
    {
      id: "1",
      title: "Do laundry",
      description: "Don't forget to run the dryer this time",
      status: "todo",
    },
    {
      id: "2",
      title: "Do dishes",
      description: "Handwash the skillet",
      status: "inProgress",
    },
    {
      id: "3",
      title: "Nap",
      description: "Need I say more?",
      status: "done",
    },
  ] as Task[];
};
