radio.onReceivedValue(function (name, value) {
    if (name == "button1") {
        if (value == 1) {
            serial.writeLine("1")
            button = 1
        } else {
            button = 0
        }
    } else if (name == "magnet11") {
        if (value == 1) {
            serial.writeLine("2")
            magnet1 = 1
        } else {
            magnet1 = 0
        }
    } else if (name == "magnet12") {
        if (value == 1) {
            serial.writeLine("3")
            magnet2 = 1
        } else {
            magnet2 = 0
        }
    } else if (name == "ring1") {
        if (value == 1) {
            serial.writeLine("4")
            ring = 1
        } else {
            ring = 0
        }
    }
})
let ring = 0
let magnet2 = 0
let magnet1 = 0
let button = 0
radio.setGroup(58)
basic.forever(function () {
    if (button == 1 && (magnet1 == 1 && (magnet2 == 0 && ring == 0))) {
        serial.writeLine("5")
    }
    if (button == 1 && (magnet1 == 0 && (magnet2 == 1 && ring == 0))) {
        serial.writeLine("6")
    }
    if (button == 1 && (magnet1 == 0 && (magnet2 == 0 && ring == 1))) {
        serial.writeLine("7")
    }
    if (button == 0 && (magnet1 == 1 && (magnet2 == 0 && ring == 1))) {
        serial.writeLine("8")
    }
    if (button == 0 && (magnet1 == 1 && (magnet2 == 1 && ring == 0))) {
        serial.writeLine("9")
    }
    if (button == 0 && (magnet1 == 0 && (magnet2 == 1 && ring == 1))) {
        serial.writeLine("10")
    }
    if (button == 1 && (magnet1 == 1 && (magnet2 == 1 && ring == 0))) {
        serial.writeLine("11")
    }
    if (button == 1 && (magnet1 == 1 && (magnet2 == 0 && ring == 1))) {
        serial.writeLine("12")
    }
    if (button == 1 && (magnet1 == 0 && (magnet2 == 1 && ring == 1))) {
        serial.writeLine("13")
    }
    if (button == 0 && (magnet1 == 1 && (magnet2 == 1 && ring == 1))) {
        serial.writeLine("14")
    }
    if (button == 1 && (magnet1 == 1 && (magnet2 == 1 && ring == 1))) {
        serial.writeLine("15")
    }
})
