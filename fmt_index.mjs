
   import   README_JSON      from './README.json.mjs';
   import   util             from 'util'; var inspect = function(p) { console.log( util.inspect(p, { depth: 9 } ) ) } 
   import { writeFileSync }  from 'fs';   

// ------   ------------------- =  --------------------------------------------

      var  mProjs               =  README_JSON()
//         inspect( README_JSON() )

      var  aTop                 = 
`<html>
  <head>
    <style>
     :root { --color: #084074; }  /* #084074; #DEE6ED; */
      main { margin-left: 20px; padding: 0px 0px 40px 40px; border: 2px solid var(--color); width: 600px;}
      h1   {                    font-size: 42px; color: var(--color); margin-bottom: 5px; } 
      h2   { margin-top: -10px; font-size: 36px; color: var(--color); margin-bottom: 5px; margin-left: 20px; } 
      details > summary {       font-size: 28px; color: var(--color); font-weight:  bold; }
      h3   { margin-top:  10px; margin-block-start: -10px; margin-block-end: -1px; } 
/*    desc { margin-top: -15px; margin-block-start:   0px; margin-bottom:    20px; }  */
      li   { margin-bottom: 15px; }
    </style>  
  </head>
  <body>
    <main>\n`

      var  aBot                 = 
`    
    </main>
  </body>
</html>\n`

           saveIndex( aTop, mProjs, aBot )

// ------  -------------------- =  --------------------------------------------

 function  saveIndex( aTop, mProjs, aBot ) {

//    var   mProjs = mProjs.map( fmtProj )               inspect( mProjs )  
      var   aProjs = mProjs.map( fmtProj ).join( '\n' )  
          
      var   aHTML  =  aTop + aProjs + aBot;           // console.log( aHTML ) 

            writeFileSync( 'index_v2.html', aHTML )
            }
//  -----   ------------------- =  ----------------------------------

 function  fmtProj( pProj ) {
   return  `<h1><u>${pProj.proj}</u></h1>\n`
        +  `<h2>(${pProj.name})</h2>\n`
        +   pProj.stages.map( fmtStage ).join( '\n  ' ) + '\n'
            }
//  -----   ------------------- =  ----------------------------------

 function  fmtStage( pStage ) {
   return  `<details><summary>${pStage.stage}</summary><ul>\n`
        +   pStage.apps.map(  fmtApp ).join( '\n    ' ) + '\n  '
        +  `</ul></details>`
            }
//  -----   ------------------- =  ----------------------------------

 function  fmtApp( pApp ) {
   return  `<li><h3><a href="${pApp.url}" target="_blank">${pApp.app}</a></h3>\n    `
        +  `<desc>${pApp.txt}</desc></li>\n`        
            }
//  -----   ------------------- =  ----------------------------------
