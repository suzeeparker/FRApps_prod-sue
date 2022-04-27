
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
/*          pCard_Panel.addEventListener( 'click', ( pCard_Panel  ) => Card_onClick( pCard_Panel ) )
            pCard_Panel.addEventListener( 'click', () => {
            removeActiveClasses( mCard_Panels )
            pCard_Panel.classList.add( 'active' )
            } ) */
//  -----------------------------------------------------

   function  Card_onClick( pCard_Event ) {
            removeActiveClasses( mCard_Panels )
            pCard_Event.currentTarget.classList.add( 'active' )
            }
// function  Card_Panel_onClick( pCard_Panel ) {
//          removeActiveClasses( mCard_Panels )
//          pCard_Panel.classList.add( 'active' )
//          }

//  -----------------------------------------------------

   function  Card_removeActiveClasses( mCard_Panels ) {
            mCard_Panels.forEach( removeActiveClass )
            }
//          mCard_Panels.map( ( pCard_Panel, i )_=> { return 'Row ' + 1 } )
//          mCard_Panels.forEach( pCard_Panel => { return 
//          pCard_Panel.classList.remove( 'active' )
//          )
//  -----------------------------------------------------

   function  Card_removeActiveClass ( pCard_Panel ) {
            pCard_Panel.classList.remove('active')
            }
//  -----------------------------------------------------
