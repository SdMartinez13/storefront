# Lab 36: Application State with Redux

- Virtual Store Phase 1: For this assignment, you will be starting the process of creating an e-Commerce storefront using React with Redux, coupled with your live API server

## Phase 1 Requirements

- Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner

- The following user/developer stories detail the major functionality for this phase of the project.

  - As a user, I expect to see a list of available product categories in the store so that I can easily browse products
  - As a user, I want to choose a category and see a list of all available products matching that category
  - As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

## Technical Requirements/Notes

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
  - Identify that category as selected (change of class/display)
  - Show a list of products associated with the category

## Application Architecture

- Create the Virtual Store application as follows:

  - Begin with creating your application using create-react-app
  - Install Material UI as a dependency
  - Write an App component that serves as the container for all sub-components of this application
    - A `<Header>` component which shows the name of your virtual store
    - A `<Footer>` component which shows your copyright and contact information
    - A `<Categories>` component
      - Shows a list of all categories
      - Dispatches an action when one is clicked to “activate” it
    - A `<Products>` component
      - Displays a list of products associated with the selected category

## UML
- ![UML](./assets/lab36.png)

- [REPO](https://github.com/SdMartinez13/storefront)
- [PR](https://github.com/SdMartinez13/storefront/pull/1)
- [Code Sandbox](https://codesandbox.io/p/github/SdMartinez13/storefront/draft/shy-cookies?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cla7swtxo000rl0f051aferfz%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522key%2522%253A%2522cla7synlc00f03b6hgk2vouir%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cla7sxhmj007g3b6hwcdop3d7%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522cla7sxeob005i3b6hujtibljb%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D) Code Sandbox would not let me copy the redux branch so this is the main

## Partners

- [Stephanie Hill](https://github.com/stephnitis)
