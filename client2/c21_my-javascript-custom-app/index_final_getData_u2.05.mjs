/*\
##=========+====================+================================================+
##RD    index_final_getData.mjs | My Javascript Custom App gett UI Data script
##RFILE    +====================+=======+===============+======+=================+
##FD  index_..._u2.04_byRAM.mjs |   3305|  3/07/23 21:54|    55| u2.04-30307.2100
##FD  index_..getData_u2.05.mjs |   9120|  3/12/23 12:04|   161| u2.05-30312.1200
##FD  index_..getData_u2.05.mjs |  11770|  3/12/23 16:40|   202| u2.05-30312.1600
##DESC     .--------------------+-------+---------------+------+-----------------+
#           This Javascript file, added to the first FRApps in FRDocs, is
#           used to create the JavaScript apps documented in FRDocs.
##LIC      .--------------------+----------------------------------------------+
#           Copyright (c) 2023 8020Data-FormR * Released under
#           MIT License: http://www.opensource.org/licenses/mit-license.php
##SRCE     +====================+===============================================+
\*/                                                                                 // .(30306.01.1 Add get UI Data script)
//     --------  -------------  =  -------------------------------------------------------------------- ---

//    import { createRequire } from "module";
//     var  require      = (await import( 'mmodule')).createRequire( import.meta.url );
//     var  require      = createRequire( import.meta.url );

            var  aVer           = `u2.05_byRAM_v30312.1600`

            var  aTheme         = 'menus', aLetter = aTheme.substring( 0, 1 )
            var  THE_UI_URL     = `./assets/data/ui-${aTheme}.json`

            var  THE_API_URL    = `http://localhost:50125`      // server2/s25_json-server-api                 invoices
            var  THE_API2_URL   = `http://localhost:50126`      // server3/s36_mysql-data-api                  members, projeccts, etc.
            var  THE_API3_URL   = `http://localhost:50136`      // server3/s36_mysql-data-api                  countries, cities, etc.
            var  THE_API4_URL   = `./assets/data/db-world.json` // client2/c21_my-javascript-custom-app_final  countries, cities, etc.

            var  aHTML_Title    = `c21.2{aLetter}. My JavaScript {aTheme} App (${aVer})`

//       ------  -------------  =  ----------------------------------------

     if (typeof( document ) != 'undefined') {   // running in browser

            var  mMatch         =  location.search.match( /(custom|layout|empty)/i )
            var  aTheme         = (mMatch && mMatch[1]) ? mMatch[1] : 'layout'
            var  THE_UI_URL     = `./assets/data/ui-${aTheme}.json`

            var  aSheet         =  aTheme != "empty" ? aTheme : "layout"
            var  pSheet         =  document.getElementById( 'index_final.css' );
                                   pSheet.setAttribute( 'href', `index_final_${aSheet}.css` )

            var  aLetter        =  aTheme.substring( 0, 1 ); aLetter = aLetter != "l" ? aLetter : "a"
            var  aTheme1        = `${ aTheme.substring( 0, 1 ).toUpperCase() }${ aTheme.substring(1) }`
        document.title          =  aHTML_Title.replace( /{aLetter}/, aLetter ).replace( /{aTheme}/, aTheme1 )
//        window.THE_API_URL    =  THE_API_URL  // TypeError: Cannot set properties of undefined (setting 'THE_THE_URL')
//        window.THE_UI_URL     =  THE_UI_URL   // TypeError: Cannot set properties of undefined (setting 'THE_UI_URL')

        } else { // ----------  =  ----------   // running in node

//       import  pUtil from 'node:util'
            var  pUtil          =  await import( 'node:util' )

//          var  fetch          =  require('node-fetch-v2' )
//          var  fetch          =  await import( 'node-fetch-v3' )
 //         var  fetch          = (await import( 'node-fetch-v3' )).default
//          var  fetch3         = (...args) => import( 'node-fetch-v3' ).then( ( { default: fetch } ) => fetch( ...args ) );
//          var  fetch2         =  async function( aFile ) { var fs = await import( 'fs' ); return fs.readFile( aFile, 'ASCII') }
            var  aFilePath      =  import.meta.url
            var __filename      =  aFilePath.replace( /^.+\//, "" )
            var __dirname       =  aFilePath.replace( `/${__filename}`, "" ).replace( "file:///", "" )
//          var  THE_UI_URL     = `file:///${__dirname}/assets/data/ui-${aTheme}.json`
//          var  THE_UI_URL     = `${__dirname}/assets/data/ui-${aTheme}.json`

            var  window         = {}

//         ----  -------------  =  ------------------------------

        if (process.argv[1].match(/getData/)) { // testing this script

//          var  pJSON          =  JSON.parse( '{"foo":4}');   console.log( pJSON )
//          var  pJSON          =  await fetchJSON( THE_UI_URL )
//          var  pUI            = (await fetchJSON( THE_UI_URL )).layout;  console.log( inspect( pUI ) )
//          var  pInvoices      = (await fetchJSON( 'http://localhost:50114/invoices' )); console.log( inspect( pInvoices ) )

            var  pUI            =  await getUI( 'layout'   );  console.log( inspect( pUI ) )
//          var  pDB            =  await getDB(            );  console.log( inspect( pDB ) )
//          var  pDB            =  await getDB( 'invoices' );  console.log( inspect( pDB ) )
            var  mCountries     =  await getCountries( 10  );  console.log( inspect( mCountries ) )
              }  }
//         ----  -------------  =  ------------------------------
//  ----- -------- -----------  =  --------------------------------------------------------------------------

 async function  getUI( aLayout) { return ( await fetchJSON( THE_UI_URL ))[ aLayout ? aLayout : 'layout' ] };
 async function  getDB( aTable ) { return ( await fetchJSON( `${THE_API_URL}/${ aTable || ''}` ) ) }

 async function  getCountries_JSON( nRows ) {
            var  pDB            =           await fetchJSON( `${THE_API4_URL}` )
             if (pDB.error) { return [] }
            var  mCountries     =  pDB.countries
             if (nRows) {
                 mCountries     =  mCountries.filter( ( pRow, nRow ) => { return nRow < nRows } ) }
         return  mCountries
                 }

 async function  getCountries_MySQL( nRows ) {
            var  mCountries     =           await fetchJSON( `${THE_API2_URL}/countries` )
             if (mCountries.error) { return [] }
             if (nRows) {
                 mCountries     =  mCountries.filter( ( pRow, nRow ) => { return nRow < nRows } ) }
         return  mCountries
                 }

 async function  getCountries( nRows ) { return await getCountries_JSON( nRows ) }

//  ----- -------- -----------  =  --------------------------------------------------------------------------

    async function fetchJSON( aURL ) {
//           if (typeof(document) != 'object' && aURL.match( /http/i )) {
//          var  fetch3         = (...args) => import( 'node-fetch-v3' ).then( ( { default: fetch } ) => fetch( ...args ) );
//          var  fetch3         =             require( 'node-fetch-v2' );
//               }
//               browser   ./assets        fetch
//               browser    http://        fetch
//               node      ./assets        fs/promises
//               node       http://        node-fetch-v3

//       ------  -------------  =  ----------------------------------------

        if (typeof( document ) == 'object') {   // browser
            try {
            var  pResponse      =  await fetch( aURL )
             } catch( pErr ) {     return onError( pErrr, pResponse ) }
/*          var  pResponse      =  await fetch( aURL, {
                     mode       : 'no-cors',
                     method     : "get"
                     } ) */
        } else { // ----------  =  ------------------------------

             if (aURL.match( /http/i )) {       // node http://
            try {
            var  fetch3         =  typeof( fetch ) != 'undefined' ? fetch
                                : (...args) => import( 'node-fetch-v3' ).then( ( { default: fetch } ) => fetch( ...args ) );
            var  pResponse      =  await fetch3( aURL )
             } catch( pErr ) {     return onError( pErrr, pResponse ) }
                 }
              }
//         ----  -------------  =  ------------------------------
//       ------  -------------  =  ----------------------------------------

//    if (typeof( document ) == 'object' || aURL.match( /http/i )) {
      if (pResponse) {                          // browser  or  node http://
            try {
            var  pJSON          =  await pResponse.json( )
             } catch( pErr ) {     return onError( pErr, pResponse )
                 }
//         ----  -------------  =  ------------------------------
         return  pJSON
//       ------  -------------  =  ----------------------------------------

        } else { // ----------  =  ----------   // node local file

            var  pFS            =  await import( 'fs/promises' )
//          var  aJSON          =  await pFS.readFile( aURL, 'ASCII' )
//          var  pJSON          =  JSON.parse( aJSON )
//          var  pJSON          =  JSON.parse( '{}' )
//          var  pJSON          =  JSON.parse( await pFS.readFile( new URL( aURL, import.meta.url) ) )
            var  aFile          =  aURL.match( /^(C:)*[/\\]/) ? aURL : `${__dirname}/${aURL}`
                 aFile          =  aFile.replace(   /\/\.\//, '/' )
//          var  aJSON          =  pFS.readFileSync( `${aFile}`, "ASCII" )
//          var  aJSON          =  pFS.readFileSync( `${aFile}`, "UTF8"  )
            try {
            var  pJSON          =  JSON.parse( await pFS.readFile( aFile, "UTF8" ) )
             } catch( pErr ) {     return onError( pErr, { status: 404, url: aFile } )
                 }
//         ----  -------------  =  ------------------------------
         return  pJSON
//       ------  -------------  =  ----------------------------------------
                 } // eif Node && local file
//       ------  -------------  =  ----------------------------------------
  function onError( pErr, pResponse ) {
             if (pResponse && pResponse.status == 404) {
                 pErr.message   =  `Invalid URL: '${pResponse.url}'`
                 }
                 console.log( ` *** Invalid JSON file.\n     Error: ${pErr.message}` )
          return pJSON          = { "error":   ` *** Invalid JSON file. Error: ${pErr.message}` }
                 }

              } // eof fetchJSON
//  ----- -------- -----------  =  --------------------------------------------------------------------------

//       import { createRequire } from "module";
//          var  require        = (await import( 'mmodule')).createRequire( import.meta.url );

// ----- ------  -------------  =  --------------------------------------------------------------------------

// async function inspect( pObj) { return (await import( 'util')).inspect( pObj, { depth: 99 } ) }  // Unexpected reserved word
// function inspect( pObj) { var pUtil = await import( 'node:util ') ; return pUtil.inspect( pObj, { depth: 99 } ) }  // Unexpected reserved word
   function inspect( pObj) {
        if (pUtil) { return pUtil.inspect(  pObj, { depth: 99 } )    // Unexpected reserved word
        } else {     return JSON.stringify( pObj ) }
            }
// ----- ------  -------------  =  --------------------------------------------------------------------------

    export { getUI, getDB, getCountries, inspect }

// ----- ------  -------------  =  --------------------------------------------------------------------------
