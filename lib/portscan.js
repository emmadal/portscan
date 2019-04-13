const net = require('net')
const colors = require('colors')

exports.portscan = function(hote, rangeport) {
    console.log(`Starting Portscan 1.0.0 (https://github.com/emmadal/portscan)`)
    console.log(`Initiating Ping Scan...`)
    console.log(`Scanning ${hote} [${rangeport} ports]`)
    console.log('PORT\t\tSTATE')

    for (const i = 1; i < rangeport; i++) {
        const s = new net.Socket()

        s.connect(i, hote, () =>
            console.log(colors.rainbow(`${i}/tcp\t\tOpen`)),
        )

        //Handling all errors
        s.on('error', e => s.destroy())
    }
}
