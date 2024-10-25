import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/headerComponent";

export class BasePage {
  page: Page;
  header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }
}
