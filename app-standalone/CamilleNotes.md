# Notes on Installation

I came across this error ``` error:0308010C:digital envelope routines::unsupported... ``` when running `npm start`

- first I found a solution which involved changing the start script to `"start": "react-scripts --openssl-legacy-provider start"`. This got the code to run in my localhost, but I receieved this statement in my console.

    ```Compiled with warnings.
    C:\Users\Camille\Documents\camille-interview-test\app-standalone\node_modules\babel-loader\lib\index.js??ref--6-oneOf-2!C:\Users\Camille\Documents\camille-interview-test\app-standalone\node_modules\node-libs-browser\node_modules\punycode\punycode.js
    * C:\Users\Camille\Documents\camille-interview-test\app-standalone\node_modules\babel-loader\lib\index.js??ref--6-oneOf-2!C:\Users\Camille\documents\camille-interview-test\app-standalone\node_modules\webpack\buildin\global.js
        Used by 1 module(s), i. e.
        C:\Users\Camille\Documents\camille-interview-test\app-standalone\node_modules\babel-loader\lib\index.js??ref--6-oneOf-2!C:\Users\Camille\documents\camille-interview-test\app-standalone\node_modules\react-router\esm\react-router.js

    Search for the keywords to learn more about each warning.
    To ignore, add // eslint-disable-next-line to the line before. 
    ```

- Next I decided that this wasn't a solid enough solution, so I found a solution via [freecodecamp](https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/) which suggested I update react-scripts to the most up-to-date version (v5.0.1)
My steps:
1. `npm uninstall react-scripts`
2. `npm i -D react-scripts`


## Trying to get React Testing Library to work

I have experience with React Testing Library, but struggled to install it due to the outdated dependencies, I attempted to make updates, but it was quite complex. In an effort not to waste time, I have put a break on it, but will hopefully send an updated codebase at the next interview.
