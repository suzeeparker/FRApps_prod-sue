//  console.log( require( 'util').inspect( README_JSON(), { depth: 9 } ) )

  export default README_JSON

function README_JSON() {  
return [
, { proj: "formR's First Sample Apps"
  , name: "FRApps_prod-master", stages: [

  , { stage: "Client1 HTML Apps", apps: [

    , { app: "1c1. My HTML Custom App"
      , txt: "A simple responsive app using HTML and .CSS styles" 
      , url: 'client1/1c1_my-html-custom-app/index_final_custom.html' }

    , { app: "2c1. Student Website"
      , txt: "A website based on My HTML Custom App" 
      , url: 'client1/2c1_student-website/index.html' }
    ] }

  , { stage: "Client2 JavaScript Apps", apps: [

    , { app: "1c2. My JavaScript Custom App"
      , txt: "A refactored JavaScript app using My HTML Custom App" 
      , url: '' }

    , { app: "2c2. My JavaScript Click Samples"
      , txt: "A refactored JavaScript app using My HTML Custom App" 
      , url: '' }

    , { app: "3c2. JavaScript FAQs App"
      , txt: "A simple JavaScript app to display FAQs using collapsing detail / stage items" 
      , url: '' }

    , { app: "4c2. JavaScript Cards App"
      , txt: "A simple JavaScript app to display cards using a collapsing carousel" 
      , url: '' }

    , { app: "5c2. JavaScript JSON Data App"
      , txt: "A simple JavaScript app to retreive JSON data requested with an API call." 
      , url: '' }
    ] }

  , { stage: "Client3 React Apps", apps: [

    , { app: "1c3. React Cards and FAQs App"
      , txt: "A simple React app to display FAQs using collapsing cards and detail / stage items" 
      , url: '' }

    , { app: "2c3. React Empty App"
      , txt: "A clean React client app with only one line of HTML and all the React dependancies." 
      , url: '' }

    , { app: "3c3. React Button"
      , txt: "A simple button componant using React deployed from an Internet CDN." 
      , url: '' }

    , { app: "4c3. React App with No API"
      , txt: "A simple React app using client-side routes and data." 
      , url: '' }

    , { app: "5c3. React App with API"
      , txt: "A simple React app using client-side routes and data served with an API call." 
      , url: '' }

    , { app: "6c3. My React Custom App"
      , txt: "A simple React client app that can be used as a home page template." 
      , url: '' }
    ] }

  , { stage: "Client4 Lit Apps", apps: [

    , { app: "1c4. Simple Lit Component App"
      , txt: "A clean Lit component" 
      , url: '' }

    , { app: "2c4. Lit Cards and FAQs App"
      , txt: "A simple Lit app to display FAQs using collapsing cards and detail / stage items" 
      , url: '' }

    , { app: "3c4. Lit App with API"
      , txt: "A simple Lit app requesting data from a server API" 
      , url: '' }
    ] }

  , { stage: "Server2 JSON APIs", apps: [

    , { app: "5s2. JSON Data API"
      , txt: "A simple API to return JSON data requested with an API call." 
      , url: '' }
    ] }

  , { stage: "Server3 MySQL APIs", apps: [

    , { app: "5s3. React Data API]"
      , txt: "A simple React API to return data requested with an API call." 
      , url: 'server3/5s3-react-app-wi-api/index.html' }
    ] }
  ] }

, { proj: "formR's React Data Apps"
  , name: "FormR_prod-master", stages: [

  , { stage: "Client React Admin Apps", apps: [

    , { app: "1c. World"
      , txt: "A React client app to view data in the World database." 
      , url: '' }

    , { app: "3c. RAuth"
      , txt: "A React client app to authenticate users in the RAuth table." 
      , url: '' }

    , { app: "4c. Admin"
      , txt: "A React client app to view, add, edit or delete users in the RAuth table" 
      , url: '' }

    , { app: "5c. formR"
      , txt: "A React client app to view, add, edit or delete data in the World database" 
      , url: '' }
    ] }

  , { stage: "Server MySQL APIs", apps: [

    , { app: "1s. World"
      , txt: "A React server api to view data in the World database." 
      , url: '' }

    , { app: "3s. RAuth"
      , txt: "A React server api to authenticate users in the RAuth table." 
      , url: '' }

    , { app: "4s. Admin"
      , txt: "A React server api to view, add, edit or delete users in the RAuth table" 
      , url: '' }

    , { app: "5s. formR"
      , txt: "A React server api to view, add, edit or delete data in the World database" 
      , url: '' }
    ] }
  ] }
]

}