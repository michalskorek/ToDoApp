import { UserTask } from './user-task';

describe('UserTask', () => {
  it('should create an instance', () => {
    expect(new UserTask("",new Date(), 0,"")).toBeTruthy();
  });
});
