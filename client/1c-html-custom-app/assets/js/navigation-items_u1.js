//  import  setPanels from './expanding-cards_u6.js';

// -------------------------------------------------------------------------------------

//function  setItems( ) {
            NavMenuBar_addClickListeners( )
//          } 
//          -------------------------------------------------------

  function  NavMenuBar_addClickListeners( ) {
       var mNavItems = document.querySelectorAll( 'nav li' )
           mNavItems.forEach( NavItem_addClickListener )
            }
//          -------------------------------------------------------

  function  NavItem_addClickListener( pNavItem ) {
           pNavItem.addEventListener( 'click', NavItem_onClick )
            }
//          -------------------------------------------------------

  function  NavItem_onClick( NavItem_Event ) {
       var aNavItem  =  NavItem_Event.currentTarget.innerText;

       if (aNavItem == "FAQ"     ) { toggleDiv( '.faq-container' ) }

//     if (aNavItem == "Cards"   ) { toggleDiv( '#cards-container' )
//                                  setPanels( )
       if (aNavItem == "Cards"   ) { toggleDiv( '#cards-container', "flex" )
                                    }
       if (aNavItem == "Contact" ) { alert( " *** " + aNavItem + " is not defined" ) }

            } // eof NavItem_onClick
//          -------------------------------------------------------

  function  toggleDiv( aSelector, aDisplay ) {
//     var  pDiv        =  document.querySelectorAll( '.faq-container' )[0]
       var  pDiv        =  document.querySelectorAll( aSelector )[ 0]

//     var  aVisibility =  pDiv.style.visibility
//          pDiv.style.visibility = (aVisibility == "hidden") ? "visible" :"hidden"

       var  aVisibility =  pDiv.style.display
//          pDiv.style.display = (aVisibility == "none") ? "block" :"none"

            aDisplay    =  aDisplay ? aDisplay : "block"
            pDiv.style.display = (aVisibility == "none") ? aDisplay :"none"
            }
//          -------------------------------------------------------
// ------------------------------------------------------------------------

