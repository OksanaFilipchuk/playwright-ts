import { test } from "./fixtures/login";
import { MainPage } from "../POM/pages/MainPage";
import { EcoNewsPage } from "../POM/pages/EcoNewsPage";
import { newsTags } from "../POM/constants/news-tags";
import { expect } from "@playwright/test";

test.describe("create-news", () => {
  test.beforeEach(async ({ page, login }) => {
    await page.goto("/#/greenCity");
    await login.fillTheFormAndLogIn();
  });
  test.use({ viewport: { width: 1900, height: 900 } });

  test("news should be created", async ({ page }) => {
    const mainPage: MainPage = new MainPage(page);
    const newsPage: EcoNewsPage = new EcoNewsPage(page);
    await mainPage.header.eventsLink.click();
    expect(page.url()).toContain("/news");
    await newsPage.clickCreateNewsButton();
    expect(page.url()).toContain("/news/create-news");
    await newsPage.fillTheForm(
      "Test News",
      "Test News content Test News content",
      newsTags.EVENTS
    );

    await newsPage.clickSubmitCreateNewsForm();
    const createNewsResponse = await page.waitForResponse(
      process.env.BACKEND_URL + "/eco-news"
    );
    expect(createNewsResponse.status(), `expect response code to be 201`).toBe(
      201
    );
  });
});
