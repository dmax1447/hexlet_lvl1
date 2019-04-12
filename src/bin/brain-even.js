#!/usr/bin/env node
import { playGame } from '..';
import evenGame from '../games/even';

const NUM_OF_ROUNDS = 3;

playGame(evenGame, 'Answer "yes" if number even otherwise answer "no"', NUM_OF_ROUNDS);
