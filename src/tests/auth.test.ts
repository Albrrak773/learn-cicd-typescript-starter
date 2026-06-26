import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("get api key", () => {
  test("returns api key", () => {
    expect(getAPIKey({ authorization: "ApiKey xxx" })).toBe("xxx");
  });

  test("api key is incorectly formatter", () => {
    expect(getAPIKey({ authorization: "barer xxx" })).toBeNull();
    expect(getAPIKey({ authorization: "" })).toBeNull();
    expect(getAPIKey({ authorization: "barer xxx xxx" })).toBeNull();
  });
});
