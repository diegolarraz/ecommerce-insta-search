# ecommerce-insta-search
Created this repo with the insta search tool which was very easy to use and follow the documentation.
One thing I did find was that when I setup the project with a newly indexed data I was not able to get some of the custom filtering UI.

This project uses: 
 - FILENAME.module.css files in order to localise styling, improved code maintenance and avoiding conflicting code between style sheets.
 - Created a custom hook called **useList** -> this allows us to update the user's personalised list from anywhere within the component tree, without having to pass state around. Helps maintain the code clean and it is a great scalability tool.
 - Created custom functions to return the total of the user's product list and to append items to their list.
 - The web-app is fully responsive following a mobile first approach.
 
 I would have liked to:
  - Dive deeper into the documentation of insta-search as there are options for customisation which I want to explore. (The search is remarkably fast)
  - Another reason why I created my own hook is because I could not find in the documentation how to pass data down through the Algolia Hit UI component. Therefore context-api was a good workaround that ended up refactoring my code.
  - I encountered some problems when adding typescript to my project, it is my preffered way of working with react, however I had an issue that said instasearch did not support typescript - I didn't have much luck solving that issue, so I decided to dive in with a js approach.


## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.
