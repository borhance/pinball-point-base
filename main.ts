input.onButtonPressed(Button.A, function () {
    scores = 0
    live = 3
    basic.showNumber(0)
    basic.showString("START!")
})
let scores = 0
let live = 0
live = 0
scores = 0
basic.forever(function () {
    if (live == 0) {
        if (scores > 0) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showString("GAME OVER!")
                basic.showString("Score")
                basic.showNumber(scores)
            }
        }
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (live > 0) {
        basic.showNumber(scores)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        scores += 3
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        scores += -1
        live += -1
    }
})
