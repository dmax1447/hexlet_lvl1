#!/usr/bin/env node
import playGame from '../games/lib/engine';
import checkIfIsPrime from '../games/prime';

playGame(checkIfIsPrime, 'Answer "yes" if given number is prime. Otherwise answer "no"');
