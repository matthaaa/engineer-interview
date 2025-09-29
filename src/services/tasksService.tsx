import { Task } from "@/types";

export const getTasks = () => {
  // TODO: add connection to "api" here if necessary
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
      description: "Try to keep it under 3 hours",
      status: "done",
    },
  ] as Task[];
};
