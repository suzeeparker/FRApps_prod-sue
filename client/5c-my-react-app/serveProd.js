 const   Express   =  require( 'express' );
  const   FS        =  require( 'fs' );

//  var __dirname   =  process.mainModule.path             // folder of first script, can't use const; No trailing /  

      var pApp      =  Express( );
//    var aApp      =  __dirname.replace( /.+(client|server)[0-9]*[\\/]([0-9]*[cs]-)*/, "" )  // remove 5c- from appname 
      var aApp      =  __dirname.replace( /.+(client|server)[0-9]*[\\/]*/, "" )
      var nPort     =  isNaN( process.argv[2] ) == false ? process.argv[2] : process.env.PORT || 51165  // 5000
 
//--- --- --------  =  ------------------------------------------------- --- ---

      pApp.get( "/", ( req, res ) => {
          res.send(   "<h1>Welcome to FormR ...<h1>" );
          });
//    --- --------  =  ------------------------------------------------- ---

      pApp.use( "/" + aApp,  Express.static( `${__dirname}/build` ) );      

//    --- --------  =  ------------------------------------------------- ---

      pApp.listen( nPort, ( ) => {
                       console.log( `  Serving build/index.html at: http://localhost:${nPort}/${aApp}.` );
                       console.log( "    Press CTRL-C to stop serving app build.\n" )
          });
//    --- --------  =  ------------------------------------------------- ---
