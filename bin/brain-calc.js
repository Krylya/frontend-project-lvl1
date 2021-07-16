#!/usr/bin/env node
import { calcGame, rules } from '../src/game/calcGame.js';
import gameInit from '../src/index.js';

gameInit(rules, calcGame);
