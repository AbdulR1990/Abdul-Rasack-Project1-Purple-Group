let sciQuestions = ['How many valence electrons does Carbon have?',
 'Radioactivity is measured in what units?', 'What is the seventh planet from the sun?', 
 'What does pH measure exactly?', 'What is the First Law of Thermodynamics?'];

let sciAnswers = [['1', '5', '4', '7'], ['Becquerels', 'Teslas', 'Daltons', 'Wavelengths'], 
['Jupiter', 'Uranus', 'Neptune', 'Saturn'], ['-log[OH-]', '-log[k]', '-log[H+]', 'log[OH]'], 
['The entropy of any isolated system always increases', 
'Energy can niether be created nor destroyed, only transferred', 
'The entropy of a system approaches a constant value as the temperature approaches absolute zero', 
'An object in motion will stay in motion unless acted upon by an outside force']];

let i = 0;
let j = 0;


document.getElementById('sciquestions').innerHTML = sciQuestions[i];

document.getElementById('scians1').innerHTML = sciAnswers[i][j];
j++;
document.getElementById('scians2').innerHTML = sciAnswers[i][j];
j++;
document.getElementById('scians3').innerHTML = sciAnswers[i][j];
j++;
document.getElementById('scians4').innerHTML = sciAnswers[i][j];

let proceed = document.getElementById('sciquestions');
let ansProceed = document.getElementsByClassName('answers');
proceed.addEventListener('click', () => {
    proceed++;
    proceed.innerText = 
    ansProceed[i].innerHTML;
    i++;
});

console.log(proceed);
console.log(proceed.innerHTML);
console.log(ansProceed[i].innerHTML);