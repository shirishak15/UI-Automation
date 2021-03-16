UI-Automation
Files:
1. Config file : protractor.conf.js - Contains Run configurations, Browsers to launch(both normal and headless mode), framework used(Jasmine) and the Spec files.
2. Step Definitions file : steps.js.js - Contains sequence of execution methods with descriptions indicating the methods functionality with respect to Feature file.
3. Pages(reusable_methods) - Contain Objects/Locators and method implementations which will be used up by our Step definitions file.
4. Feature file : SauceDemo.feature - Contains Simple plain english sentences, written in Gherkin(Given, When, Then) format, which uses Cucumber BDD framework.

Running the tests:
The execution happens in Chrome browser in both head(With browser open) and headless(without opening browser) mode in a parallel fashion.
To execute, Open command prompt in project's root folde(AutomationExercise) and run the command "protractor ./Config/conf-ui.js" (excluding quotes).
The scripts will run and the execution logs can be seen in the terminal.

To Run:
1. Open command prompt/terminal in the projects root folder(CodeExercise).
2. Run the command 'npm install' initially to install all the required packages.
3. Then to run the script, run the command 'protractor protractor.conf.js'.
4. There is a Run file placed in the project Root folder(CodeExercise/Run.bat), double clicking on which will run our test scripts
