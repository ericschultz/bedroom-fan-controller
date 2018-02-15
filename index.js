const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://eric-old-laptop')
const gpio = require('onoff').Gpio
const fanOnOff = new Gpio(1, 'out')
const availability_topic = 'bedroom_fan/presence'
const command_topic = 'bedroom_fan/on/set'

client.on('connect', function () {
    client.subscribe(command_topic)
})

client.on('message', function (topic, message) {
    console.log(`${topic}: ${message}`)

    if (message == 'ON'){
        fanOnOff.writeSync(1)
    }

    if (message == 'OFF'){
        fanOnOff.writeSync(2)
    }

  })