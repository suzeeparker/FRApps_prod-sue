
//    var   aURI        =   import.meta.url
//    var __filename    =   aURI.replace( /^.+\//, "" )
//    var __dirname     =   aURI.replace( `/${__filename}`, "" ).replace( "file:///", "" )

      var   fs          =   require('fs')
      var   fetch       =   require('node-fetch' ) // not required in Node v17.5+
      var { fetchCountries, fmtCountries, fmtCountries2, filterCountries, parseJSON } = require('../../countries/countries.js')

      var   aAPI        =  ''                                                       // .(30214.03.1 RAM Set if running in Node)
      var   aAPI_URL    =   aAPI ? '/api26' : 'http://localhost:54026'

//--------  ----------  =   ------------------------------------------------------------

      var   aCountries  =  'all'
      var   aCountries  =  'Aze,BEL,'

      var   aFile       =  'db.json'                                                // .(30225.02.1 RAM All countries)
//    var   aFile       =  'db.json.js'
//    var   aFile       =  'db1.json'                                               // .(30225.02.2 RAM Just one country)
//    var   aFile       =  'db1.json.js'

//    var   aTests      =  'test0 fetch formr.net/home'
//    var   aTests      =  'test1 fetch /countries from {aFile}'
      var   aTests      =  'test3 fetch /countries and cities {aFile}'
//    var   aTests      =  'test2 fetch /cities from {aFile}'                       // .(30225.02.3 RAM json.js only)

//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test0/ ) ) {

    fetch( 'http://formr.net/home' )
           .then( pResponse => pResponse.text( ) )
           .then( aResponse => console.log( aResponse ) )

            } // eof test0
//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test1/ ) ) {

//     var  pJSON       =   parseJSON(   `${__dirname}/db.json` )                   // Can also take db.json.js
//     var  pJSON       =   parseJSON( '../assets/data/db.json' )                   // File is relative to parseJSON's file location
       var  pJSON       =   parseJSON( `../assets/data/${aFile}` )

       var  aHTML       =   fmtCountries(  pJSON.countries )
            console.log( aHTML )

            } // eof test1
//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test2/ ) ) {

//     var  aJSON       =   fs.readFileSync( `${__dirname}/db.json.js`, 'ASCII' )   //#.(30225.01.1 RAM WRONG!!)
       var  aJSON       =   fs.readFileSync( `${__dirname}/${aFile}`,    'UTF8' )   // .(30225.01.1 RAM Supports foreign languages)
            aJSON       =   aJSON.replace( /if \(.*/, "")                           // .(30223.01.1 RAM Remove display of pJSON )
//     var  pJSON       =   eval( '(' + aJSON.replace( /var pJSON =/, "" ) + ')' )  // es6: Should work, but it doesn't??
                            eval( aJSON )                                           // es5: var pJSON assignment is visible

       var  aHTML       =   pJSON.cities.map( pCity => pCity.CityName ).join( '<br>\n')
            console.log( aHTML )

            } // eof test2
//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test3/ ) ) {

       var  pJSON       =   parseJSON( `../assets/data/${aFile}` )
            pJSON.countries =  filterCountries( pJSON.countries, `?countries=${aCountries}` )
//          filterCountries( pJSON.countries, `?countries=${aCountries}` )          // no workie

       var  aHTML       =   fmtCountries2( pJSON.countries, pJSON.cities )
            console.log( aHTML )

            } // eof test3
//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test4/ ) ) {                    // Use json_server

       var  aAPI_URL    =   aAPI ? '/api25' : 'http://localhost:54025'
    fetch(`{aAPI_URL}/fmtCountries?recs=5`)
           .then( pResponse =>  pResponse.json( ) )
           .then( pJSON     =>  onFetch( pJSON ) )
           .catch(pError    =>  console.log( `** ${pError.message}` ) );

  function  onFetch( pJSON ) {
       var  aHTML       =   fmtCountries( pJSON.countries )
            console.log( aHTML )
            } // eof onFetch

            } // eof test4
//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test5/ ) ) {                     // Use MySQL_server with fetchJSON

    fetchJSON( `${aAPI_URL}/countries?recs=2` )
            .then( pJSON => {

       var  aHTML       =   fmtCountries( pJSON.countries )
            console.log( aHTML )
            } )
            } // eof test5
//--------  ----------  =   ------------------------------------------------------------

if ( aTests.match( /test6/ ) ) {                     // Use MySQL_server with fetchContries

    fetchCountries( 'pDIV' )

            } // eof test6
//--------  ------------  =  -------------------------------------------------------

