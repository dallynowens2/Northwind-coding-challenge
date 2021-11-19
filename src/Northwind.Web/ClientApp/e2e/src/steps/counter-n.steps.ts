import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
import { Input } from "@angular/core";
let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the counter-n page", async () => {
  await page.navigateToCounterN();
});

When("I enter the value {int} in the input {string}", async (i: number, inputName: string) => {
  page.setInput(inputName, i);
});

When("I click on the increment by N button {int} times", async (x: number) => {
  // Click on the increment button x times.
  const incrementButton = element(by.id("increment"));
  for (let index = 0; index < x; index++) {
    await incrementButton.click();
  }
});

Then("The counter by N should show {string}", async (x: string) => {
  // Expect that we get the correct value showing
  expect(await element(by.id("counter")).getText()).to.equal(x);
});

