#!/usr/bin/env node

const libraryPortScan = require('../lib/index.js');
libraryPortScan(process.argv[3], process.argv[2])