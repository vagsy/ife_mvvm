import san from 'san';

// route

import {router} from 'san-router'

import App from './Component/App'

router.add({rule: '/', Component: App, target: '#app'});

// start
router.start()
