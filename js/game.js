/* global Phaser */

// Copyright (c) 2022 Julienka Sohal All rights reserved
// Created by: Julienka Sohal
// Created on: Nov 2022
// This is a Phaser3 game configuration file

import SplasheScene from './splashScene.js'

// Our game scene
const splashScene = new SplasheScene()

/**
 *game scene
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.Game(config)

//load scenes
// NOTE: remebr any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

//start title
game.scene.start('splashScene')