
       var  FAQ_Buttons = document.querySelectorAll( ".faq-toggle" );

            FAQ_Buttons.forEach( FAQ_Button_addEventListener);

// ---------------------------------------------------------------------

  function  FAQ_Button_addEventListener( FAQ_Button ) {
            FAQ_Button.addEventListener( "click", FAQ_Button_onClick );
            }
// ---------------------------------------------------------------------

  function  FAQ_Button_onClick( FAQ_Button_Event ) {
       var  FAQ_Button = FAQ_Button_Event.currentTarget;
            FAQ_Button.parentNode.classList.toggle( "active" );
            } 
// ---------------------------------------------------------------------

//function  doNothing( ) { } 
//  export  default doNothing 

//  export  default function doNothing( ) { } 
//  export  default function( )    { }    // Not Required if a file is 
//  export  default         ( ) => { }    // imported without a name.  

// ---------------------------------------------------------------------
