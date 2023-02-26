//---------------------------------------------------------------------------------------------------

//    var   aURI        =   import.meta.url
//    var __filename    =   aURI.replace( /^.+\//, "" )
//    var __dirname     =   aURI.replace( `/${__filename}`, "" ).replace( "file:///", "" )

      var   aAPI        =  '/api24'
      var   aAPI        =   typeof( document ) == 'object' ? (document.location.href.match( /iodd.com/i ) ? aAPI : '' ) : ''
      var   aAPI_URL    =   aAPI ? '/api26' : 'http://localhost:54026'

//--------  ----------  =   ------------------------------------------------------------

async function fetchCountries( pDiv ) {

       var  mCountries  =  (await fetchJSON( `${aAPI_URL}/countries?recs=999` )).countries

       var  aHTML       =   fmtCountries( mCountries)

        if (typeof(pDiv) == 'object') {
            pDiv.innerHTML =  aHTML
       } else { console.log(  aHTML ) }

            } // eof fetchProjects
//--------  ----------  =   ------------------------------------------------------------

  function  filterCountries( mCountries, aHRef ) {

       var  mHRef       =  aHRef.match( /([?&]countries)=(.+)/i )
       var  aQuery      =  mHRef ? mHRef[2] : ''; aQuery = aQuery.match( /all/i ) ? '' : aQuery   
        if (aQuery) {      aQuery = aQuery.replace( /,$/, "" ).replace( /^,/, "")
       var  regCodes    =  new RegExp( `${ aQuery.replace( /,/g, "|" ) }`, "i" )       
    return  mCountries.filter( pCountry => pCountry.Code.match( regCodes ) != null )          
        } else {
    return  mCountries 
          }
            } // eof filterCountries 
//     ---  ----------  =   --------------------------------------------

  function  fmtCountries( mCountries ) {
          
       var  aHTML       =   mCountries.map( fmtCountry ).join( "\n" )
    return  aHTML

//     ---  ----------  =   --------------------------------------------

  function  fmtCountry( pCountry, i ) {                                                         // .(30208.02.1 RJS Beg Rewrite)

       var  aClass      =   i % 2 == 1 ? "row-even" : "row-odd"
       var  abgColor    =   i % 2 == 1 ? '#EEEEEE'  : "lightblue"

       var  aID         =  `id="R${ `${ i + 1 }`.padStart( 3, "0" )}"`
       var  aCode       =   pCountry.Code         // 'AFG'
       var  aName       =   pCountry.Name         // 'Afghanistan'
       var  aContinent  =   pCountry.Continent    // 'Asia'
       var  nSurfaceArea=   pCountry.SurfaceArea  //  652090
       var  nPopulation =   pCountry.Population   //  22720000

       var  aHTML       = `
              <tr Class="${ aClass }" ${aID} style="vertical-align: top;">
                <td bgcolor=${abgColor}> ${ aCode }</td>
                <td bgcolor=${abgColor}> ${ aName }</td>
                <td bgcolor=${abgColor}> ${ aContinent }</td>
                <td bgcolor=${abgColor}> ${ nSurfaceArea }</td>
                <td bgcolor=${abgColor}> ${ nPopulation }</td>
              </tr>
              `
    return  aHTML
//     ---  ----------  =   --------------------------------------------
            } // eof  fmtCountry
//     ---  ----------  =   --------------------------------------------
            } // eof  fmtCountries
//--------  ----------  =   ------------------------------------------------------------

  function  fmtCountries2(  mCountries, mCities ) {

    for (i = 0; i < mCountries.length; i++) {                                                       // .(30225.03.1 RAM Add mCities to mCountries)
       var  aCode       =   mCountries[i].Code 
            mCountries[i].Cities = mCities.filter( pCity => { return aCode == pCity.CountryCode } )
            }                                                                                       // .(30225.03.1 RAM End)
       var  aHTML       =   mCountries.map( fmtCountry2 ).join( "\n" )
    return  aHTML

//     ---  ----------  =   --------------------------------------------

  function  fmtCountry2( pCountry, i ) {                                                            // .(30208.02.1 RJS Beg Rewrite)

       var  aClass      =   i % 2 == 1 ? "row-even" : "row-odd"
       var  abgColor    =   i % 2 == 1 ? '#EEEEEE'  : "lightblue"
       var  aFill       =  '<br>\n'.padEnd(21)                                                      // .(30225.03.2 RAM Indent Cities)

       var  aID         =  `id="R${ `${ i + 1 }`.padStart( 3, "0" )}"`
       var  aCode       =   pCountry.Code         // 'AFG'
       var  aName       =   pCountry.Name         // 'Afghanistan'
       var  aContinent  =   pCountry.Continent    // 'Asia'
       var  nSurfaceArea=   pCountry.SurfaceArea  //  652090
       var  nPopulation =   pCountry.Population   //  22720000
       var  aCities     =   aFill + pCountry.Cities.map( pCity => pCity.CityName ).join( aFill )    // .(30225.03.3 RAM Add Cities)

       var  aHTML       = `
            <tr Class="${ aClass }" ${aID} style="vertical-align: top;">
              <td bgcolor=${abgColor}> ${ aCode }</td>
              <td bgcolor=${abgColor}> ${ aName }</td>
              <td bgcolor=${abgColor}> ${ aContinent }</td>
              <td bgcolor=${abgColor}> ${ nSurfaceArea }</td>
              <td bgcolor=${abgColor}> ${ nPopulation }</td>
              <td bgcolor=${abgColor}> ${ aCities.substr(4) }</td>
            </tr>
           `
    return  aHTML
//     ---  ----------  =   --------------------------------------------
         } // eof  fmtCountry2
//     ---  ----------  =   --------------------------------------------
         } // eof  fmtCountries2
//--------  ----------  =   ------------------------------------------------------------

   async  function fetchJSON( aURL ) {

       var  pResponse   =   await fetch( aURL )
       var  pJSON       =   await pResponse.json( )
    return  pJSON

            } // eof fetchJSON
//     ---  ----------  =   --------------------------------------------

function  parseJSON(  aFile ) {  // Only works in Node.js, not Node.mjs.  Use fetchJSON in browser 

       var  pFS         =   require( 'fs' ) 
       var  aDir        = __dirname

       var  aFile       =   aFile.match( /^(C:)*[/\\]/) ? aFile : `${aDir}/${aFile}`
//     var  aJSON       =   pFS.readFileSync( `${aFile}`, "ASCII" )
       var  aJSON       =   pFS.readFileSync( `${aFile}`, "UTF8"  )
/*       
            aJSON       =   aJSON.replace( //g, "_" )
            aJSON       =   aJSON.replace( //g, "_" )
            aJSON       =   aJSON.replace( //g, "_" )
            aJSON       =   aJSON.replace( //g, "_" )
//          aJSON       =   aJSON.replace( / /g, "" )
            aJSON       =   aJSON.replace( //g, "_" )
//          aJSON       =   aJSON.replace( /n/g, "" ) 
//          aJSON       =   aJSON.replace( /\p{Letter}/ug, "*" )  
//          aJSON       =   aJSON.replace( /[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]/g, "*")
//          aJSON       =   aJSON.replace( /[^abc]/g, "a")
            aJSON       =   aJSON.replace( /[^\x01-\x7F]/g, "" )
            aJSON       =   aJSON.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            aJSON       =   aJSON.replace( "MigCB$CB'evi", "MigCB$CB_evi")  // 38549
*/
//          { CountryCode: 'ZWE', CityName: 'Bulawayo', Population: '621,742' },

        if (aFile.match( /\.json$/)) {
       var  pJSON       =   JSON.parse( aJSON )
            }
        if (aFile.match( /\.m*js$/)) {
            aJSON       =   aJSON.replace( /if \(.*/, "")                           // .(30223.01.1 RAM Remove display of pJSON )
//          aJSON       =               aJSON.replace( /var pJSON/, 'pJSON' )       // es5: remove var not needed ? 
                            eval( aJSON )                                           // es5: var pJSON assignment is visible
//     var  pJSON       =   eval( '(' + aJSON.replace( /var pJSON =/, "" ) + ')' )  // es6: Shold work, but it doesn't?? 
}
    return  pJSON
            } // eof parseJSON
//     ---  ----------  =   --------------------------------------------

  function  sortitem(a,b) {
    return (a.Name) > (b.Name) ? 1 : -1
            }
//     ---  ----------  =   --------------------------------------------

        if (typeof(process) == 'object') {
     module.exports = { fetchCountries, fmtCountries, fmtCountries2, filterCountries, parseJSON }
            }
//          export    { fetchCountries, fmtCountries, fmtCountries2, filterCountries, parseJSON }

//--------  ----------  =   ------------------------------------------------------------

 