/* global Phaser */

// Copyright (c) 2022 Julienka Sohal All rights reserved
// Created by: Julienka Sohal
// Created on: Nov 2022
// This is a Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Title Scene");
  }

  create(data) {}

  update(time, delta) {}
}

export default TitleScene;
