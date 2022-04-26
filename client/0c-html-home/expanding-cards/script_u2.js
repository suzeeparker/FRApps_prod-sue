
       var  mPanels = document.querySelectorAll( '.panel' )

            addEventListeners( mPanels )

//  -----------------------------------------------------

  function  addEventListeners( mPanels ) {
            mPanels.forEach( addEventListener )
            }
//  -----------------------------------------------------

  function  addEventListener( pPanel ) {
            pPanel.addEventListener( 'click', Panel_onClick )
            }
/*          pPanel.addEventListener( 'click', ( pPanel  ) => Panel_onClick( pPanel ) )
            pPanel.addEventListener( 'click', () => {
            removeActiveClasses( mPanels )
            pPanel.classList.add( 'active' )
            } ) */
//  -----------------------------------------------------

  function  Panel_onClick( pEvent ) {
            removeActiveClasses( mPanels )
            pEvent.currentTarget.classList.add( 'active' )
            }
//function  Panel_onClick( pPanel ) {
//          removeActiveClasses( mPanels )
//          pPanel.classList.add( 'active' )
//          }

//  -----------------------------------------------------

  function  removeActiveClasses( mPanels ) {
            mPanels.forEach( removeActiveClass )
            }
//          mPanels.map( ( pPanel, i )_=> { return 'Row ' + 1 } )
//          mPanels.forEach( pPanel => { return 
//          pPanel.classList.remove( 'active' )
//          )
//  -----------------------------------------------------

  function  removeActiveClass ( pPanel ) {
            pPanel.classList.remove('active')
            }
//  -----------------------------------------------------
