//  console.log( require( 'util').inspect( README_JSON(), { depth: 9 } ) )

function README_JSON() { return pJSON =
[
, { proj: "formR's First Sample Apps"
  , name: "FRApps_prod-master", stages: [

  , { stage: "Client1 HTML Apps", apps: [

      { app: "[1c1. My HTML Custom App](client1/1c1_my-html-custom-app/index_final_custom.html)"
      , txt: "A simple responsive app using HTML and .CSS styles" }

    , { app: "[2c1. Student Website](client1/2c1_student-website/index.html)"
      , txt: "A website based on My HTML Custom App" }
    ] }

  , { stage: "Client2 JavaScript Apps", apps: [

    , { app: "1c2. My JavaScript Custom App"
      , txt: "A refactored JavaScript app using My HTML Custom App" }

    , { app: "2c2. My JavaScript Click Samples"
      , txt: "A refactored JavaScript app using My HTML Custom App" }

    , { app: "3c2. JavaScript FAQs App"
      , txt: "A simple JavaScript app to display FAQs using collapsing detail / stage items" }

    , { app: "4c2. JavaScript Cards App"
      , txt: "A simple JavaScript app to display cards using a collapsing carousel" }

    , { app: "5c2. JavaScript JSON Data App"
      , txt: "A simple JavaScript app to retreive JSON data requested with an API call." }
    ] }

  , { stage: "Client3 React Apps", apps: [

    , { app: "1c3. React Cards and FAQs App"
      , txt: "A simple React app to display FAQs using collapsing cards and detail / stage items" }

    , { app: "2c3. React Empty App"
      , txt: "A clean React client app with only one line of HTML and all the React dependancies." }

    , { app: "3c3. React Button"
      , txt: "A simple button componant using React deployed from an Internet CDN." }

    , { app: "4c3. React App with No API"
      , txt: "A simple React app using client-side routes and data." }

    , { app: "5c3. React App with API"
      , txt: "A simple React app using client-side routes and data served with an API call." }

    , { app: "6c3. My React Custom App"
      , txt: "A simple React client app that can be used as a home page template." }
    ] }

  , { stage: "Client4 Lit Apps", apps: [

    , { app: "1c4. Simple Lit Component App"
      , txt: "A clean Lit component" }

    , { app: "2c4. Lit Cards and FAQs App"
      , txt: "A simple Lit app to display FAQs using collapsing cards and detail / stage items" }

    , { app: "3c4. Lit App with API"
      , txt: "A simple Lit app requesting data from a server API" }
    ] }

  , { stage: "Server2 JSON APIs", apps: [

    , { app: "5s2. JSON Data API"
      , txt: "A simple API to return JSON data requested with an API call." }
    ] }

  , { stage: "Server3 MySQL APIs", apps: [

    , { app: "[5s3. React Data API](server3/5s3-react-app-wi-api/index.html)"
      , txt: "A simple React API to return data requested with an API call." }
    ] }
  ] }

, { proj: "formR's React Data Apps"
  , name: "FormR_prod-master", stages: [

  , { stage: "Client React Admin Apps", apps: [

    , { app: "1c. World"
      , txt: "A React client app to view data in the World database." }

    , { app: "3c. RAuth"
      , txt: "A React client app to authenticate users in the RAuth table." }

    , { app: "4c. Admin"
      , txt: "A React client app to view, add, edit or delete users in the RAuth table" }

    , { app: "5c. formR"
      , txt: "A React client app to view, add, edit or delete data in the World database" }
    ] }

  , { stage: "Server MySQL APIs", apps: [

    , { app: "1s. World"
      , txt: "A React server api to view data in the World database." }

    , { app: "3s. RAuth"
      , txt: "A React server api to authenticate users in the RAuth table." }

    , { app: "4s. Admin"
      , txt: "A React server api to view, add, edit or delete users in the RAuth table" }

    , { app: "5s. formR"
      , txt: "A React server api to view, add, edit or delete data in the World database" }
    ] }
  ] }
]

}