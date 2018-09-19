let temp = 0
let min = 0
let hours = 0
let light = 0
let time = ""
let adjust = 0
let direction = 0
let ampm = false
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
input.onPinPressed(TouchPin.P0, () => {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onPinPressed(TouchPin.P1, () => {
    if (min < 59) {
        min += 1
    } else {
        min = 0
    }
})
input.onPinPressed(TouchPin.P2, () => {
    ampm = !(ampm)
})
input.onGesture(Gesture.Shake, () => {
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else {
            if (hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + min / 10
    time = "" + time + min % 10
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
ampm = false
time = ""
adjust = 0
min = 0
hours = 0
if (light >= 200 && light <= 255 && (temp >= 20 && temp <= 30)) {
    music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
} else {
    music.ringTone(349)
}
basic.forever(() => {
    basic.pause(60000)
    if (min < 59) {
        min += 1
    } else {
        min = 0
    }
})
basic.forever(() => {
    basic.pause(60000)
    if (min < 59) {
        min += 1
    } else {
        min = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
