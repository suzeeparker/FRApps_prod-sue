
            setPanels()

// ------------------------------------------------------------

  function  setPanels() {

       var mCard_Panels = document.querySelectorAll( '.panel' )

             Card_addEventListeners( mCard_Panels )

//  -----------------------------------------------------

   function  Card_addEventListeners( mCard_Panels ) {
            mCard_Panels.forEach( Card_addEventListener )
            }
//  -----------------------------------------------------

   function  Card_addEventListener( pCard_Panel ) {
            pCard_Panel.addEventListener( 'click', Card_onClick )
            }
//  -----------------------------------------------------

   function  Card_onClick( pCard_Event ) {
            removeActiveClasses( mCard_Panels )
            pCard_Event.currentTarget.classList.add( 'active' )
            }
//  -----------------------------------------------------

   function  Card_removeActiveClasses( mCard_Panels ) {
            mCard_Panels.forEach( removeActiveClass )
            }
//  -----------------------------------------------------

   function  Card_removeActiveClass ( pCard_Panel ) {
            pCard_Panel.classList.remove('active')
            }
//  ----------------------------------------------------
        } // eof setPanels
// ------------------------------------------------------------


