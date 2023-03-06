
            setPanels()

//  -----------------------------------------------------

  function  setPanels() { 

       var  mPanels = document.querySelectorAll( '.panel' )

//  ---------------------------------------------

            mPanels.forEach( addEventListener ) 

  function  addEventListener( pPanel, i ) {
//          pPanel.addEventListener( 'click', ( pEvent ) => {
/*          pPanel.addEventListener( 'click', ( ) => {
            removeActiveClasses()
            pPanel.classList.add( 'active' )
            } ) */
            console.log( `${ i + 1 }, adding listener` )
            pPanel.addEventListener( 'click', onclick )
                 
//  ----------------------------------------

  function  onclick( ) { 
            console.log( "" )
            removeActiveClasses()
            pPanel.classList.add( 'active' )
            } // eof onClick 
//      ------------------------------------
        } // eof addEventListener
//  ---------------------------------------------
/* 
  function  onclick( pEvent ) { 
            removeActiveClasses()
            pEvent.currentTarget.classList.add( 'active' )
        } // eof onClick 
//  ---------------------------------------------
*/   
  function  removeActiveClasses( ) {
/*          mPanels.forEach(            pPanel   => {
            mPanels.forEach(          ( pPanel ) => {
            pPanel.classList.remove( 'active' )
            }) */
            mPanels.forEach( removeActiveClass )
        } // eof removeActiveClasses
//  ---------------------------------------------

  function  removeActiveClass( pPanel, i ) { 
            console.log( `${ i + 1 }, ${ pPanel.classList }` )
            pPanel.classList.remove( 'active' )
        } // eof removeActiveClass
//  ---------------------------------------------
    }  // eof setPanels 
//  -----------------------------------------------------
