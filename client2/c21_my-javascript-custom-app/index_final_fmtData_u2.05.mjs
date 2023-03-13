/*
#*\
##=========+====================+================================================+
##RD    index_final_fmtData.mjs | My Javascript Custom App fmt UI Data script
##RFILE    +====================+=======+===============+======+=================+
##FD  index_..._u2.04_byRAM.mjs |   7881|  3/07/23 21:32|   142| u2.04-30307.2100
##FD  index_..._u2.04_byRAM.mjs |   8436|  3/08/23 14:11|   145| u2.04-30308.1400
##FD  index_..fmtData_u2.05.mjs |   6175|  3/12/23 16:56|   125| u2-05-30312.1600
##DESC     .--------------------+-------+---------------+------+-----------------+
#           This Javascript file, added to the first App in Client1 in FRApps is
#           used to create the first Client2 JavaScript App documented in FRDocs.
#           This script formats HTML according to data in ui.json files.
##LIC      .--------------------+----------------------------------------------+
#           Copyright (c) 2023 8020Data-formR * Released under
#           MIT License: http://www.opensource.org/licenses/mit-license.php
##SRCE     +====================+===============================================+
#*/                                                               // .(30306.02.4 Write Fmt UI Data script)
//  ------- --- --- ----------  =  -------------------------------------------------------------------- ---

            import { getDB, getUI, inspect } from './index_final_getData_u2.05.mjs'
            import { getCountries }          from './index_final_getData_u2.05.mjs'

       var  pUI                 = ( await getUI( ) );
//     var  pInvoices           = ( await getDB( 'invoices' ) );

       var  nRows               =  8
//     var  mCountries          = ( await getDB( 'countries' ) );
       var  mCountries          = ( await getCountries( 10 ) );
//          mCountries          =  mCountries.filter( ( pCountry, nRow ) => { return nRow < nRows } )

//    --------  --- ----------  =  --------------------------------------------------------

        if (typeof( document ) != 'object') {
//          console.log( "pHeader:",    inspect( pUI.header ) )
//          console.log( "pInvoices:",  inspect( pInvoices  ) )
            console.log( "mCountries:", inspect( mCountries ) )

            console.log( fmtSection2_Body(            pUI.sections[1], '' ) )
            console.log( fmtSection2a_CountriesTable( mCountries,      '' ) )
            }
//  ------- --- --- ----------  =  -------------------------------------------------------------------- ---

      function  fmtSection2_Body(  pBody, aDiv_IdName ) {
           if (!pBody)          {  return }

           var  aHTML           =  `
            <h2></h2>
            <p  class="Section2Paragraph">
                ${ pBody.Text.join("\n") }
            </p>`

           if (!aDiv_IdName) {     return aHTML }
//         ---  --- ----------  =  -----------------------------------------

           var  pDiv            =  document.getElementById( aDiv_IdName )
                pDiv.className  =  pBody.Class ? pBody.Class : ''
                pDiv.innerHTML  =  aHTML

                }  // eof fmtSection2_Body
//  --- --- --- --- ----------  =  -------------------------------------------------------------------- ---

      function  fmtSection2a_CountriesTable( mCountries, aDiv_IdName ) {
           if (!mCountries)     {  return }

           var  aHTML           =  fmtCountries( mCountries )

           if (!aDiv_IdName) {     return aHTML }
//         ---  --- ----------  =  -----------------------------------------

           var  pDiv            =  document.getElementById( aDiv_IdName )
                pDiv.innerHTML  =  aHTML

//    --------  --- ----------  =  --------------------------------------------------------

      function  fmtCountries(      mCountries ) {

           var  mHTML_Rows      =  mCountries.map( fmtCountry )
                mHTML_Rows.push ( `<tr class="lastRow" ><td colspan="5"></td></tr>` )

           var  aHTML = `
        <!-- COUNTRY DATA RENDERING-->
        <div class="countryList">
            <table class="CountryTable" cellspacing="0">
                <tbody>
                  <tr>
                    <th class="CountryCode-th">Code</th>
                    <th class="Country-th"    >Country</th>
                    <th class="Continent-th"  >Continent</th>
                    <th class="Area-th"       >Area (mi<sup>2</sup>)</th>
                    <th class="Population-th" >Population</th>
                  </tr>
                <tbody id="Countries">
                   ${ mHTML_Rows.join( "\n" ) }
                </tbody>
            </table>
        </div>
        <!-- END COUNTRY DATA RENDERING -->
        `
        return  aHTML

//      ------  --- ----------  =  ----------------------------------------

      function  fmtCountry( pCountry, i ) {
           var  aColor      =  i % 2 == 1 ? '#EFF8F8'  : '#DEEEF7'
           var  aID         = `id="R${ `${ i + 1 }`.padStart( 3, "0" )}"`
           var  aHTMLrow    = `
                  <tr ${aID} Class="${`eachRow ${aColor}`}">
                    <td bgColor="${aColor}" class="CountryCode-td"> ${ pCountry.Code }</td>
                    <td bgColor="${aColor}" class="Country-td"    > ${ pCountry.Name }</td>
                    <td bgColor="${aColor}" class="Continent-td"  > ${ pCountry.Continent }</td>
                    <td bgColor="${aColor}" class="Area-td"       > ${ pCountry.SurfaceArea }</td>
                    <td bgColor="${aColor}" class="Population-td" > ${ pCountry.Population }</td>
                  </tr> `
        return  aHTMLrow
            } // eof fmtCountry()
//      ------  --- ----------  =  ----------------------------------------
        } // eof fmtCountries()
//    --------  --- ----------  =  --------------------------------------------------------
    } // eof fmtSection2_CountryTable()
//  --- --- --- --- ----------  =  -------------------------------------------------------------------- ---

    export { fmtSection2_Body }
    export { fmtSection2a_CountriesTable }

// ----- ------  -------------  =  --------------------------------------------------------------------------
