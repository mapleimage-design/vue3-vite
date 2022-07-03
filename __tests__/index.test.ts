import { describe, it, expect } from "vitest";

// The two tests marked with concurrent will be run in parallel
describe("suite", () => {
  it("serial test", async () => {
    /* ... */
    expect(1 + 3).toEqual(4);
  });
  it.concurrent("concurrent test 1", async () => {
    /* ... */
    expect(1 + 2).toEqual(3);
  });
  it.todo("concurrent test 2", async () => {
    /* ... */
    expect(2 + 2).toEqual(4);
  });
});
