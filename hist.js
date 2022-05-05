//questions in object form

let histQuestions = ['During what years were the Civil War?', 
'When was the Empire State Building finished?', 'Which President served the most terms?', 
'During which Century did the plague hit Europe?', 'Who was the first Black Woman to earn a Medical Degree in the US?'];

let histAnswers = [['1914 - 1918', '1812 - 1815', '1861 - 1865', '1834 - 1839'], 
['1928', '1935', '1931', '1946'], ['LBJ', 'FDR', 'JFK', 'MLK'], 
['13th Century', '14th Century', '8th Century', '12th Century'], 
['Sojourner Truth', 'Daisy Bates', 'Bessie Smith', 'Rebecca Lee Crumpler']];

let corrAnswers2 = [];

let i = 0;
let j = 0;

document.getElementById('histquestions').innerHTML = histQuestions[i];

document.getElementById('histans1').innerHTML = histAnswers[i][j];
j++;
document.getElementById('histans2').innerHTML = histAnswers[i][j];
j++;
document.getElementById('histans3').innerHTML = histAnswers[i][j];
j++;
document.getElementById('histans4').innerHTML = histAnswers[i][j];