import { test as base } from "@playwright/test";
import { HeaderComponent } from "../../POM/components/headerComponent";

interface ExtendedFixture {
  login: HeaderComponent;
}

export const test = base.extend<ExtendedFixture>({
  login: async ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    await use(headerComponent);
  },
});
