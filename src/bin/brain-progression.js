#!/usr/bin/env node
import playGame from '../games/lib/engine';
import findHiddenElementOfProgression from '../games/progression';

playGame(findHiddenElementOfProgression, 'What number is missing in the progression?');
