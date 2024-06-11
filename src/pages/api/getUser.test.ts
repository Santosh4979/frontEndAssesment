import { userMock } from '../../mockData/user';
import   { getUser }  from './getUser';

global.fetch = jest.fn(() => 
    Promise.resolve({ json: () => userMock })) as jest.Mock;

describe('getUser', () => {
  it('fethes the user sucessfully', async () => {
    const userData = await getUser();
    expect(userData).toEqual(userMock[0]);
  });
});