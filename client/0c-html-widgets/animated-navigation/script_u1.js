       var  toggle = document.getElementById( 'toggle' )
       var  nav    = document.getElementById( 'nav' )

//  --------------------------------------------------------------

//          toggle.addEventListener( 'click', ( ) => NavMenuBar.classList.toggle( 'active' ) )
            toggle.addEventListener( 'click', onClick )
//          }
//  --------------------------------------------------------------

  function  onClick(  ) { 
            nav.classList.toggle( 'active' )
            }
//  --------------------------------------------------------------


