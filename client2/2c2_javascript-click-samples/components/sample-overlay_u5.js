
    import {LitElement, css, html} from 'lit';

/*----- Class: LitClick5 --------------------------------------- */

    class LitOverlay5 extends LitElement {

      static styles = css`

        a:visited {
            color       : black
            }
        .DivResponse {
            display     : inline-block;
            color       : red;
            }
        `;

/*----- Properties --------------------------------------- */

 static properties = {
        bClicked: false,
        };

/*----- Init Local Variables ----------------------------- */

    constructor() {
        super();
        this.bClicked = false;
        }

/*----- Local Functions ---------------------------------- */

      aVar = "my var"
      shoResponse( ) {
        return this.bClicked ? " ... clicked" : ""
        }

      onOverlay5( e ) {
        this.bClicked = true
        alert( e.target.text ); 
        e.preventDefault();   // prevent <a href="" from refreshing the page
        }

/*----- Render ------------------------------------------- */

      render( ) {

        return html`
           <a href="" @click="${ this.onOverlay5 }">Lit-Overlay5</a>
<!--       <div id="Div5" class="DivResponse">${ this.bClicked ? " ... clicked" : "" }</div><br> -->
           <div id="Div5" class="DivResponse">${ this.shoResponse() }</div><br>
           `;

        } // eof render
/*  --- ---------------------------------------------- */
    } // eoc LitClick5
/*-------------------------------------------------------------- */

    customElements.define( 'lit-overlay5', LitOverlay5 );
