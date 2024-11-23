import { BaseQueryApi } from "@reduxjs/toolkit/query";

export function injectToken(
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
): Headers {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
  // if (refreshToken) {
  //   headers.set("Refresh-Token", refreshToken);
  // }
  return headers;
}
