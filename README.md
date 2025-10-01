## Use case Login form
**
    ![Use case diagram](/img/login-use-case.png)

## Running Selenium Tests

To run the Selenium tests in this project, follow these steps:

1. **Install Dependencies And Start Project**  
    Make sure you have [Node.js](https://nodejs.org/) installed.  
    Navigate to folder /look-book-backend , /look-book-frontend and /selenimum-test run:  
    ```bash
    npm install
    npm run dev
    ``` 

2. **Run the Selenium Tests**  
    Go to the folder containing your Selenium tests (e.g., `selenium-test/`).  
    Run the test files using Node.js:  
    ```bash
    node login.test.js
    ```

3. **Review Test Results**  
    Check the console output for test results and any errors.
    ![Example Test Retsult](/img/test-result.png)



**Note:**  
- Ensure your browser and WebDriver versions are compatible.  
- You may need to configure environment variables or update test settings depending on your setup.
