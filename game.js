/* global Phaser */

// Copyright (c) 2022 Julienka Sohal All rights reserved
// Created by: Julienka Sohal
// Created on: Nov 2022
// This is a Phaser3 game configuration file

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  // set background colour
  backgroundColor: 0x5f6e7a,
};

const game = new Phaser.game(config);
console.log(game);
