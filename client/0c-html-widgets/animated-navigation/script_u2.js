       var  ToggleButton = document.getElementById( 'toggle' )
       var  NavMenuBar   = document.getElementById( 'nav' )

//  --------------------------------------------------------------

//function  setNav() {
//          ToggleButton.addEventListener( 'click', ( ) => NavMenuBar.classList.toggle( 'active' ) )
            ToggleButton.addEventListener( 'click', ToggleButton_onClick )
//          }
//  --------------------------------------------------------------

//function  ToggleButton_onClick( Nav_Event ) { 
  function  ToggleButton_onClick(  ) { 
            NavMenuBar.classList.toggle( 'active' )
            }
//  --------------------------------------------------------------
