#!/usr/bin/env node

let PortScan = require('../lib/portscan.js');
PortScan.portscan(...process.argv.splice(2)) //delete the first two elements in the arrays