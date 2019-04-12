#!/usr/bin/env node
import { playGame } from '..';
import calcGame from '../games/calc';

const NUM_OF_ROUNDS = 3;

playGame(calcGame, 'What is the result of the expression?', NUM_OF_ROUNDS);
