/*\
##=========+====================+================================================+
##RD    index_final_fmtData.mjs | My Javascript Custom App fmt UI Data script
##RFILE    +====================+=======+===============+======+=================+
##FD  index_..._u2.04_byRAM.mjs |   7881|  3/07/23 21:32|   142| u2.04-30306.2100
##DESC     .--------------------+-------+---------------+------+-----------------+
#           This Javascript file, added to the first FRApps in FRDocs, is
#           used to create the JavaScript apps documented in FRDocs.
##LIC      .--------------------+----------------------------------------------+
#           Copyright (c) 2023 8020Data-FormR * Released under
#           MIT License: http://www.opensource.org/licenses/mit-license.php
##SRCE     +====================+===============================================+
\*/
//     --------  -------------  =  -------------------------------------------------------------------- ---
                                                                                    // .(30306.01.3 Add fmtMenuList2 script)
            var  mMenu_Side     =  await    getMenu_Side( )
            var  pMenu_Side     =  document.getElementById( "MenuSide" )
                 pMenu_Side.innerHTML    =  fmtMenu_Side(   mMenu_Side )

//     --------  -------------  =  --------------------------------------------------------------------

       function  fmtMenu_Side( mMenu_List ) {

            var  mHTML_Items    =  mMenu_List.map( fmtMenu_Item )
    /*      var  mHTML_Items    =`
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
     */  return  mHTML_Items.join( "\n" )

//     --------  -------------  =  --------------------------------------------------------------------

       function  fmtMenu_Item( pItem ) {

             if (pItem.URL) {
         return `<li class="${pItem.Class}" id="${pItem.Id}"><a href="${pItem.URL}">${pItem.Text}</a></li>`
             } else {
         return `<li class="${pItem.Class}" id="${pItem.Id}"><hr></li>`
                 }
              }  // eof fmtMenu_Item
//        -----  -------------  =  ----------------------------------------
              }  // eof fmtMenu_Side
//     --------  -------------  =  -------------------------------------------------
                                                                                    // .(30306.01.3 End)

                                                                                    // .(30306.01.6 Add fmtMenu1_List script)
//     --------  -------------  =  --------------------------------------------------------------------

            var  pHeader        =  await    getHeader( )
                                            fmtHeader_Logo(  pHeader.menus.logo, "HeaderLogo"    )

            var  pMenu1_List    =  document.getElementById(                      "HeaderNavList" )
                 pMenu1_List.innerHTML   =  fmtMenu1_List(   pHeader.menus.top )

//     --------  -------------  =  -------------------------------------------------

       function  fmtMenu1_List(  mMenuList ) {

            var  mHTML_Items    =  mMenuList.map( fmtMenu_Item )
      /*    var  mHTMLrows    =`
                 <li class="HeaderNavListItem"   ><a href=#>PH_Link1</a></li>
                 <li class="HeaderNavListItem"   ><a href=#>PH_Link2</a></li>
                 <li class="HeaderNavListItem"   ><a href=#>PH_Link3</a></li>
                 <li class="HeaderNavListItemCTA"><a href=#>PH_CTA</a></li>
                 `
      */ return  mHTML_Items.join( "\n" )

//        -----  -------------  =  ---------------------------------------

       function  fmtMenu_Item( pItem ) {

         return `<li class="${pItem.Class}"><a href="${pItem.URL}">${pItem.Text}</a></li>`
              }  // eof fmtMenu_Item
//        -----  -------------  =  ---------------------------------------
              }  // eof fmtMenu1_List
//     --------  -------------  =  -------------------------------------------------

       function  fmtHeader_Logo( pLogo, aDiv ) {

            var  pDiv = document.getElementById( aDiv )
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

       function  fmtSection1_Body( pBody, aDiv ) {
            if (!pBody) { return }
            var  pDiv = document.getElementById( aDiv )
                 pBody.Text     =  pBody.Text  ? pBody.Text  : ''
             if (pBody.Style) {
                 pDiv.style.cssText  =  fmtCSS( pBody.Style )
                 }
                 pDiv.innerHTML = `<h2 class="${pBody.Class}">${pBody.Text}</a>`
              }  // eof fmtSection1_Body
//     --------  -------------  =  -------------------------------------------------

       function  fmtSection2_Body( pBody, aDiv ) {
            if (!pBody) { return }
            var  pDiv = document.getElementById( aDiv )
                 pDiv.className = pBody.Class ? pBody.Class : ''
                 pDiv.innerHTML = pBody.Text.join("\n")
              }  // eof fmtSection2_Body
//     --------  -------------  =  -------------------------------------------------

                 fmtFooter( await  getFooter(), "FooterNavList" )

//     --------  -------------  =  -------------------------------------------------

       function  fmtFooter( pFooter, aDiv ) {
            var  pDiv = document.getElementById( aDiv )
                 pDiv.innerHTML = pFooter.items.map( pItem => {
         return `<li class="${pItem.Class}"><a href="${pItem.URL}">${pItem.Text}</a></li>`
                 } )
              }  // eof fmtFooter
//     --------  -------------  =  -------------------------------------------------

       function  fmtCSS( pStyle ) {
//       return  JSON.stringify( pLogo.Style ).replace( /,/g, ";" ).replace( /[{}]/, "")
         return  Object.keys( pStyle ).map( aKey => `${ aKey }: ${ pStyle[aKey] }` ).join( "; " )
              }  // eof fmtCSS
//     --------  -------------  =  -------------------------------------------------
//     --------  -------------  =  -------------------------------------------------------------------- ---
                                                                                    // .(30306.01.6 End)

