import san from 'san';

// route

import {router} from 'san-router'

import Hello from './todo/Hello'

router.add({rule: '/', Component: Hello, target: '#app'});

// start
router.start()