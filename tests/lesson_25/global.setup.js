import { test as setup, expect } from "@playwright/test";

setup("Login user", async ({ page }) => {
  const response = await page.request.post("/api/auth/signin", {
    data: {
      email: process.env.USER_LOGIN,
      password: process.env.USER_PASSWORD,
      remember: false,
    },
  });
  const resp = await response.json();
  page.pause();
  expect(resp.status).toEqual("ok");
  await page.context().storageState({ path: "auth.json" });
});