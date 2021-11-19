import { release } from 'os';
import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToCounter() {
    return browser.get('/counter');
  }

  navigateToCounterTwo() {
    return browser.get('/counter-two');
  }

  navigateToCounterN() {
    return browser.get('/counter-n');
  }

  setInput(inputName: string, value: number): promise.Promise<void> {
    return element(by.css(`input[name="${inputName}"]`)).sendKeys(value);
  }

  getIncrementNumber(): promise.Promise<string> {
    
    const incrementNumber = element(by.css('#incrementNum')).getText();
    return incrementNumber
  }

  getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }
}
