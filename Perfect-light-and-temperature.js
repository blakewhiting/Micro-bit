let temp = 0
let light = 0
let direction = 0
input.onButtonPressed(Button.AB, () => {
    basic.showString("LIGHT=")
    light = input.lightLevel()
    basic.showNumber(light)
    basic.showString(" TEMP=")
    temp = input.temperature()
    basic.showNumber(temp)
})
input.onButtonPressed(Button.A, () => {
    direction = input.compassHeading()
    basic.showNumber(direction)
    if (direction < 135 && direction > 45) {
        basic.showString("E")
    } else if (direction < 225 && direction > 135) {
        basic.showString("S")
    } else if (direction < 315 && direction > 225) {
        basic.showString("W")
    } else if (direction < 45 || direction > 315) {
        basic.showString("N")
    }
})
if (light >= 200 && light <= 255 && (temp >= 20 && temp <= 30)) {
    music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
} else {
    music.ringTone(349)
}
basic.forever(() => {
	
})
