#!/usr/bin/env node
import { primeGame, rules } from '../src/game/primeGame.js';
import gameInit from '../src/index.js';

gameInit(rules, primeGame);
