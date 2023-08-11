import { sum } from "./sum";

describe("Sum", () => {
  it("Should be able to sum A and B", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("Should not be able to sum A and B correctly", () => {
    expect(sum(2, 3)).toBe(4);
  });
});
