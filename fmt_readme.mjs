
   import   README_JSON      from './README.json.mjs';
   import   util             from 'util'; var inspect = function(p) { console.log( util.inspect(p, { depth: 9 } ) ) } 
   import { writeFileSync }  from 'fs';   

// ------   ------------------- =  --------------------------------------------

      var  mProjs = README_JSON()

           saveReadMe( mProjs )

// ------  -------------------- =  --------------------------------------------

 function  saveReadMe( mProjs ) {

      var   aMarkdown = mProjs.map( fmtProj ).join( '\n' )  

            writeFileSync( 'README_v2.md', aMarkdown )
            }
//  -----   ------------------- =  ----------------------------------

 function  fmtProj( pProj ) {
   return  `# <u>${pProj.proj}</u>\n`
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
