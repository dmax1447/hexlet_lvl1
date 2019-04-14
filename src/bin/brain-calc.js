#!/usr/bin/env node
import playGame from '../games/lib/engine';
import calcRandomExpression from '../games/calc';

playGame(calcRandomExpression, 'What is the result of the expression?');
