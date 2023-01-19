import { savIndex, README_JSON } from './README_fmt.mjs'

var mProjs = README_JSON()

    mProjs[1].url = ''
    mProjs[2].url = ''

    savIndex( mProjs, 2, 'index.html' )

