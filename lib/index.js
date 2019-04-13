const net = require('net')

const portScan = function (rangeport, hote){
    console.log(`Starting Portscan 1.0.0 (https://github.com/emmadal/portscan)`)
    console.log(`Initiating Ping Scan...`)
    console.log(`Scanning ${hote} [${rangeport} ports]`)

    console.log('PORT' + '\t\tSTATE')
        for(let i = 1; i < rangeport; i++){   

            let s = new net.Socket()

            s.connect(i, hote, () =>{
                return console.log(`${i}/tcp` + '\t\tOpen')
            })
            
            //Handling all errors
            s.on('error', (e) =>{
                s.destroy()
            })
        }
}

exports.portScan = portScan