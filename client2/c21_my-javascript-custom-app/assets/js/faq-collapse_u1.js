       var  toggles = document.querySelectorAll( ".faq-toggle" )

            toggles.forEach( toggle_addEventListener )

// ---------------------------------------------------------------------

  function  toggle_addEventListener( togglesButton ) {
            togglesButton.addEventListener( "click", toggle_onClick )
            }
// ---------------------------------------------------------------------

  function  toggle_onClick( event ) {
       var  togglesButton = event.currentTarget;
            togglesButton.parentNode.classList.toggle( "active" )
            } 
// ---------------------------------------------------------------------
