input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    for (let index = 0; index < 1; index++) {
        music.playMelody("E D G F B A C5 B ", 120)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playMelody("G A F G E E D C ", 200)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
