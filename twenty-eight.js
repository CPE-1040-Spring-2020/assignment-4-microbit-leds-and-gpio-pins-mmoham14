led.enable(true)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)

function saver3() {
    basic.showLeds
        (`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)

    //

    basic.showLeds
        (`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . # . # .
    `)

    //

    basic.showLeds
        (`
    . . . . .
    . . . . .
    . . # . .
    . # . # .
    # # # # #
    `)

    //

    basic.showLeds
        (`
    . . . . .
    . . # . .
    . # . # .
    # # # # #
    . # . # .
    `)

    //

    basic.showLeds
        (`
    . . # . .
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    `)



    basic.showLeds
        (`
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    . . . . .
    `)

    //

    basic.showLeds
        (`
    # # # # #
    . # . # .
    . # . # .
    . . . . .
    # . . # .
    `)

    //

    basic.showLeds
        (`
    . # . # .
    . # . # .
    . . . . .
    . # . # .
    . # . . #
    `)

    basic.clearScreen()

    basic.showLeds
        (`
    . # . # .
    . . . . .
    # . . # .
    . # # . .
    # . . # #
    `)

    basic.clearScreen()

    basic.showLeds
        (`
    . . . . .
    # . # . .
    . # . # .
    . . # . .
    # . . . #
    `)
    basic.clearScreen()
    basic.pause(1000)
}

basic.forever(function () {
    saver3()
    //basic.showString("Working")

    for (let index = 1020; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index)
            }
            else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 1023))
            }
        }

        else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            }

            else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        }

        else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index)
        }
        else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P16, index - 2048)
        }
        else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        control.waitMicros(1000)
    }
})
