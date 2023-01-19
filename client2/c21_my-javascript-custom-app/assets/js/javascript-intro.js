// Numbers
// -------  -------------------------------------------------

       var  nNum1 =  2.1
       var  aNum2 = '2.2a'
       var  nNum3 = "2.3"

      console.log( "\nNumbers\n--------------------------" )
      console.log(  "aNum1, aNum3:", nNum1, nNum3 )
      console.log( "isNaN(  nNum1 ):", isNaN(  nNum1 ) )
      console.log( "isNaN(  aNum2 ):", isNaN(  aNum2 ) )
      console.log( "typeof( nNum3 ):", typeof( nNum3 ) )


// Strings
// -------  -------------------------------------------------

     const  __dirImages1   = "/images";
       var  __dirImages2  =     __dirImages1 + '/robin'
       let  __dirImages3  = `${ __dirImages1 }/robin`

      console.log( "\nStrings\n--------------------------" )
      console.log( "__dirImages1:", __dirImages1 )
      console.log( "__dirImages2:", __dirImages2 )
      console.log( "__dirImages3:", __dirImages3 )

// Functions
// --------------------------------------------------------

      console.log( "\nFunctions\n--------------------------" )

       var    Funky1 = function ( a, b )    { return a * b }
       var    Funky2 =          ( a, b ) => { return a * b }
       var    Funky3 =          ( a, b ) =>          a * b
      console.log( "Funky1:",`   '${ String( Funky1 ).replace( /    {/, '{' ) }'` )
      console.log( "Funky2:",`   '${ String( Funky2 ) }'` )
      console.log( "Funky3:",`   '${ String( Funky3 ) }'` )

       var    Funky4 = function Funky_town( a,  b ) { return a * b }
      console.log( "Funky4:",`   '${ String( Funky4 ) }'` )

       var    Funky5 = new Function( "a", "b", "return a * b" )
      console.log( "Funky5:",`   '${ String( Funky5 ).replace( /\n/g, " " ).replace( /a,/, "  a,  " ) }'` )

       var    Funky6 =           nArg1  => nArg1 * nArg1
      console.log( "" )
      console.log( "Funky6:",`   '${ '  ' + String( Funky6 ) }'` )
      console.log( "Funky6( 4 ): ", Funky6( 4 ) )

      console.log( "" )
     function Funky7( nArg1, aArg2 ) {
              console.log( "  Funky7[1]  nArg1: ", nArg1 )
              console.log( "  Funky7[2]  aArg2:", `'${nArg1}'` )
              }
      console.log( "Funky7:",`   '${ String( Funky7 ) }'` )
      console.log( `Funky7( 2.40,"robin" ):` )
                    Funky7( 2.40,"robin" )

// Styles
// --------------------------------------------------------
// in Stylesheet.css:
// -------------------------------------------------

 var  aApp_logo_style_string = `
 .App_logo {
      border       : 5px solid red;
      border-color : ##FF0022;
      } `

 var  pApp_logo_style_object = {
     "border"      : "5px solid red",
     "border-color": "#FF0022"
      }

// as React inline Style
// -------------------------------------------------
//
// <div style={ pApp_logo_style_object }</div>
//
// <div style={ { "border"      : "5px solid red",
//                "border-color": "#FF0022" }
// </div>

// as HTML inline style:
// -------------------------------------------------
//
// <div style  =  "border       :  5px solid red;
//                 border-color :  #FF0022; "
// </div>

      console.log( "\nReact Style Object\n--------------------------" )
      console.log( "pApp_logo_style_object:",        pApp_logo_style_object )
      console.log( "pApp_logo_style_object.border:", pApp_logo_style_object.border )


// Objects
// --------------------------------------------------------

 var  pObject1 = { }
      pObject1.border =  "5px solid red"
      pObject1 = { ...pObject1, "border-color": "#FF0022" } // spread operator

 var  pObject2 = {
      border       : "5px solid red",
     "border-color": "#FF0022"
      }

      console.log( "\nObjects\n--------------------------" )
      console.log( "pObject1:", pObject1 )
      console.log( "pObject2:", pObject2)
      console.log( "pObject2 => { border }:", pObject2 => { border } )


// Arrays
// --------------------------------------------------------

 var  mArray0 = [ ]

 var  mArray1 = [ 1, "string", pObject2 ]

      mArray1[ 0 ] = 1
      mArray1[ 1 ] = "string"
      mArray1[ 2 ] = pObject2

 var  mArray2 = mArray0
      mArray2[ 0 ] = {  border       : "5px solid red" }
      mArray2[ 1 ] = { "border-color": "#FF0022" }

 var  mArray3 = [ ...mArray1, ...mArray2 ]
      mArray3.push( [ 1, { a: 1 } , [ 'a', 1 ] ] )

      console.log( "\nArrays\n--------------------------" )
      console.log( "mArray0:", mArray0 )
      console.log( "mArray1:", mArray1 )
      console.log( "mArray2:", mArray2 )  // Array of objects
      console.dir( "mArray3:", mArray3 )
      console.log( "mArray3:", JSON.stringify( mArray3 ) )
      console.log( "mArray3:", require( 'util').inspect( mArray3, { depth: 9 } ) )

