#!/usr/bin/env node
import { progressionGame, rules } from '../src/game/progressionGame.js';
import gameInit from '../src/index.js';

gameInit(rules, progressionGame);
