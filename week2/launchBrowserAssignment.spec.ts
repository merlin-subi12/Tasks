/* Learn how to automate basic navigation to two different websites (Red Bus and Flipkart) in
two separate browser instances (Edge and Webkit) using Playwright. */

import { chromium, test, webkit } from "@playwright/test";


test(`Test to launch a browser`, async () => {
    // 1. Load Red Bus in an Edge browser instance and verify the page title and URL.
    const browser = await chromium.launch({ channel: "msedge", headless: false });
    const context = await browser.newContext(); //Stage 2 creating am isolated environment named as context
    const page = await context.newPage(); // Stage 3 creating a page instance to load a URL
    await page.goto(`https://www.redbus.in`);

    const url = page.url()
    console.log(url);

    const pageTitle = await page.title()
    console.log("Red Bus Title is", pageTitle);

   // 2. Load Flipkart in a Webkit browser instance and verify the page title and URL.

    const browser1 = await webkit.launch({ headless: false });
    const context1 = await browser1.newContext();//Stage 2 creating am isolated environment named as context
    const page1 = await context1.newPage(); //Stage 3 creating a page instance to load a URL
    await page1.goto(`https://www.flipkart.com`);

    const url1 = page1.url()
    console.log(url1);

    const pageTitle1 = await page1.title()
    console.log("Flipkart Title is", pageTitle1);

})
