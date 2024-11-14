---
title: ARX Commands
description: A guide in my new Starlight docs site.
---

**arx-cli** provides a range of commands to preview, benchmark, migrate, and manage components and endpoints directly from a local repository. Here’s a breakdown of available commands:

## Commands Overview


### 1 . Login

- **`login`**: command in **arx-cli** is used to authenticate the user with **Aurora Copilot**, allowing access to restricted components or endpoints. This command initiates a login session, enabling users to interact with secured sections of the repository.

    ```bash
    arx-cli login
    ```
    

    <video controls class="tutorial-video">
      <source src="../../../../../public/login.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    

### 2. Component Preview

- **`preview:component`**: command in **arx-cli** allows you to preview a specific component directly in the browser. This feature is particularly useful for inspecting, debugging, and verifying component structures.

  ```bash
  arx preview:component

### 3. Endpoint Preview
- **`preview:endpoint`**: command in **arx-cli** allows you to preview a specific endpoint directly in the browser. This feature is particularly useful for inspecting, debugging, and verifying endpoint structures.
  ```bash
  arx preview:endpoint
  ```

    <video controls class="tutorial-video">
      <source src="../../../../../public/endpoint preview.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
### 4. Handlebars Preview

- **`preview:hbs`**: command in **arx-cli** lets you preview a specified Handlebars (`.hbs`) template file directly in the browser. This is helpful for inspecting template structures and rendered output without setting up a server.

    ```bash
    arx preview:hbs


### 5 . Migrate

- **`migrate`** command in **arx-cli** is used to upload local `.ftl` files to **Aurora Copilot** to facilitate migration of Node.js code. This command initiates a migration session, creates a session in **Aurora Copilot**, and redirects the user to the session in their browser.

    ```bash
    arx migrate

### 6 . Benchmarking
- **`benchmark:endpoint`**: Runs a benchmark test on a specified endpoint, measuring response time and efficiency.

  ```bash
  arx benchmark:endpoint
 
## Test Driven Development (TDD)

<!-- TDD is a crucial software development approach that enhances code quality and team collaboration. -->

<!-- ### Key Points of TDD -->

1. **Write Tests First**: Create test cases before implementing the actual code.
2. **Red-Green-Refactor Cycle**: 
   - Red: Write a failing test
   - Green: Implement code to pass the test
   - Refactor: Improve the code while keeping tests passing
3. **Incremental Development**: Build features in small, testable increments.
4. **Continuous Verification**: Regularly run tests to catch issues early.
5. **Design Evolution**: Let tests guide the design of your codebase.

### Benefits of TDD

- ✅ **Improved Code Quality**: Fewer bugs and more modular code
- 🛡️ **Reduced Risk**: Tests act as a safety net for code changes
- 🤝 **Enhanced Collaboration**: Clearer expectations and easier onboarding
- ⚡ **Quick Feedback**: Immediate insights into code functionality
- 📚 **Living Documentation**: Tests serve as up-to-date documentation

### TDD Workflow

1. Add a Test
2. Run Tests (expect failure)
3. Write Minimal Code
4. Run Tests (expect success)
5. Refactor
6. Repeat

TDD with ARX commands, can create robust, well-tested components and endpoints efficiently.
### 7 . Generate Test Cases
- **`generate:test-cases`**: Generates test cases for a specified component or endpoint.

  ```bash
  arx generate:test

### 8 . Get Test Results
- **`get:test-results`**: Retrieves test results for a specified component or endpoint.

  ```bash
  arx run:test  




