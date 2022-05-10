  
       (new Panels).addActiveClasses( ) 

// ------------------------------------------------------------

  function  Panels() {
  
       var  Panels  = this
       var mPanels = document.querySelectorAll( '.panel' ) 

//          ------------------------------------------

            Panels.addActiveClasses = function( ) {
           mPanels.forEach( Panels.addActiveClass ) 
            }
//          ------------------------------------------

            Panels.addActiveClass = function( pPanel) { 
            pPanel.addEventListener( 'click', Panels.onClick ) 
            }
//          ------------------------------------------

            Panels.onClick = function( pPanel ) {
            Panels.delActiveClasses( )
           pPanel.currentTarget.classList.add( 'active' )
            }
//          ------------------------------------------

            Panels.delActiveClasses = function( ) {
           mPanels.forEach( Panels.delActiveClass )
            }
//          ------------------------------------------

            Panels.delActiveClass = function( pPanel ) {
           pPanel.classList.remove( 'active' )
            }
//          ------------------------------------------
        } // eoc Panels 
// ------------------------------------------------------------

  
        
     