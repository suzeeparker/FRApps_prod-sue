       var  Toggle_Button = document.getElementById( 'toggle' )
       var  Nav_MenuBar   = document.getElementById( 'nav' )

//  --------------------------------------------------------------

//function  setNav() {
//          toggle.addEventListener( 'click', ( ) => Nav_MenuBar.classList.toggle( 'active' ) )
            Toggle_Button.addEventListener( 'click', Toggle_Button_onClick )
//          }
//  --------------------------------------------------------------

//function  Toggle_Button_onClick( Nav_Event ) { 
  function  Toggle_Button_onClick(  ) { 
            Nav_MenuBar.classList.toggle( 'active' )
            }
//  --------------------------------------------------------------

//  export  default  setNav
    export  default  ( ) => { }

