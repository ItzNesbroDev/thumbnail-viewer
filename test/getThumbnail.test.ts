import { describe, it, expect } from "vitest";
import { getThumbnail } from "../src";

describe("GetThumbnail-Check", () => {
  it("works", () => {
    expect(getThumbnail("https://youtu.be/Wch3gJG2GJ4")).toEqual(
      "http://img.youtube.com/vi/Wch3gJG2GJ4/hqdefault.jpg",
    );
  });
});
