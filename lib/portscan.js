const net = require("net")

exports.portscan = function(hote, rangeport) {
  console.log(`Starting Portscan 1.0.1 (https://github.com/emmadal/portscan)`)
  console.log(`Starting Time ⏰ : ${new Date()}`)
  console.log(`Scanning ${hote} [${rangeport} ports]`)
  console.log("PORT\t\tSTATE\t\tACTION")

  for (const i = 1; i < rangeport; i++) {
    const s = new net.Socket()

    s.connect(i, hote, () =>
      console.log(colors.rainbow(`${i}/tcp\t\tOpen\t\t✔️`))
    )

    //Handling all errors
    s.on("error", e => s.destroy())
  }
}

exports.help = function() {
  console.log("Please specify a host and number of ports to scan")
  console.log(
    "\t" + colors.blue("portscan") + colors.green("[hote] [port]") + "\n"
  )

  console, log("For example:")
  console.log(
    "\t" +
      "ip address ➡️ " +
      colors.blue("portscan") +
      colors.green("[@ip] [port]")
  )
  console.log(
    "\t" +
      "url host ➡️ " +
      colors.blue("portscan") +
      colors.green("[url] [port]") +
      "\n"
  )

  console.log(
    "⚠️ Note that the number of port given is the number of port to scan: 2000 ports = 2000 ports to scan\n"
  )

  console.log("To see the Contributors, run this command:")
  console.log("\t" + colors.blue("portscan") + colors.green("--contributors"))
}
