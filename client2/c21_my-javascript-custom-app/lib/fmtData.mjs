/*
#*\
##=========+====================+================================================+
##RD    index_final_fmtData.mjs | My Javascript Custom App fmt UI Data script
##RFILE    +====================+=======+===============+======+=================+
##FD  index_..._u2.04_byRAM.mjs |   7881|  3/07/23 21:32|   142| u2.04-30307.2100
##FD  index_..._u2.04_byRAM.mjs |   8436|  3/08/23 14:11|   145| u2.04-30308.1400
##DESC     .--------------------+-------+---------------+------+-----------------+
#           This Javascript file, added to the first App in Client1 in FRApps is
#           used to create the first Client2 JavaScript App documented in FRDocs.
#           This script formats HTML according to data in ui.json files.
##LIC      .--------------------+----------------------------------------------+
#           Copyright (c) 2023 8020Data-formR * Released under
#           MIT License: http://www.opensource.org/licenses/mit-license.php
##SRCE     +====================+===============================================+
#*/                                                                                  // .(30306.02.4 Write Fmt UI Data script)
//     --------  -------------  =  -------------------------------------------------------------------- ---

            var  mMenu_Side     =  await    getMenu_Side( )
//          var  pMenu_Side     =  document.getElementById( "MenuSide" )
//               pMenu_Side.innerHTML    =  fmtMenu_Side(   mMenu_Side )
                                            fmtMenu_Side(   mMenu_Side, "MenuSide" )

//     --------  -------------  =  --------------------------------------------------------------------

       function  fmtMenu_Side( mMenu_List, aDiv_IdName ) {

            var  mHTML_Items    =  mMenu_List.map( fmtMenu_Item )
      /*    var  mHTML_Items    =`
                 <li class="MenuListItem"     id="H-PHLink"    ><a href="#"  >Home</a></li>
                 <li class="MenuListItemLine" id="PHLinkLine"  ><hr></li>
                 <li class="MenuListItem"     id="H-PHLinkCTA" ><a href="#"  >H-PH_CTA</a></li>
                 <li class="MenuListItem"     id="H-PHLink"    ><a href="#"  >H-PH_Link1</a></li>
                 <li class="MenuListItem"     id="H-PHLink"    ><a href="#"  >H-PH_Link2</a></li>
                 <li class="MenuListItem"     id="H-PHLink"    ><a href="#"  >H-PH_Link3</a></li>
                 <li class="MenuListItemLine" id="PHLinkLine"  ><hr></li>
                 <li class="MenuListItem"     id="F-PHLink"    ><a href="#"  >F-PH_Link1</a></li>
                 <li class="MenuListItem"     id="F-PHLink"    ><a href="#"  >F-PH_Link2</a></li>
                 <li class="MenuListItemLine" id="PHLinkLine"  ><hr></li>
                 `
       */   var  pDiv  =  document.getElementById( aDiv_IdName )
                 pDiv.innerHTML =  mHTML_Items.join( "\n" )
                 pDiv.style.cssText  =  fmtCSS( { "background-color" : "white", width: '200px' } )  // .(30308.03.1 RAM Added)

//     --------  -------------  =  --------------------------------------------------------------------

       function  fmtMenu_Item( pItem ) {

             if (pItem.URL) {
         return `<li class="${pItem.Class}" id="${pItem.Id}"><a href="${pItem.URL}">${pItem.Text}</a></li>`
             } else {
         return `<li class="${pItem.Class}" id="${pItem.Id}"><hr></li>`             // No URL for <hr>
                 }
              }  // eof fmtMenu_Item
//        -----  -------------  =  ----------------------------------------
              }  // eof fmtMenu_Side
//     --------  -------------  =  -------------------------------------------------
                                                                                    // .(30306.02.4 End)

                                                                                    // .(30306.02.5 Add fmtHeader functions)
//     --------  -------------  =  --------------------------------------------------------------------

            var  pHeader        =  await    getHeader( )

                                            fmtMenu_Top(     pHeader.menus.top,  "HeaderMenuTop" )
                                            fmtHeader_Logo(  pHeader.menus.logo, "HeaderLogo"    )

//     --------  -------------  =  -------------------------------------------------

       function  fmtMenu_Top(  mMenu_List, aDiv_IdName ) {

            var  mHTML_Items    =  mMenu_List.map( fmtMenu_Item )
      /*    var  mHTMLrows    =`
                 <li class="HeaderNavListItem"   ><a href=#>PH_Link1</a></li>
                 <li class="HeaderNavListItem"   ><a href=#>PH_Link2</a></li>
                 <li class="HeaderNavListItem"   ><a href=#>PH_Link3</a></li>
                 <li class="HeaderNavListItemCTA"><a href=#>PH_CTA</a></li>
                 `
       */   var  pDiv           =  document.getElementById( aDiv_IdName )
                 pDiv.innerHTML =  mHTML_Items.join( "\n" )

//        -----  -------------  =  ---------------------------------------

       function  fmtMenu_Item( pItem ) {

         return `<li class="${pItem.Class}"><a href="${pItem.URL}">${pItem.Text}</a></li>`
              }  // eof fmtMenu_Item
//        -----  -------------  =  ---------------------------------------
              }  // eof fmtMenu_Top
//     --------  -------------  =  -------------------------------------------------

       function  fmtHeader_Logo( pLogo, aDiv_IdName ) {

            var  pDiv = document.getElementById( aDiv_IdName )
                 pDiv.className =  pLogo.Class ? pLogo.Class : ''
                 pLogo.Text     =  pLogo.Text  ? pLogo.Text  : ''
             if (pLogo.Style) {
                 pDiv.style.cssText  =  fmtCSS( pLogo.Style )
                 }
                 pDiv.innerHTML =  pLogo.URL ? `<a href="${pLogo.URL}">${pLogo.Text}</a>` : ``
              }  // eof fmtHeaderLogo
//     --------  -------------  =  -------------------------------------------------

            var  mSections      =  await    getSections( )
                 fmtSection1_Body( mSections[0], "Section1_Body" )
                 fmtSection2_Body( mSections[1], "Section2_Body" )

//     --------  -------------  =  -------------------------------------------------

       function  fmtSection1_Body( pBody, aDiv_IdName ) {
            if (!pBody) { return }
            var  pDiv = document.getElementById( aDiv_IdName )
                 pBody.Text     =  pBody.Text  ? pBody.Text  : ''
             if (pBody.Style) {
                 pDiv.style.cssText  =  fmtCSS( pBody.Style )
                 }
                 pDiv.innerHTML = `<h2 class="${pBody.Class}">${pBody.Text}</a>`
              }  // eof fmtSection1_Body
//     --------  -------------  =  -------------------------------------------------

       function  fmtSection2_Body( pBody, aDiv_IdName ) {
            if (!pBody) { return }
            var  pDiv = document.getElementById( aDiv_IdName )
                 pDiv.className = pBody.Class ? pBody.Class : ''
                 pDiv.innerHTML = pBody.Text.join("\n")
              }  // eof fmtSection2_Body
//     --------  -------------  =  -------------------------------------------------

                 fmtFooter( await  getFooter(), "FooterNavList" )

//     --------  -------------  =  -------------------------------------------------

       function  fmtFooter( pFooter, aDiv_IdName ) {
            var  pDiv = document.getElementById( aDiv_IdName )
                 pDiv.innerHTML = pFooter.items.map( pItem => {
         return `<li class="${pItem.Class}"><a href="${pItem.URL}">${pItem.Text}</a></li>`
                 } )
              }  // eof fmtFooter
//     --------  -------------  =  -------------------------------------------------

       function  fmtCSS( pStyle ) {
//       return  JSON.stringify( pLogo.Style ).replace( /,/g, ";" ).replace( /[{}]/, "")
         return  Object.keys( pStyle ).map( aKey => `${ aKey }: ${ pStyle[aKey] }` ).join( "; " ) + ";"
              }  // eof fmtCSS
//     --------  -------------  =  -------------------------------------------------
//     --------  -------------  =  -------------------------------------------------------------------- ---
                                                                                    // .(30306.02.5 End)
