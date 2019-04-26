#!/usr/bin/env node

const { portscan, help } = require('../lib/portscan.js')

//delete the first two elements in the arrays and verify the arguments passed
process.argv.slice(2).length == 2 ? portscan(...process.argv.slice(2)) : help()
