'use strict';

import PIXI from 'pixi.js';
import ScaledObjectGroup from '../ScaledObjectGroup/ScaledObjectGroup.js';
import BunnyGroup from '../BunnyGroup/BunnyGroup.js';
import Bunny from '../Bunny/Bunny.js';
import Background from '../Background/Background.js';
import RendererStore from '../../stores/RendererStore.js';

export default class App extends ScaledObjectGroup {

  constructor(...args) {
    var bg = new Background();

    super(...args);

    this.addChild(bg);

    this.addBunnies();

  }

  addBunnies() {
    var group1 = new BunnyGroup();
    var group2 = new BunnyGroup();

    group1.position.y = 520;
    group2.position.y = 520;

    group1.position.x = 920;
    group2.position.x = 960;

    group2.scale.x = .5;
    group2.scale.y = .5;

    this.addChild(group1);
    this.addChild(group2);
  }

}