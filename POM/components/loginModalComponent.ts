import { Page } from "@playwright/test";

export class LoginModalComponent {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillMailInput(email: string): Promise<this> {
    await this.page.locator("#email").fill(email);
    return this;
  }

  async fillPasswordInput(password: string): Promise<this> {
    await this.page.locator("#password").fill(password);
    return this;
  }

  async clickSubmitButton(): Promise<this> {
    await this.page.locator('button[type="submit"]').click();
    return this;
  }
}
