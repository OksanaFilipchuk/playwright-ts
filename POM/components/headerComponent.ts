import { Locator, Page } from "@playwright/test";
import { LoginModalComponent } from "./loginModalComponent";

export class HeaderComponent {
  page: Page;
  loginModalComponent: LoginModalComponent;
  newsLink: Locator;
  eventsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginModalComponent = new LoginModalComponent(page);
    this.newsLink = this.page.locator(".lang-option");
    this.eventsLink = this.page.locator(".url-name[href*='news']");
  }

  async switchLanguage(langCode: string) {
    const langPointer = await this.page.locator(".lang-option").textContent();

    if (langPointer === langCode) {
      return;
    }
    await this.page.locator(".lang-option").click();
    await this.page
      .locator(".lang-option span")
      .filter({ hasText: langCode })
      .click();
  }

  async openLoginModal() {
    await this.page.locator(".header_sign-in-link").click();
  }

  async clickNewsLink() {
    await this.page.locator(".header_sign-in-link").click();
  }

  async fillTheFormAndLogIn() {
    await this.openLoginModal();
    const loginModalComponent = new LoginModalComponent(this.page);
    await loginModalComponent.fillMailInput(process.env.USER_NAME);
    await loginModalComponent.fillPasswordInput(process.env.USER_PASSWORD);
    await loginModalComponent.clickSubmitButton();
  }
}
