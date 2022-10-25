
// import   util             from 'util'; var inspect = function(p) { console.log( util.inspect(p, { depth: 9 } ) ) }
   import { writeFileSync }  from 'fs';

// ------   ------------------- =  --------------------------------------------
   import   README_JSON      from './README.json.mjs';

      var  mProjs =  README_JSON()
      var  nPrt   =  2
      var  aCmd   =  [ , 'ReadMe', 'Index', 'Apps', 'Links' ][ 4 ]


       if (aCmd == 'ReadMe') { saveReadMe( mProjs, nPrt, 'README.md'  ) }
       if (aCmd == 'Index' ) { saveIndex(  mProjs, nPrt, 'index.html' ) }
       if (aCmd == 'Apps'  ) { showApps(   mProjs, 1 ) }
       if (aCmd == 'Links' ) { showLinks(  mProjs, 1 ) }

// ------  -------------------- =  --------------------------------------------

 function  saveReadMe( mProjs, nPrt, aFile ) {

      var   aMarkdown = mProjs.map( fmtProj ).join( '\n' )

            prtOut( aFile, aMarkdown, nPrt )

//  -----   ------------------- =  ----------------------------------

 function  fmtProj( pProj ) {
   return  `# <u>${pProj.proj}</u>\n  `
        +  `<h2 style="font-size:24px; margin: -18px 0px 15px 12px;">(${pProj.name})</h2>\n`
        +   pProj.stages.map( fmtStage ).join( '\n  ' ) + '\n'
            }
//  -----   ------------------- =  ----------------------------------

 function  fmtStage( pStage ) {
   return  `<details><summary><b style="font-size:24px;">${pStage.stage}</b></summary>\n`
        +   pStage.apps.map(  fmtApp ).join( '\n  ' ) + '\n  '
        +  `</details>`
            }
//  -----   ------------------- =  ----------------------------------

 function  fmtApp( pApp ) {
   return  `- ### [${pApp.app}](${pApp.url})\n    `
        +  `${pApp.txt}\n`
            }
//  -----   ------------------- =  ----------------------------------
        }
// ------  -------------------- =  --------------------------------------------

 function  getTopBot( ) {

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

   return [ aTop, aBot ]
            }
//  -----   ------------------- =  ----------------------------------

 function   saveIndex( mProjs, nPrt, aFile ) {

      var [ aTop, aBot ] = getTopBot()

//    var   mProjs = mProjs.map( fmtProj )               inspect( mProjs )
      var   aProjs = mProjs.map( fmtProj ).join( '\n' )

      var   aHTML  =  aTop + aProjs + aBot;           // console.log( aHTML )

            prtOut( aFile, aHTML, nPrt )

//  -----   ------------------- =  ----------------------------------

 function   fmtProj( pProj ) {
   return  `<h1><u>${pProj.proj}</u></h1>\n`
        +  `<h2>(${pProj.name})</h2>\n`
        +   pProj.stages.map( fmtStage ).join( '\n  ' ) + '\n'
            }
//  -----   ------------------- =  ----------------------------------

 function   fmtStage( pStage ) {
   return  `<details><summary>${pStage.stage}</summary><ul>\n`
        +   pStage.apps.map(  fmtApp ).join( '\n    ' ) + '\n  '
        +  `</ul></details>`
            }
//  -----   ------------------- =  ----------------------------------

 function   fmtApp( pApp ) {
   return  `<li><h3><a href="${pApp.url}" target="_blank">${pApp.app}</a></h3>\n    `
        +  `<desc>${pApp.txt}</desc></li>\n`
            }
//  -----   ------------------- =  ----------------------------------
        }
// ------  -------------------- =  --------------------------------------------

 function   showApps( mProjs, nPrt, aFile ) {

      var   aList = mProjs.map( fmtProj  ).join( '\n' )

            prtOut( aFile, aList, nPrt )

//  -----   ------------------- =  ----------------------------------

 function   fmtProj( pProj ) {
   return   pProj.stages.map(   fmtStage ).filter( notMT ).join( '\n' )
            }
//  -----   ------------------- =  ----------------------------------

 function   fmtStage( pStage ) {
   return   pStage.apps.map(    fmtApp   ).filter( notMT ).join( '\n' )
            }
//  -----   ------------------- =  ----------------------------------

 function   fmtApp( pApp ) {
   return  `${pApp.url}`
            }
//  -----   ------------------- =  ----------------------------------
        }
// ------  -------------------- =  --------------------------------------------

 function   showLinks( mProjs ) {

      var   aHTML = `
                <!-- ------- --------------------------------------------------  ------------------ --------------- -->`

         + ` ${ mProjs.map( pProj => `
                <div class="title"><u><b>${ pProj.proj }</b></u></div>`

            + ` ${ pProj.stages.map( pStage =>

   `         ` + ` ${ pStage.apps.map( pApp =>
   `                  <li><a href="${ pProj.url + pApp.url }">${ pApp.app }</a></li>`
                      ).join( '\n' )
                      } `
                   ).join( '\n' )
                   } `
               ).join( '\n' )
               } `

            prtOut( '', aHTML, 1 )
            }
//  -----   ------------------- =  ----------------------------------

 function   showLinks2( mProjs ) {

      var   aHTML = `
                <!-- ------- --------------------------------------------------  ------------------ --------------- -->`

         + ` ${ mProjs.map( pProj => `
                <div class="title"><u><b>${ pProj.proj }</b></u></div>`

            + ` ${ pProj.stages.map( pStage => `
                  <div class="subtitle">${ pStage.stage }</div>
 `
               + ` ${ pStage.apps.map( pApp =>
 `                    <li><a href="${ pProj.url + pApp.url }">${ pApp.app }</a></li>`
                      ).join( '\n' )
                      } `
                   ).join( '\n' )
                   } `
               ).join( '\n' )
               } `

            prtOut( '', aHTML, 1 )
            }
//  -----   ------------------- =  ----------------------------------

 function   showLinks3( mProjs ) {

      var   aHTML = `
                <!-- ------- --------------------------------------------------  ------------------ --------------- -->`

         + ` ${ mProjs.map( pProj => `
                <div class="title"><u><b>${ pProj.proj }</b></u></div>`

            + ` ${ pProj.stages.map( pStage =>
`                  <div class="subtitle">${ pStage.stage }</div>`

               + ` ${ pStage.apps.map( pApp =>
 `                    <li><a href="${ pProj.url + pApp.url }">${ pApp.app }</a></li>`
                      ).join( '\n' )
                      } `
                   ).join( '\n' )
                   } `
               ).join( '\n' )
               } `

            prtOut( '', aHTML, 1 )
            }
// ------  -------------------- =  --------------------------------------------

 function   notMT( aRow ) {
   return   aRow != ""
            }

 function   prtOut( aFile, aText, nPrt ) {

        if (nPrt == 2 || nPrt == 3) {
            writeFileSync( aFile, aText )
            }
        if (nPrt == 1 || nPrt == 3) {
            console.log( aText )
         }  }
// ------  -------------------- =  --------------------------------------------



