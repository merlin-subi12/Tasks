// Assignment: 2 Edit a Lead 

import { test, chromium } from "@playwright/test";
test ('Edit a Lead', async () => {

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
// 7. Click Find Leads
await page.locator(`a[href*='findLeads']`).click();
// 8. Enter the first name
await page.locator(`#x-form-el-ext-gen248 input[name='firstName']`).fill('Merlin');
// 9. Click Find Leads button 
await page.locator(`//button[contains(text(),"Find Leads")]`).click();
// 10. Click the first resulting Lead ID 
await page.locator(`a[title*='Merlin Subi (CS)']`).click();
// 11. Click Edit
await page.locator(`a[href*='updateLeadForm']`).click();
// 12. Edit Company name 
await page.locator(`#updateLeadForm_companyName`).fill('Capestart');
// 13. Edit Annual Revenue
await page.locator(`#updateLeadForm_annualRevenue`).fill('1000000')
// 14. Edit Department
await page.locator(`#updateLeadForm_departmentName`).fill('Technology Services')
// 15. Enter Description 
await page.locator(`#updateLeadForm_description`).fill(`Updated the details`)
// 16. Click Update
await page.locator(`input[value='Update']`).click();
//  17. Verify the edited fields and print the title of the page
await page.waitForTimeout(3000);

// Fetch updated values
const updatedCompany = await page.locator('#viewLead_companyName_sp').textContent();
const updatedRevenue = await page.locator('#viewLead_annualRevenue_sp').textContent();
const updatedDepartment = await page.locator('#viewLead_departmentName_sp').textContent();
const updatedDescription = await page.locator('#viewLead_description_sp').textContent();

// Assertions
test.expect(updatedCompany).toContain('Capestart');           
//test.expect(updatedRevenue).toBe('100000');
test.expect(updatedDepartment).toBe('Technology Services');
test.expect(updatedDescription).toBe('Updated the details');

// Print page title
const title = await page.title();
console.log("Page title after update:", title);
console.log(updatedRevenue)
})


   