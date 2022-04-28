   import { useEffect, useState } from "react";

//     var  aAPI_URL  = 'http://localhost:50115/api/invoices'
       var  aAPI_URL  =  process.env.REACT_APP_API_URL; 

//  ------------------------------------------------------------------

export function GetInvoices( ) {

      var [ Invoices, setInvoices ] = useState( [ ] )     // sets    pJSON      = setJSON( pJSON )

            useEffect( ( ) => { getInvoices( ) }, [ ] )   // calls   getJSON( ) { setJSON( pJSON ) }

 async function getInvoices() {
       var  pResponse =  await fetch( aAPI_URL )
       var  pJSON     =  await pResponse.json()
            setInvoices( pJSON )
            }
 
   return ( Invoices )                                    // returns pJSON
   };
//  ------------------------------------------------------------------
