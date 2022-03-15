  const   Express   =  require( 'express' );
  const   FS        =  require( 'fs' );
    var __dirname   =  process.mainModule.path             // folder of first script, can't use const; No trailing /  

      var pApp      =  Express( );
//    var aApp      = "my-react-app"
      var aApp      =  __dirname.replace( /.+(client|server)[0-9]*[\\/]([0-9]*[cs]-)*/, "" )
      var nPort     =  isNaN( process.argv[2] ) == false ? process.argv[2] : process.env.PORT || 51165  // 5000
 
//--- --- --------  =  ------------------------------------------------- --- ---

      pApp.get( "/", ( req, res ) => {
          res.send(   "<h1>Welcome to FormR ...<h1>" );
          });
//    --- --------  =  ------------------------------------------------- ---

      pApp.use( "/" +  aApp, ( req, res ) => {
      var aPath     =  req.originalUrl.substr(1)                                          // remove leading /    
          aPath     =  aPath.replace( new RegExp( `${aApp}`   ), "/build" )               // path to files in build or build/static folder 
          aPath     =  aPath.replace( new RegExp( 'build\/?$' ), "/build/index.html" )    // path to index.html if {aPath1} ends with no file
          res.send( readFile( __dirname + aPath ) );
          console.log( `\n    The URI:  '${req.originalUrl}'\n    The file: '${aPath}'`)
          });
//    --- --------  =  ------------------------------------------------- ---

      pApp.listen( nPort, ( ) => {
          console.log( `\n  Serving build/index.html at: http://localhost:${nPort}/${aApp}.\n` );
          });
//    --- --------  =  ------------------------------------------------- ---
//------- --------  =  ------------------------------------------------- --- ---

 function readFile( aPath ) {
    try {         return  FS.readFileSync( aPath, "utf-8" ) }
   catch( pErr ) { var aFile = aPath.replace( /.+(client|server)[0-9]*[\\/]/, "./" )
             console.log( ` ** The file, '${aFile}', does not exist.` )
                  return  ` ** The file, '${aFile}', does not exist.` }
          }
//--- --- --------  =  ------------------------------------------------- --- ---

