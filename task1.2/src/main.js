import san from 'san';

// route
import Hello from './todo/Hello'

import {router} from 'san-router'


router.add({rule: '/', Component: Hello, target: '#app'});

// start
router.start()
