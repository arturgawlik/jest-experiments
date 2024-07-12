import { formatDate } from "./format-date";

describe("date", () => {
  it("should format", () => {
    const isoDateToFormat = "2020-01-01T00:00:00.000Z";
    expect(isoDateToFormat).toEqual("2020-01-01T00:00:00.000Z");
  });
});
