import { userMock }  from 'src/mockData/user';
import { getUser, User } from './user';

global.fetch = jest.fn(() => Promise.resolve<User>({ json: () => userMock })) as jest.Mock;
describe('getUser', () => {
  // @TODO Add test for NextJS API call
  it('should mock this test', () => {
    expect(true).toBe(true);
  });
});
