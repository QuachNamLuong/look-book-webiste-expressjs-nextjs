const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async function runLoginTests() {
  const options = new chrome.Options();
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  // options.addArguments('--headless'); // Uncomment for headless mode

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  const baseUrl = 'http://localhost:3000/login';

  try {
    // ---------------------------
    // Test 1: Successful login
    // ---------------------------
    await driver.get(baseUrl);
    await driver.findElement(By.name('email')).sendKeys('quachnamluong@gmail.com');
    await driver.findElement(By.name('password')).sendKeys('123456');
    await driver.findElement(By.css('button[type="submit"]')).click();

    const successMsg = await driver.wait(until.elementLocated(By.css('p')), 5000);
    const successText = await successMsg.getText();
    if (successText.includes('Login successful!')) {
      console.log('✅ [1] Successful login - Passed');
    } else {
      throw new Error('Login success message not shown');
    }

    await delay(1000);

    // ---------------------------
    // Test 2: Wrong password
    // ---------------------------
    await driver.get(baseUrl);
    await driver.findElement(By.name('email')).sendKeys('user@example.com');
    await driver.findElement(By.name('password')).sendKeys('wrongpassword');
    await driver.findElement(By.css('button[type="submit"]')).click();

    const errorMsg = await driver.wait(until.elementLocated(By.css('p')), 5000);
    const errorText = await errorMsg.getText();
    if (errorText.toLowerCase().includes('invalid')) {
      console.log('✅ [2] Wrong password - Passed');
    } else {
      throw new Error('Error message not shown for wrong password');
    }

    await delay(1000);

    // ---------------------------
    // Test 3: Empty fields
    // ---------------------------
    await driver.get(baseUrl);
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Expect native HTML5 validation (fields are required)
    const emailField = await driver.findElement(By.name('email'));
    const isValid = await emailField.getAttribute('validationMessage');

    if (isValid) {
      console.log('✅ [3] Empty fields - Passed');
    } else {
      throw new Error('No validation message for empty fields');
    }

    await delay(1000);

    // ---------------------------
    // Test 4: Forgot Password link
    // ---------------------------
    await driver.get(baseUrl);
    const forgotLink = await driver.findElement(By.linkText('Forgot password?'));
    if (forgotLink) {
      await forgotLink.click();
      await driver.wait(until.urlContains('/forgot-password'), 5000);
      console.log('✅ [4] Forgot Password link - Passed');
    } else {
      throw new Error('Forgot password link not found');
    }

    await delay(1000);

    // ---------------------------
    // Test 5: Sign Up link
    // ---------------------------
    await driver.get(baseUrl);
    const signUpLink = await driver.findElement(By.linkText("Don't have an account?"));
    if (signUpLink) {
      await signUpLink.click();
      await driver.wait(until.urlContains('/register'), 5000);
      console.log('✅ [5] Sign Up link - Passed');
    } else {
      throw new Error('Sign up link not found');
    }

    await delay(1000);

    // ---------------------------
    // Test 6: Social login buttons
    // ---------------------------
    await driver.get(baseUrl);

    const socialButtons = await driver.findElements(By.css('button'));

    const expectedTexts = ['Google', 'Microsoft']; // match your actual buttons
    let foundCount = 0;

    for (const text of expectedTexts) {
      const button = await driver.findElements(By.xpath(`//button[contains(text(), '${text}')]`));
      if (button.length > 0) {
        foundCount++;
      }
    }

    if (foundCount >= 2) {
      console.log(`✅ [6] Social login buttons - Found ${foundCount} buttons - Passed`);
    } else {
      throw new Error(`Expected at least 2 social buttons, found ${foundCount}`);
    }

  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();
