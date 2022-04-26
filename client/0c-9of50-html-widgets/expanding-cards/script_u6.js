
            setPanels()

// ------------------------------------------------------------

  function  setPanels() {

       var  mPanels = document.querySelectorAll( '.panel' )

            addActiveClasses( mPanels )

//          ------------------------------------------

  function  addActiveClasses( mPanels ) {
            mPanels.forEach( addActiveClass )
            }
//          ------------------------------------------

  function  addActiveClass( pPanel) {
            pPanel.addEventListener( 'click', onClick )
            }
//          ------------------------------------------

  function  onClick( pEvent ) {
            delActiveClasses( mPanels )
            pEvent.currentTarget.classList.add( 'active' )
            }
//          ------------------------------------------

  function  delActiveClasses( mPanels ) {
            mPanels.forEach( delActiveClass )
            }
//          ------------------------------------------

  function  delActiveClass( pPanel ) {
            pPanel.classList.remove( 'active' )
            }
//          ------------------------------------------
        } // eof setPanels
// ------------------------------------------------------------


