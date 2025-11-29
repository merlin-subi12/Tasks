// Assignment: 1 Create a Lead 

import { test, chromium } from "@playwright/test";
test ('Create a Lead', async () => {

const browser = await chromium.launch ({channel:"msedge", headless:false});
const context = await browser.newContext();
const page = await context.newPage();
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
await page.goto('http://leaftaps.com/opentaps/control/main');
// 2. Enter the username as ‘Demosalesmanager’ 
await page.locator(`#username`).fill('Demosalesmanager');
// 3. Enter the password as ‘crmsfa’ 
await page.locator(`#password`).fill(`crmsfa`);
// 4. Click the Login button 
await page.locator(`.decorativeSubmit`).click();
// 5. Click CRM/SFA 
await page.locator(`#label a[href*='crmsfa']`).click();
// 6. Click Leads 
await page.locator(`a[href*='leadsMain']`).click();
// 7. Click Create Lead 
await page.locator(`a[href*='createLeadForm']`).click();
// 8. Fill the Company Name 
await page.locator(`#createLeadForm_companyName`).fill('CS');
// 9. Fill the First Name 
await page.locator('#createLeadForm_firstName').fill('Merlin');
// 10. Fill the Last Name 
await page.locator(`#createLeadForm_lastName`).fill('Subi');
// 11. Fill the Salutation 
await page.locator(`#createLeadForm_personalTitle`).fill('Mrs');
// 12. Fill the Title 
await page.locator('#createLeadForm_generalProfTitle').fill('Sr.QA');
// 13. Fill the Annual Revenue 
await page.locator('#createLeadForm_annualRevenue').fill('1000000');
// 14. Fill the Department 
await page.locator('#createLeadForm_departmentName').fill('Testing');
// 15. Fill the Phone number 
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9999999999');
// 16. Click Create Lead button 
await page.locator(`.smallSubmit`).click();
// 17. Verify the company name, first name, last name and the status 
const companyName = await page.locator('#viewLead_companyName_sp').textContent();
const firstName = await page.locator('#viewLead_firstName_sp').textContent();
const lastName = await page.locator('#viewLead_lastName_sp').textContent();
const status = await page.locator('#viewLead_statusId_sp').textContent();

// Assertions
test.expect(companyName).toContain('CS');     // Company
test.expect(firstName).toBe('Merlin');       // First name
test.expect(lastName).toBe('Subi');          // Last name
test.expect(status).toBeTruthy();            // status should exist

console.log(`Company: ${companyName}, FirstName: ${firstName}, LastName: ${lastName}, Status: ${status}`);

// 18. Get the page title 
await page.waitForTimeout(3000);
const title = await page.title();
console.log("Create Lead Page title is:", title);
})