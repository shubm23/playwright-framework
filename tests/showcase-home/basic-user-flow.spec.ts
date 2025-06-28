// import {
//   configureAppearance,
//   createNewShowcase,
//   deleteShowcaseIfExists,
//   goToShowcaseLibrary,
//   removeOldShowcases
// } from "./helper";

// /**
//  * Regression Test 1: Full Showcase Flow (Modular)
//  */
// test('@regression Full Showcase Flow Modular', async ({ page }) => {
//   await goToShowcaseLibrary(page);
//   await removeOldShowcases(page);
//   await createNewShowcase(page, "E2E Testing", "E2E Testing");
//   await configureAppearance(page);
//   await deleteShowcaseIfExists(page);
// });

import { ShowcasePage } from '../../pages/showcase.page.';
import { test, expect } from "@playwright/test";

test('Create a new showcase', async ({ page }) => {
  const showcase = new ShowcasePage(page);
  await showcase.openShowcasePage();
  await showcase.createShowcase();
  expect(await showcase.isShowcaseCreated()).toBeTruthy();
});