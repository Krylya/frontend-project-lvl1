#!/usr/bin/env node
import { evenGame, rules } from '../src/game/evenGame.js';
import gameInit from '../src/index.js';

gameInit(rules, evenGame);
