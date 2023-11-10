## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?
   **This was done as a decoupling measure which means reducing the level of logical or physical dependency between components within an architecture. In react this is done to increase code maintainability and scalability of the application by making it more logical to navigate, and easier to test components in isolation**

   **The biggest advantage of component separation is that it allows for the resuse of smaller components such as cards across and within larger components such pages, by mapping through an array of data and returning a child component with values passed down via props. This renders a traceable and customised version of the component on each iteration, which is the essence and biggest USP of React programming.**

   **Another quality of like advantage is that it makes importing multiple child components into a parent component file easier by placing an _index.js_ containing the list of all functional component exports within the _components_ directory. This can allow developers to use dot notation via `import * as Components from...` or object destructuring to import many components and reduce lines of code that occur with importing every file in isolation.** 

   **A disadvantage is that the state management becomes a little more complex since state can only be shared down to a child component via props, and not upwards to it's parent or an adjacent parent without the use of state management tools such as React Context and Redux. Because of this, it can be more time consuming to plan out state flow for an application.**

   

2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

**The application is missing test coverage in all areas apart from the square component in the standalone app. These tests could be administer a lot easier in the _app-standalone_ and _app-redux_ versions of the app since the application structure is more decoupled which makes react testing suites manageable and allow for true unit testing. Testing a highly coupled react app would be more difficult because of the amount of states and components that would need to be accounted for in each test case.**

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

**Redux is a state management tool that is used to sold the issues of data persistence, and state handling across components. It is often seen as the counterpart to React's `useContext` hook, as Redux is typically used in larger scale projects due to it's more complex setup and integration. Redux or state management tools are used when states need to be shared across a large area of the codebase without making extra requests to the server, and cases where prop-drilling would be a hinderance to an app's performance and jeopardize code resuability.**

**A key use case where you would use Redux would be for handling dynamic data on a more global level across your application, as the `Store`, which contains the globally available data, would be the single source of truth for containment and manipulation of the data via the Reducers which make consistent changes to the data, based on the action applied to it.**

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like* 

   - The initalisation of the server, connection to the database, and database query via the router is tightly coupled which
   - Becuase the initialisation of the server isn't separate from everything else, 

### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





