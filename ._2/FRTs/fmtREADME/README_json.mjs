//console.log( require( 'util').inspect( README_JSON(), { depth: 9 } ) )

  export default README_JSON

function README_JSON() {
return [
, { proj: "formR's First Sample Apps"
  , url:  'C:/Repos/FRApps'
  , name: "FRApps_prod-master"
  , stages: [

  , { stage: "Client1 HTML & CSS App"
    , apps: [
      , { app: "c10. Background and Purposes"
      , txt: "An intrduction to the HTML app in this client1 folder."
      , url: 'client1/c10_background-and-purposes/README.md' }

      , { app: "c11. My HTML Custom App"
      , txt: "A simple responsive app using HTML and .CSS styles."
      , url: 'client1/c11_my-html-custom-app/index_final_custom.html' }
/*
   , { app: "c12. My HTML Remote App"
      , txt: "A website based on My HTML Final & Javascript Custom App"
      , url: 'client1/c12_my-remote-app/index.html' }
*/
    ] }

  , { stage: "Client2 JavaScript Apps", apps: [

    , { app: "c20. Simple JavaScript onClick Samples"
      , txt: "A few HTML onClick functions using DOM and JQuery."
      , url: 'client2/c20_background-and-purposes/README.md' }

    , { app: "c21. My JavaScript Custom App"
      , txt: "A refactored 'My HTML Custom App' using JavaScript."
      , url: 'client2/c21_my-javascript-custom-app/index.html' }

    , { app: "c22. JavaScript FAQs App"
      , txt: "A simple JavaScript app tthat displays FAQs using collapsing detail / stage items."
      , url: 'client2/c22_javascript-faqs-app/index.html' }

    , { app: "c23. JavaScript Cards App"
      , txt: "A simple JavaScript app that displays cards using a collapsing carousel."
      , url: 'client2/c23_javascript-cards-app/index.html' }

    , { app: "c24. JavaScript JSON.JS Data App"
      , txt: "A simple JavaScript app that retreives JSON data from a local JavaScript file."
      , url: 'client2/c24_javascript-json-local-data-app/index.html' }

    , { app: "c25. JavaScript JSON Server API Data App"
      , txt: "A simple JavaScript app that retreives JSON data from a JSON Server with API calls."
      , url: 'client2/c25_javascript-json-server-data-app/index.html' }

    , { app: "c26. JavaScript MySQL Server API Data App"
      , txt: "A simple JavaScript app that retreives JSON data from a MySQL Express Server with API calls."
      , url: 'client2/c26_javascript-mysql-data-app/index.html' }
    ] }

  , { stage: "Client3 Lit Component Apps", apps: [

    , { app: "c30. Background and Purposes"
      , txt: "A clean Lit component."
      , url: 'client3/c30_background-and-purposes/README.md' }

    , { app: "c31. My Lit Component Custom App"
      , txt: "A refactored 'My JavaScript Custom App' using Lit Components."
      , url: 'client3/c31_my-lit-component-custom-app/index.html' }

    , { app: "c32. Lit Component Menus App"
      , txt: "A simple Lit app that displays responsive header menus."
      , url: 'client3/c32_lit-component-menus-app/index.html' }

    , { app: "c33. Lit Component Cards and FAQs App"
      , txt: "A simple Lit app that displays FAQs using collapsing cards and detail / stage items."
      , url: 'client3/c33_lit-faqs-n-cards-app/index.html' }

    , { app: "c34. Lit Component JSON.JS Data App"
      , txt: "A simple Lit app that retreives JSON data from a local JavaScript file."
      , url: 'client3/c34_lit-app-no-api/index.html' }

    , { app: "c35. Lit Component with JSON Server APIs"
      , txt: "A simple Lit app that retreives JSON data from a JSON Server with API calls."
      , url: 'client3/c35_lit-app-with-api/index.html' }
    ] }

  , { stage: "Client4 Create React Apps", apps: [

    , { app: "c40. Background and Purposes"
      , txt: "A clean React client app with only one line of HTML and all the React dependancies."
      , url: 'client4/c40-background-and-purposes/README.md' }

    , { app: "c41. My React Custom App"
      , txt: "A refactored 'My Lit Component Custom App' using React."
      , url: 'client4/c41-my-react-custom-app/build/index.html' }

    , { app: "c42. React Menus App"
      , txt: "A simple button/menu componant using React deployed from an Internet CDN."
      , url: 'client4/c42-react-menus-app/index.html' }

    , { app: "c43. React Cards and FAQs App"
      , txt: "A simple React app that displays responsive header menus."
      , url: 'client4/c43_react-faqs-n-cards-app/index.html' }

    , { app: "c44. React App with No APIs"
      , txt: "A simple React app using client-side routes and data."
      , url: 'client4/c44-react-app-no-api/build/index.html' }

    , { app: "c45. React App with JSON Server APIs"
      , txt: "A simple React app using client-side routes and data served with API calls."
      , url: 'client4/c45-react-app-with-api/build/index.html' }

    , { app: "c46. React App with MySQL Server APIs"
      , txt: "A simple React app that retreives JSON data from a MySQL Express Server with API calls."
      , url: 'client4/c46-react-custom-api/build/index..html' }
    ] }

  , { stage: "Server1 JSON Extract Script", apps: [

    , { app: "s14. JSON Data Extract Script"
      , txt: "A simple NodeJS Script to extract data from MySQL."
      , url: 'server1/s14-json-extract-app/getJSON.mjs' }
    ] }

  , { stage: "Server2 JSON Server APIs", apps: [

    , { app: "s25. JSON Data API"
      , txt: "A simple API to return JSON data requested with an API call."
      , url: 'server2/s25-json-server-data-api/index.html' }
    ] }

  , { stage: "Server3 MySQL Data APIs", apps: [

    , { app: "s36. MySQL Data API"
      , txt: "A simple API to return MySQL data requested with an API call."
      , url: 'server3/s36-mysql-data-api/index.html' }
    ] }

  , { stage: "Server4 React Data APIs", apps: [

    , { app: "s46. React Data API"
      , txt: "A simple API to return MySQL data requested with an API call."
      , url: 'server4/s46-react-app-wi-api/index.html' }
    ] }
  ] }

, { proj: "formR's React Data Apps"
  , url:  'C:/Repos/FormR'
  , name: "FormR_prod-master", stages: [

  , { stage: "Client5 React-Admin Apps", apps: [

    , { app: "c51c. World App"
      , txt: "A React client app to view data in the World database."
      , url: 'client5/c51-world-app/public/index.html' }

    , { app: "c53c. RAuth App"
      , txt: "A React client app to authenticate users in the RAuth table."
      , url: 'client5/c53-rauth-app/public/index.html' }

    , { app: "c54c. Admin App"
      , txt: "A React client app to view, add, edit or delete users in the RAuth table."
      , url: 'client5/c54-admin-app/public/index.html' }

    , { app: "c55c. formR App"
      , txt: "A React client app to view, add, edit or delete data in the World database."
      , url: 'client5/c55-formr-app/public/index.html' }
    ] }

  , { stage: "Server5 React-Admin APIs", apps: [

    , { app: "s51s. World APIs"
      , txt: "A React server api to view data in the World database."
      , url: 'server5/s51-world-api/index.html' }

    , { app: "s53s. RAuth APIs"
      , txt: "A React server api to authenticate users in the RAuth table."
      , url: 'server5/s53-rauth-api/index.html' }

    , { app: "s54s. Admin APIs"
      , txt: "A React server api to view, add, edit or delete users in the RAuth table."
      , url: 'server5/s54-admin-api/index.html' }

    , { app: "s55s. formR APIs"
      , txt: "A React server api to view, add, edit or delete data in the World database."
      , url: 'server5/s55-formr-api/index.html' }
    ] }
  ] }
]

}










