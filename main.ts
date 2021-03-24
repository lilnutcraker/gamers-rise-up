namespace SpriteKind {
    export const vent = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("who is sus?")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . 4 4 4 4 1 1 1 . . 
        . . . . . . 4 4 4 4 1 1 1 . . . 
        . . . . . 4 4 4 4 4 1 1 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 . 4 4 4 4 4 . . 
        . . . 4 4 4 4 . . 4 4 4 4 4 . . 
        . . . . 4 4 . . 4 4 4 4 4 . . . 
        . . . . . . . 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.vent, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................3..........3...........................................................................................
    .........................................................3..........3...........................................................................................
    ......................33.................................3..........3..................................................3........................................
    ....................33...................................3..........3..................................................3........................................
    ...................3.....................................3..........3..................................................3........................................
    ..................3......................................3..........3..................................................3........................................
    .................3.....................................3333333......3..................................................3........................................
    .................3.......................................3.........333333...................3333.......................3........................................
    .................3.......................................3..........3......................3....3......................3........................................
    .................3.......................................3..........3.....................3.....3......................3........................................
    ................3........................................3..........3......3333..........3.......3.....................3........................................
    ................3........................................3..........3.....3....333.......3.......3..33.................3..................................333...
    ................3........................................3..........3....3........33.....3.......3.3..3................3.....333..............33.........3..3...
    ................3.........33333.........33...............3..........3...3.333333333....33........33...3................3...333..33...333....33.33.......3....3..
    ................3........3....33.......33333333..........3..........3...3..............33........3....3................3...33.....333..3....3...33......3....33.
    ................3...............3.......3.....3.........3...........3...3..............3.........3.....3...............3...3......3....3....3...3.3.....3.....3.
    ................3...............3.......3......3........3...........3..3...............3.........3.....3...............3...3.......3....3...3...3.3.....3.....3.
    ................3..............3........3......3........3...........3..3...............3.........3.....3...............3...3.......33....3..3...3.3.....3.....3.
    .................3...........33..........3.....3...................33...3..............3.........3......3..............3...3.......33....3..3...3..3...3.....3..
    .................3.........33.............33333..........................3333..........3.........3......3..............3...........33.......3...3...3..3.....3..
    ..................333...333..................................................333..333....................3.............3............3.......33.33...3...3....3..
    .....................333........................................................33.......................3...................................333........333333..
    ..........................................................................................................3.....................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................................................333333............................................................
    .............................................................................................33333333...........................................................
    ............................................................................................3333333333..........................................................
    ............................................................................................33333333333.........................................................
    ............................................................................................333333333333........................................................
    ................................................................333333..333333333333.........33333333333........................................................
    ...............................................................33333333.33333333333333.......33333333333.....33333..............................................
    ...............................................................33333333.333333333333333.......3333333333.....33333..............................................
    ..............................................................333333333.3333333333333333.......333333333.....33333..............................................
    ..............................................................333333333....33333333333333......333333333.....33333..............................................
    ..............................................................333333333.......333333333333.....333333333.....33333..............................................
    ..............................................................333333333.........3333333333.....333333333.....33333..............................................
    .............................................................333333333...........3333333333....333333333.....33333..............................................
    .............................................................333333333............333333333....33333333......33333..............................................
    .............................................................33333333..............33333333...333333333.....333333..............................................
    .............................................................3333333...............33333333...333333333.....333333..............................................
    .............................................................3333333...............33333333...333333333.....333333..............................................
    ..............................................................333333...............33333333...33333333.....333333...............................................
    ..............................................................33333................33333333...3333333......333333...............................................
    ..............................................................333333...............33333333..33333333.....3333333...............................................
    ..............................................................333333..............33333333...33333333....33333333...............................................
    ...............................................................33333............3333333333..333333333....33333333...............................................
    ...............................................................333333.........33333333333..3333333333...333333333...............................................
    ...............................................................333333........33333333333..3333333333...3333333333...............................................
    ...............................................................333333.....33333333333333..3333333333...333333333................................................
    ...............................................................33333333..333333333333333333333333333..3333333333................................................
    ................................................................33333333333333333333333333333333333..33333333333................................................
    ................................................................3333333333333333333333333333333333..33333333333.................................................
    ................................................................3333333333333333333333333333333333.333333333333.................................................
    .................................................................3333333333333333333333333333333333333333333333.................................................
    ..................................................................33333333333333333333333333333333333333333333..................................................
    ...................................................................3333333333333333333333333333333333333333333..................................................
    ...................................................................333333333333333333333333333333333333333333...................................................
    ....................................................................33333333333333333333333333333333333333333...................................................
    ......................................................................33333333333333333333333333333333333333....................................................
    ........................................................................333333333333333333333333333333333333....................................................
    .........................................................................3333333333333333333333333333333333.....................................................
    ............................................................................333333333333333333333333333333......................................................
    ...............................................................................33333333333333333333333333.......................................................
    .................................................................................33333333333333333333333........................................................
    ..................................................................................333333333333333333333.........................................................
    ...................................................................................33333333333333333333.........................................................
    ....................................................................................333333333333333333..........................................................
    .....................................................................................33333333333333.............................................................
    ...........................................................................................3333.................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 2 2 2 2 2 9 9 9 9 9 . 
    . . . . 2 2 2 2 2 2 9 9 9 9 9 . 
    . . . . 2 2 2 2 2 2 9 9 9 9 9 . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 2 2 2 . 2 2 2 2 . . 
    . . . . . 2 2 2 2 . 2 2 2 2 . . 
    . . . . . 2 2 2 2 . 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(75, 110)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ........11111111111111..........
    ........11111111111111..........
    ........1ffffffffffff1..........
    ........11111111111111..........
    ........1ffffffffffff1..........
    ........11111111111111..........
    ........1ffffffffffff1..........
    ........11111111111111..........
    ........1ffffffffffff1..........
    ........11111111111111..........
    ........1ffffffffffff1..........
    ........11111111111111..........
    ........1ffffffffffff1..........
    ........11111111111111..........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.vent)
mySprite2.setPosition(26, 65)
info.setScore(0)
controller.moveSprite(mySprite)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 f f 5 5 5 f f 5 5 . . . 
    . . 5 f 5 5 5 5 5 5 5 f 5 . . . 
    . . 5 5 f f 5 5 5 f f 5 5 . . . 
    . . 5 f 5 5 f 5 f 5 5 f 5 . . . 
    . 9 9 9 5 5 5 5 5 5 5 9 9 9 9 . 
    9 9 9 9 f f f f f f f 9 9 9 9 9 
    9 9 9 9 f 1 1 1 1 1 f 9 9 9 9 9 
    9 9 9 5 5 f 5 5 5 f 5 5 9 9 9 9 
    9 9 5 5 5 5 f f f 5 5 5 5 9 9 9 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite3.follow(mySprite, 40)
mySprite3.setVelocity(50, 0)
mySprite3.setBounceOnWall(true)
mySprite3.setPosition(72, 19)
controller.player2.moveSprite(mySprite3, 100, 100)
let mySprite4 = sprites.create(img`
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.vent)
mySprite4.setPosition(123, 13)
game.onUpdateInterval(200, function () {
    if (info.score() == 20) {
        game.over(true, effects.slash)
    }
})
