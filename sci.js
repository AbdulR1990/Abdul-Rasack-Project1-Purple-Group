let sciQuestions = ['How many valence electrons does Carbon have?',
 'Radioactivity is measured in what units?', 'What is the seventh planet from the sun?', 
 'What does pH measure exactly?', 'What is the First Law of Thermodynamics?'];

let sciAnswers = [['1', '5', '4', '7'], ['Becquerels', 'Teslas', 'Daltons', 'Wavelengths'], 
['Jupiter', 'Uranus', 'Neptune', 'Saturn'], ['-log[OH-]', '-log[k]', '-log[H+]', 'log[OH]'], 
['The entropy of any isolated system always increases', 
'Energy can niether be created nor destroyed, only transferred', 
'The entropy of a system approaches a constant value as the temperature approaches absolute zero', 
'An object in motion will stay in motion unless acted upon by an outside force']];

corrAnswers1 = ['4', 'Becquerels', 'Uranus', '-log[H+]', 
'Energy can niether be created nor destroyed, only transferred'];

let i = 0;

let score = 0;

document.getElementById('score').innerHTML = `Your Score: ${score}`;

function displayQandA(e){
    
    if (i >= 4 && score >= 80){
        document.getElementById('sciquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage1.html');
        battleOver.textContent = 'Go to End Page'
        document.body.append(battleOver);
    } else if (i >= 4 && score < 80){
        document.getElementById('sciquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage2.html');
    } else {
        if (e){
            checkAnswer(e);
        }
    j = 0;
    document.getElementById('sciquestions').innerHTML = sciQuestions[i];

    document.getElementById('scians1').innerHTML = sciAnswers[i][j];
    j++;
    document.getElementById('scians2').innerHTML = sciAnswers[i][j];
    j++;
    document.getElementById('scians3').innerHTML = sciAnswers[i][j];
    j++;
    document.getElementById('scians4').innerHTML = sciAnswers[i][j];
    i++;
    } 
};

displayQandA();

function checkAnswer(e){
    if(e.target.textContent == corrAnswers1[i - 1]){
        score += 20;
        document.getElementById('score').innerHTML = `Your Score: ${score}`;
    };
}

let proceed = document.querySelector('.scianswer');
proceed.addEventListener('click', displayQandA);
