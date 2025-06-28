import { test, expect } from '../../fixtures/baseTest';
import {
  configureAppearance,
  createNewShowcase,
  deleteShowcaseIfExists,
  goToShowcaseLibrary,
  removeOldShowcases
} from "./helper";

/**
 * Regression Test 1: Full Showcase Flow (Modular)
 */
test('@regression Full Showcase Flow Modular', async ({ page }) => {
  await goToShowcaseLibrary(page);
  await removeOldShowcases(page);
  await createNewShowcase(page, "E2E Testing", "E2E Testing");
  await configureAppearance(page);
  await deleteShowcaseIfExists(page);
});