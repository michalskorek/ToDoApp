export class UserTask {
    name: string;
    deadLine: Date;
    user: number;
    status: string;
    constructor(name: string, deadLine: Date, user: number, status: string) {
      this.name = name;
      this.deadLine = deadLine;
      this.user = user;
      this.status = status;
    }
  
  }
  