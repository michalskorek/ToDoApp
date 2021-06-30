import { UserTask } from "./user-task";

export class TaskGroup {
  id: string;
  name: string;
  userTasks: Array<UserTask>;
  constructor(name: string) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.userTasks = [];
  }
}
