import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class EcoNewsPage extends BasePage {
  readonly createNewsButton: Locator;
  readonly submitCreateNewsFormButton: Locator;

  constructor(page) {
    super(page);
    this.createNewsButton = this.page.locator("#create-button");
    this.submitCreateNewsFormButton = this.page.locator(
      "button[type='submit']"
    );
  }

  async clickCreateNewsButton() {
    await this.createNewsButton.click();
  }

  async clickSubmitCreateNewsForm() {
    await this.submitCreateNewsFormButton.click();
  }

  async fillTheForm(
    title: string,
    content: string,
    tag: { en: string; ua: string }
  ) {
    await this.page.locator("textarea").fill(title);

    await this.page
      .locator(".tag-button")
      .filter({
        hasText: new RegExp(`${tag.en}|${tag.ua}`),
      })
      .click();
    await this.page.locator("quill-editor div").nth(2).fill(content);
  }
}
