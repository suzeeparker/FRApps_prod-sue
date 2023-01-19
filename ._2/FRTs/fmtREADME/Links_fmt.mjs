
   import { shoLinks, README_JSON, mLinks } from './README_fmt.mjs'

        var mProjs = README_JSON()

            mProjs[1].url = ''
            mProjs[2].url = ''

            shoLinks( mProjs, 4 )

            console.log( mLinks.join( '\n' ) )
