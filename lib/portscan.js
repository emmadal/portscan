const net = require('net')
const colors = require('colors')

exports.portscan = function(hote, rangeport) {
    console.log(`Starting Portscan 1.0.1 (https://github.com/emmadal/portscan)`)
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

exports.help = function() {
  console.log(`Please specify a host and number of ports to scan
        ${colors.blue(`portscan`)} ${colors.green(`[hote] [port]`)}\n
    `)
  console.log(`For example:
        ip address ➡️ ${colors.blue(`portscan`)} ${colors.green(
    `[hote] [port]`
  )}
        url host ➡️ ${colors.blue(`portscan`)} ${colors.green(
    `[website-url] [port]`
  )}\n
        ⚠️ Note that the number of port given is the number of port to scan: 2000 ports = 2000 ports to scan\n
    `)
  console.log(`To see the Contributors, run this command:
        ${colors.blue(`portscan`)} ${colors.green(`--contributors`)}
    `)
}