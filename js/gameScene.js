/* global Phaser */

// Copyright (c) 2022 Julienka Sohal All rights reserved
// Created by: Julienka Sohal
// Created on: Nov 2022
// This is a Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: "gameScene"})
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Game Scene")
  }

  create(data) {
    //pass
  }

  update(time, delta) {
    //pass
  }

  export default GameScene
}