import { test } from "./fixtures/login";
import { MainPage } from "../POM/pages/MainPage";
import { expect } from "@playwright/test";

test.describe("main page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/greenCity");
  });

  test("has correct title", async ({ page }) => {
    const mainPage: MainPage = new MainPage(page);
    await mainPage.header.switchLanguage("Ua");
    expect(await page.locator("h1").textContent()).toBe(
      "Новий спосіб виховати в собі корисні звички"
    );
    await mainPage.header.switchLanguage("En");
    expect(await page.locator("h1").textContent()).toBe(
      "A new way to cultivate useful habits"
    );
  });
});
