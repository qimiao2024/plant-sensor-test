input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
let s_moisture = 0
let a_humidity = 0
let a_temp = 0
let w_temp = 0
let w_level = 0
basic.showString("Plant Station")
let problem = false
basic.forever(function () {
    PlanetX_Display.showUserText(8, ". . .")
    basic.pause(200)
    PlanetX_Display.showUserText(8, " . .")
    basic.pause(200)
})
basic.forever(function () {
    w_level = Math.round(PlanetX_Basic.waterLevel(PlanetX_Basic.AnalogRJPin.J1))
    PlanetX_Display.showUserText(2, "Water level: " + w_level)
    basic.pause(10000)
    w_temp = Math.round(PlanetX_Basic.Ds18b20Temp(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.ValType.DS18B20_temperature_C))
    PlanetX_Display.showUserText(3, "Water temp: " + w_temp)
    basic.pause(10000)
    a_temp = Math.round(PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.DHT11_state.DHT11_temperature_C))
    PlanetX_Display.showUserText(4, "Air temp: " + a_temp)
    basic.pause(10000)
    a_humidity = Math.round(PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.DHT11_state.DHT11_humidity))
    PlanetX_Display.showUserText(5, "Air humidity: " + a_humidity)
    basic.pause(10000)
    s_moisture = Math.round(PlanetX_Basic.soilHumidity(PlanetX_Basic.AnalogRJPin.J2))
    PlanetX_Display.showUserText(6, "Soil moist.: " + s_moisture)
    basic.pause(10000)
    PlanetX_Display.oledClear()
})
