function gMoveY () {
    if (input.acceleration(Dimension.Y) > 0) {
        if (y < 4) {
            saveOldPosition()
            y += 1
        }
    } else {
        if (y > 0) {
            saveOldPosition()
            y += -1
        }
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function showPixel () {
    led.unplot(ox, oy)
    led.plot(x, y)
    if (x == tx && y == ty) {
        found = 1
    }
}
function gMoveX () {
    if (input.acceleration(Dimension.X) > 0) {
        if (x < 4) {
            saveOldPosition()
            x += 1
        }
    } else {
        if (x > 0) {
            saveOldPosition()
            x += -1
        }
    }
}
function saveOldPosition () {
    ox = x
    oy = y
}
input.onButtonPressed(Button.B, function () {
	
})
let x = 0
let found = 0
let ty = 0
let tx = 0
let oy = 0
let ox = 0
let y = 0
y = 0
y = 0
ox = 0
oy = 0
tx = randint(1, 4)
ty = randint(1, 4)
found = 0
led.plot(tx, ty)
let end = 0
basic.forever(function () {
    if (end == 0) {
        if (found == 0) {
            gMoveX()
            showPixel()
            gMoveY()
            showPixel()
        } else {
            basic.showIcon(IconNames.TShirt)
        }
    } else {
        if (found != 1) {
            basic.showIcon(IconNames.No)
        }
    }
    basic.pause(100)
})
control.inBackground(function () {
    basic.pause(5000)
    end = 1
})
