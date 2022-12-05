/* global Phaser */

// Copyright (c) 2022 Julienka Sohal All rights reserved
// Created by: Julienka Sohal
// Created on: Nov 2022
// This is a Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: "gameScene"})
    this.background = null
    this.ship = null
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Game Scene")
    this.load.image("startBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
  }

  create(data) {
    this.background = this.add.image(0, 0, "startBackground").setScale(2.0)
    this.background.setOrigin(0, 0)
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  update(time, delta) {
    //pass
  }
}
  export default GameScene