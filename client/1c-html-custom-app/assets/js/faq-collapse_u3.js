
// -------- ------------------------------------------------------------ 

        var mFAQ_Items = 
            [ { Id:    "1", Srt: "S01"
              , Title: "Why shouldn't we trust atoms?"
              , Text:  "They make up everything."
                }
            , { Id:    "2", Srt: "S02"
              , Title: "What's the object-oriented way to become wealthy?"
              , Text:  "Inheritance."
                }
            , { Id:    "3", Srt: "S03"
              , Title: "What do you call someone with no body and no nose?"
              , Text:  "Nobody knows."
                }
            , { Id:    "4", Srt: "S04"
              , Title: "How many tickles does it take to tickle an octopus?"
              , Text:  "Ten-tickles!"
                }
            , { Id:    "5", Srt: "S05"
              , Title: "What is: 1 + 1?"
              , Text:  "Depends on who are you asking."
                }
              ]
// -------- --------------------------------------------------- 
// -------- ------------------------------------------------------------ 

        var pFAQ_Root = getDOM_Elements( "#faq-root", 1 )
            pFAQ_Root.innerHTML = FAQ_Root_render(  mFAQ_Items )  
  
// ------- ------------------------------------------------------------ 

   function  FAQ_Root_render() { 

        var aHTML = `  
    <div class="faq-container">

      ${ mFAQ_Items.sort( )
                   .map( FAQ_Item_render ) }
      
    </div> `
//          console.log( aHTML )
     return aHTML
            }
// -------- --------------------------------------------------- 

   function  FAQ_Item_render( pFAQ_Item ) { 

        var aHTML = `
      <div class="faq">
        <h3 class="faq-title">
          ${ pFAQ_Item.Title }
        </h3>
        <p class="faq-text">
          ${ pFAQ_Item.Text }
        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div> `
//          console.log( aHTML )
     return aHTML
            }
// -------- --------------------------------------------------- 
// -------- ------------------------------------------------------------ 

   function getDOM_Elements( aSelector, bOne ) { 
        var bDOM = typeof( document) != 'undefined'
        var mElements = bDOM ? document.querySelectorAll( aSelector )
                             : [ { innerHTML: '', addEventListener: function( ){ } } ]       
     return bOne ? mElements[0] : mElements
            }
// -------- --------------------------------------------------- 
//--------- ------------------------------------------------------------ 
