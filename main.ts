if (input.buttonIsPressed(Button.A)) {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playMelody("C D E F G A B C5 ", 120)
} else {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("C5 B A G F E D C ", 120)
}
