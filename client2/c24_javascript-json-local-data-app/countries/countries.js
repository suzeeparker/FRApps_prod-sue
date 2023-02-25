//---------------------------------------------------------------------------------------------------

       aTests   = 'test0 fetch formr.net/home'
       aTests   = 'test1 fetch /countries from db.json'
//     aTests   = 'test2 fetch /countries from json_server'
//     aTests   = 'test3 fetch /countries from MySQL Server with fetchJSON'
//     aTests   = 'test4 fetch /countries from MySQL Server with fetchCountries'

       aTests   = (typeof(document) == 'object') ? 'live in Browser' : aTests 

  if ( aTests.match( /test/ ) ) {   
  var  fetch    =  require( 'node-fetch' )   // not required in Node v17.5+
  var  aAPI     =  ''                                                                           // .(30214.03.1 RAM Set if     running in Node)
  } else { 
  var  aAPI     = `${document.location.href}`.match( /iodd.com/i ) ? '/api24' : ''              // .(30214.03.1 RAM Set if not running in Browser).(30220.02.1 RAM Add here)
       }
  var  aAPI_URL =  aAPI ? '/api26' : 'http://localhost:54026'                                    

//---------------------------------------------------------------------------------------------------


if ( aTests.match( /test0/ ) ) { 

    fetch( 'http://formr.net/home' )
           .then( res => res.text( ) )
           .then( text => console.log( text ) )     
           
            } // eof test0
//---------------------------------------------------------------------------------------------------

if ( aTests.match( /test1/ ) ) {                    // Use db.json.js 

       var  pJSON    =  parseJSON( './db.json.js' ) 
       var  aHTML    =  fmtCountries( pJSON.countries )
            console.log( aHTML )

            } // eof test1
//---------------------------------------------------------------------------------------------------

if ( aTests.match( /test2/ ) ) {                    // Use json_server 
     
       var  aAPI_URL      =  aAPI ? '/api25' : 'http://localhost:54025'   
    fetch(`{aAPI_URL}/fmtCountries?recs=5`)
           .then( ( res ) => res.json( ) )
           .then( ( json) => onFetch( json ) )
           .catch(( err ) => console.log( `** ${err.message}` ) );      
                
  function  onFetch( pJSON ) {
       var  aHTML         =  fmtCountries( pJSON.countries )
            console.log( aHTML )   
            } // eof onFetch 
     
        } // eof test2
//--------  ------------  =  -------------------------------------------------------

if (aTests.match( /test3/ ) ) {                     // Use MySQL_server with fetchJSON   

                             fetchJSON( `${aAPI_URL}/countries?recs=2` ).then( pJSON => {   // .(30220.02.3)  

       var  aHTML         =  fmtCountries( pJSON.countries ) 

            console.log( aHTML )
            } ) 

            } // eof test3
//--------  ------------  =  -------------------------------------------------------

if (aTests.match( /test4/ ) ) {                     // Use MySQL_server with fetchContries  

                             fetchCountries( 'pDIV' )      

            } // eof test4
//--------  ------------  =  -------------------------------------------------------

async function fetchCountries( pDiv ) {                                                   

       var  mCountries    = (await fetchJSON( `${aAPI_URL}/countries?recs=999` )).countries 

       var  aHTML         =  fmtCountries( mCountries)                                       

        if (typeof(pDiv) == 'object') { 
            pDiv.innerHTML=  aHTML 
       } else { console.log( aHTML ) }

            } // eof fetchProjects1                                                      
//--------  ------------  =  -------------------------------------------------------
                     
function  fmtCountries( mCountries ) {                                                            

       var  aHTML         =  mCountries.map( fmtCountry ).join( "\n" )
    return  aHTML
            
//          ------------  =  -----------------------------------------

  function  fmtCountry( pCountry, i ) {                                                         // .(30208.02.1 RJS Beg Rewrite)

       var  aClass        =  i % 2 == 1 ? "row-even" : "row-odd"
       var  abgColor      =  i % 2 == 1 ? '#EEEEEE'  : "lightblue"

       var  aID           =  `id="R${ `${ i + 1 }`.padStart( 3, "0" )}`
       var  aCode         =  pCountry.Code         // 'AFG'
       var  aName         =  pCountry.Name         // 'Afghanistan'
       var  aContinent    =  pCountry.Continent    // 'Asia'
       var  nSurfaceArea  =  pCountry.SurfaceArea  //  652090
       var  nPopulation   =  pCountry.Population   //  22720000

       var  aHTML         = `
              <tr Class="${ aClass } ${aID} height="0px">
                <td bgcolor=${abgColor}> ${ aCode }</td>
                <td bgcolor=${abgColor}> ${ aName }</td>
                <td bgcolor=${abgColor}> ${ aContinent }</td>
                <td bgcolor=${abgColor}> ${ nSurfaceArea }</td>
                <td bgcolor=${abgColor}> ${ nPopulation }</td>
              </tr>               
              `               
    return  aHTML
//          ------------  =  -------------------------------
            }        // eof  fmtCountry
//     ---  ------------  =  -----------------------------------------
            }   // eof  fmtCountries
//--------  ------------  =  -------------------------------------------------------

  function  parseJSON(  aFile ) {
       var  pFS      =  require( 'fs' )
       var  aDir     =  __dirname
       var  aText    =  pFS.readFileSync( `${aDir}/${aFile}`, "ASCII" )
            aText    =  aText.replace( //g, "'" )
            aText    =  aText.replace( //g, "'" )

        if (aFile.match( /\.json$/)) {   
       var  pJSON    =  JSON.parse( aText )
            }
        if (aFile.match( /\.js$/)) {   
            eval( aText )    
            }
    return  pJSON
            }   // eof  parseJSON
//     ---  ------------  =  -----------------------------------------

  function  sortitem(a,b) {
	return (a.Name) > (b.Name) ? 1 : -1
	        }
//     ---  ------------  =  -----------------------------------------
    
     async  function fetchJSON( aURL ) {
       var  res      = await fetch( aURL )
       var  json     = await res.json( ) 
    return  json 
            }
//--------  ------------  =  -------------------------------------------------------

//---------------------------------------------------------------------------------------------------

