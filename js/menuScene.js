/* global Phaser */

// Copyright (c) 2022 Julienka Sohal All rights reserved
// Created by: Julienka Sohal
// Created on: Nov 2022
// This is a Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Menu Scene")
  }

  create(data) {
    //pass
  }

  update(time, delta) {
    //pass
  }
}

export default MenuScene
