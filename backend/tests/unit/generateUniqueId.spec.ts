import { generatorUniqueId } from "../../src/utils/generateUniqueId";

describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generatorUniqueId();

    expect(id).toHaveLength(8);
  });
});
