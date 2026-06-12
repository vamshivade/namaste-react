import { sum } from "../sum";

it("Should add two numbers", () => {
  const result = sum(5, 9);

  expect(result).toBe(14);
});
