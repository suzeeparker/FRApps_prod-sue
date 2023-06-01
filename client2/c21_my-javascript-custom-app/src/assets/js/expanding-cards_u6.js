
//          setPanels( )              // Don't execute here
//     var  pPanels = new Panels( )

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

//  Default Exports 
// --------------------------------------------------------------------------
    export  default setPanels         // import AnyName from './this_file.js'        

//  Named Exports                     // import { SameNamedMembers } from './this_file.js'        
// --------------------------------------------------------------------------
// export { aVar1, nNum2, mArray3, pObject4, xFunction5 };               // Can only export named variables / objects / functions) 
// export { Object4: { Var1: aVar1, Num2: nNum2, Array3: [ 1, 2, 3 ] }   // This is invalid syntax of export in ES6

// ------------------------------------------------------------
