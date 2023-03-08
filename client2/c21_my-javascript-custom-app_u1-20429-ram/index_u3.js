
// import                    './assets/css/animated-navigation.css'   // no workie

// import { NavMenu }  from  './assets/js/animated-navigation_u2.js'  // named export
   import   setBar     from  './assets/js/animated-navigation_u2.js'  // default export
//          setBar()           // Executed when loaded 

   import { NavMenu }  from  './assets/js/navigation-items_u2.js'     // named export
//          NavMenu.setItems() // Executed when loaded (if it is defined) 
//          getStyleSheet(   './assets/css/faq-collapse.css' )   

   import   setPanels  from  './assets/js/expanding-cards_u6.js'      // default export
            setPanels( )       // Executed now, not when loaded  
//          getStyleSheet(   './assets/css/faq-collapse.css' )   
   
// import   setFAQs    from  './assets/js/faq-collapse_u2.js'
   import                    './assets/js/faq-collapse_u3.js'         // render HTML
   import                    './assets/js/faq-collapse_u2.js'         // add listeners
//                             // Executed when loaded 
//          getStyleSheet(   './assets/css/faq-collapse.css' )   

   async function getStyleSheet( aURL ) {
//          aURL      = `http://127.0.0.1:5500/client/1c-html-custom-app/${aURL}`
        var pResponse =  await fetch( aURL )
        var aSheet    =  await pResponse.text()
        var pSheet    =  document.createElement( 'style' )
            pSheet.textContent = aSheet 
            }