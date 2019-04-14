#!/usr/bin/env node
import playGame from '../games/lib/engine';
import guessIfItEvenNum from '../games/even';

playGame(guessIfItEvenNum, 'Answer "yes" if number even otherwise answer "no"');
