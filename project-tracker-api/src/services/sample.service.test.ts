import { getData } from "./sample.service";

describe('Sample Service', () => {
  it('should return DB records', async () => {
    const response = await getData();
    expect(response.length).toBe(4)
  });
});
