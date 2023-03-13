input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    } else if (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
    }
})
