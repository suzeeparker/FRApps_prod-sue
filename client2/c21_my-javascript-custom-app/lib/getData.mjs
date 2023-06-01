/*
#*\
##=========+====================+================================================+
##RD    index_final_getData.mjs | My Javascript Custom App get UI Data script
##RFILE    +====================+=======+===============+======+=================+
##FD  index_..._u2.04_byRAM.mjs |   3305|  3/07/23 21:54|    55| u2.04-30307.2100
##FD  index_..._u2.04_byRAM.mjs |   3728|  3/08/23 13:57|    63| u2.04-30308.1400
##DESC     .--------------------+-------+---------------+------+-----------------+
#           This Javascript file, added to the first App in Client1 in FRApps is
#           used to create the first Client2 JavaScript App documented in FRDocs.
#           This script gets data from ui.json files.
##LIC      .--------------------+----------------------------------------------+
#           Copyright (c) 2023 8020Data-formR * Released under
#           MIT License: http://www.opensource.org/licenses/mit-license.php
##SRCE     +====================+===============================================+
#*/                                                                                 // .(30306.02.3 Write Get UI Data script)
//     --------  -------------  =  -------------------------------------------------------------------- ---

            var  aVer           = `u2.04_byRAM_v30308.1400`

            var  mMatch         =  location.search.match( /(custom|layout|empty)/i )
            var  aTheme         = (mMatch && mMatch[1]) ? mMatch[1] : 'layout'

            var  aSheet         =  aTheme != "empty" ? aTheme : "layout"
            var  pSheet         =  document.getElementById( 'index_final.css' );
                                   pSheet.setAttribute( 'href', `index_final_${aSheet}.css` )

            var  aLetter        =  aTheme.substr( 0, 1 ); aLetter = aLetter != "l" ? aLetter : "a"
                 aTheme         = `${ aTheme.substr( 0, 1 ).toUpperCase() }${ aTheme.substr(1) }`
        document.title          = `c21.2${aLetter}. My JavaScript ${aTheme} App (${aVer})`

          window.THE_UI_URL     = `./assets/data/ui-${aTheme}.json`
//        window.THE_UI_URL     = `https://localhost:3000:/assets/data/ui-${aTheme}.json`

//     --------  -------------  =  --------------------------------------------------------------------

//          var  pJSON          =  await (await fetch( THE_UI_URL )).json( )

          window.getHeader      =  async function( ) {
            var  pJSON          =  await (await fetch( THE_UI_URL )).json( )
         return  pJSON.layout.header
                 }
//       ------  -------------  =  ---------------------------------------------------------

          window.getMenu_Top    =  function( ) { return pJSON.layout.header.menus.top }

//       ------  -------------  =  ---------------------------------------------------------

          window.getMenu_Side   =  async function( ) {
            var  pJSON          =  await (await fetch( THE_UI_URL )).json( )
         return  pJSON.layout.header.menus.side
                 }
//       ------  -------------  =  ---------------------------------------------------------

          window.getFooter      =  function( ) { return pJSON.layout.footer }

          window.getSections    =  function( ) { return pJSON.layout.sections }

//       ------  -------------  =  ---------------------------------------------------------

            var  pJSON          =  await (await fetch( THE_UI_URL )).json( )

                 console.log( pJSON )                                                  // .(30306.02.3 End)
//     --------  -------------  =  -------------------------------------------------------------------- ---
