// Assignment: 3 Create a new Account

import { test, chromium } from "@playwright/test";
test ('Create a new Account', async () => {

const browser = await chromium.launch ({channel:"msedge", headless:false});
const context = await browser.newContext();
const page = await context.newPage();
// 1. Navigate to the url https://login.salesforce.com/ 
await page.goto('https://login.salesforce.com/ ');
// 2. Enter username using getByLabel 
await page.getByLabel('Username').fill('merlin.arunsubi491@agentforce.com');
// 3. Enter password using getByLabel 
await page.getByLabel('Password').fill('Arundanica@3');
// 4. Click Login 
await page.locator(`#Login`).click();
})


   