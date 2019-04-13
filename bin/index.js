#!/usr/bin/env node

const { portscan } = require('../lib/portscan.js')

//delete the first two elements in the arrays
portscan(...process.argv.slice(2))
