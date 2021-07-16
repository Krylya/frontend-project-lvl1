#!/usr/bin/env node
import { nodGame, rules } from '../src/game/nodGame.js';
import gameInit from '../src/index.js';

gameInit(rules, nodGame);
