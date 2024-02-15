namespace SpriteKind {
    export const MELISSA = SpriteKind.create()
    export const temp = SpriteKind.create()
    export const deliveredFood = SpriteKind.create()
    export const customer = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    heldSprite.follow(You, 0)
    heldSprite.setKind(SpriteKind.deliveredFood)
    holding = false
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "Good Job!")
    game.gameOver(true)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile8`)
    sprite.setVelocity(randint(-110, -100), 0)
})
function doSomething () {
    foods = sprites.create(assets.image`coffee`, SpriteKind.Food)
    foods.setScale(0.2, ScaleAnchor.Right)
    foods.setPosition(37, 12)
    foods = sprites.create(assets.image`croisant`, SpriteKind.Food)
    foods.setScale(0.2, ScaleAnchor.Right)
    foods.setPosition(72, 10)
    foods = sprites.create(assets.image`Cake`, SpriteKind.Food)
    foods.setScale(0.2, ScaleAnchor.Right)
    foods.setPosition(111, 6)
}
function loop_food_coming () {
    pause(100)
    for (let index = 0; index < 1; index++) {
        pause(1000)
        list_of_foods = [assets.image`Cake`, assets.image`coffee`, assets.image`croisant`]
        foods = sprites.create(list_of_foods._pickRandom(), SpriteKind.Food)
        foods.setScale(0.2, ScaleAnchor.Right)
        pause(100)
        tiles.placeOnRandomTile(foods, assets.tile`myTile10`)
    }
}
info.onLifeZero(function () {
    game.setGameOverMessage(false, "You spilled the food...")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.deliveredFood, SpriteKind.customer, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 500)
    tiles.placeOnRandomTile(customer2, assets.tile`myTile`)
    pause(2000)
    loop_food_coming()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (!(holding)) {
        heldSprite = otherSprite
        otherSprite.follow(sprite)
        holding = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(8, 500)
    info.changeLifeBy(-1)
    You.setPosition(15, 81)
})
let list_of_foods: Image[] = []
let foods: Sprite = null
let heldSprite: Sprite = null
let customer2: Sprite = null
let holding = false
let You: Sprite = null
let Melissa = sprites.create(assets.image`mELISSA`, SpriteKind.MELISSA)
Melissa.setPosition(47, 40)
Melissa.setScale(0.5, ScaleAnchor.Middle)
game.showLongText("Welcome to your first day on the job!", DialogLayout.Bottom)
sprites.destroy(Melissa)
game.showLongText("Give the food to the customers and avoid the ferrets!", DialogLayout.Full)
doSomething()
tiles.setCurrentTilemap(tilemap`tilemap`)
info.setLife(3)
let ferret = sprites.create(assets.image`ferret`, SpriteKind.Enemy)
tiles.placeOnRandomTile(ferret, assets.tile`myTile8`)
ferret.setScale(0.5, ScaleAnchor.Middle)
ferret.setVelocity(randint(-170, -160), 0)
You = sprites.create(assets.image`you`, SpriteKind.Player)
You.setScale(0.3, ScaleAnchor.Middle)
You.setPosition(15, 81)
controller.moveSprite(You)
holding = false
scene.cameraFollowSprite(You)
customer2 = sprites.create(assets.image`customer`, SpriteKind.customer)
tiles.placeOnRandomTile(customer2, assets.tile`myTile`)
info.startCountdown(59)
