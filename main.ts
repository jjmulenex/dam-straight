input.onButtonPressed(Button.A, function () {
    pixel_array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.White))
    pixel_array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.White))
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    pixel_array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    pixel_array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
let pixel_array: neopixel.Strip = null
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
