#!/usr/bin/env node
import playGame from '../games/lib/engine';
import generateQuizGcd from '../games/gcd';

playGame(generateQuizGcd, 'Find the greatest common divisor of given numbers.');
