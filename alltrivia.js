//questions

import { sciQuest } from "./Project1-Triviae-Bellator/sci.js";
import { histQuest } from "./Project1-Triviae-Bellator/hist.js";
import { geoQuest } from "./Project1-Triviae-Bellator/geo.js";
import { litQuest } from "./Project1-Triviae-Bellator/lit.js";

const categoryChoice = ['Science', 'History', 'Geography', 'Literature'];

//Variables for functionality

let ans = null
let questionArray = []
let idx = 0
let category, score, correctAns, catTitle, catSound