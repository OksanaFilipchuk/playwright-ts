import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}