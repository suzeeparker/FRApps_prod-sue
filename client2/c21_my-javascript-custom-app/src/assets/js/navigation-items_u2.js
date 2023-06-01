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
//                                   setPanels( )
       if (aNavItem == "Cards"   ) { toggleDiv( '#cards-container', "flex" )
                                     }
//     if (aNavItem == "Contact" ) { alert( " *** " + aNavItem + " is not defined" ) }
       if (aNavItem == "Contact" ) { toggleDiv( '#contact-form', "block" ) }            // .(20426.02.1 RAM Added) 

            } // eof NavItem_onClick
//          -------------------------------------------------------

  function  toggleDiv( aSelector, aDisplay ) {
            aDisplay    =  aDisplay    ? aDisplay     : "block"   // The default visible value

//     var  pDiv        =  document.querySelectorAll( '.faq-container' )[0]
       var  pDiv        =  document.querySelectorAll( aSelector )[ 0]

//     var  aVisibility =  pDiv.style.visibility
//          pDiv.style.visibility = (aVisibility == "hidden") ? "visible" :"hidden"

       var  aVisibility =  pDiv.style.display
//          pDiv.style.display = (aVisibility == "none") ? "block" :"none"

//          aVisibility =  aVisibility ? aVisibility  : "block"
            aVisibility =  aVisibility ? aVisibility  : "none"   // .(20426.03.11 RTAM Assume it's hidden)
            pDiv.style.display = (aVisibility == "none") ? aDisplay : "none"
            }
//          -------------------------------------------------------
// ------------------------------------------------------------------------

       var  NavMenu = { setBar: {}, setItems: {} }   

   export { NavMenu }            // Named export. Imported name must match. 
//  export  default NavMenu      // Default exoirt  

// ------------------------------------------------------------------------
