   import { html, css, LitElement} from 'lit';

/*----- Events ------------------------------------------- */

      const enterEvents = [ 'click' ];                            // was: [ 'pointerleave', 'focus' ]
      const leaveEvents = [ 'pointerleave', 'blur', 'keydown' ];  // removed: 'click'

/*----- Class ----- SimpleTooltip -------------------------------------------- */

export class SimpleTooltip extends LitElement {

/*----- CSS ---------------------------------------------- */

  static styles = css`

    :host {
        display         :  inline-block;
        position        :  fixed;
        padding         :  4px;
        border          :  1px solid darkgray;
        border-radius   :  4px;
        background      : #ccc;
        pointer-events  :  none;
        }
    `;

/*----- Properties --------------------------------------- */

 static properties = {
        };

/*----- Init Local Variables ----------------------------- */

    constructor() {
        super()
        this.offset     =  4;                               // Position offset below target 

        } // eof constructor 

/*----- Callbacks----------------------------------------- */

    connectedCallback() {

        super.connectedCallback();
        this.hide();

        this.target ??= this.previousElementSibling; // Setup target if needed
//      console.log( "callback sibling:", this.target.innerHTML )
        console.log( "Tooltip connected to sibling:", this.target.className )
        console.log( "" )

        } // eof connectedCallback

/*----- Methods ------------------------------------------ */

    show = () => {

        console.log( "Showing tooltip for ", this.className )
        this.style.cssText = '';

const { x, y, height }  =  this.target.getBoundingClientRect();     // Position the tooltip near the target.
            this.style.left = `${x}px`;
            this.style.top  = `${y + height + this.offset}px`;
        };
/*  --- ---------------------------------------------- */

    hide = () => {
        console.log( "Hiding tooltip for ", this.className )

//      console.log( "hide sibling:", this.innerHTML )
        this.style.display = 'none';
        };
/*  --- ---------------------------------------------- */

/*----- Local functions ----------------------------------- */

       _target               = null;    // Target for which to show tooltip

/*  --- ---------------------------------------------- */

    get target() {

 return this._target;
        }
/*  --- ---------------------------------------------- */

    set target( target ) {             

    if (this.target) {                 // Remove events from existing target

//      enterEvents.forEach( ( name ) => this.target.removeEventListener(  name, this.show ) );
//      leaveEvents.forEach( ( name ) => this.target.removeEventListener(  name, this.hide ) );
        enterEvents.forEach( ( name ) => this.removeEvent(  this.target,   name, this.show ) );
        leaveEvents.forEach( ( name ) => this.removeEvent(  this.target,   name, this.show ) );
        }
    if (target) {                       // Add events to new target

//      enterEvents.forEach( ( name ) =>      target.addEventListener(     name, this.show ) );
//      leaveEvents.forEach( ( name ) =>      target.addEventListener(     name, this.hide ) );
        enterEvents.forEach( ( name ) => this.addEvent(          target,   name, this.show ) );
        leaveEvents.forEach( ( name ) => this.addEvent(          target,   name, this.show ) );
        }
        this._target = target;

        } // eof set target
/*  --- ---------------------------------------------- */

        addEvent( pTarget, aEvent, xHandler ) {
            console.log( `Adding event '${ aEvent }' to ${ pTarget.className }`)
            pTarget.addEventListener(  aEvent, xHandler ) 
            }
/*  --- ---------------------------------------------- */

        removeEvent( aTarget, aEvent, xHandler ) {
            console.log( `Removing event '${ aEvent }' from ${ pTarget.className }`)
            pTarget.removeEventListener(  aEvent, xHandler ) 
            }
/*  --- ---------------------------------------------- */

/*----- Render ------------------------------------------- */

    render() {

return  html`<slot></slot>`;

        } // eof render
/*  --- ---------------------------------------------- */
    } // eoc SimpleTooltip 
/*---------------------------------------------------------------------------- */

    customElements.define( 'simple-tooltip', SimpleTooltip );


