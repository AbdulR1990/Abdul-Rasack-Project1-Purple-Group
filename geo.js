let geoQuestions = ['What are the two most populous countries in Africa?', 
'What is the Capital of Myanmar?', 'Name three countries in Oceania', 
'Which city in the world rests at the highest elevation?', 
'Name three Caribbean Islands'];

let geoAnswers = [['Egypt & South Africa', 'Ghana & Nigeria', 'Nigeria & Ethiopia', 'Mali & Sudan'], 
['Phnom Penh', 'Ho Chi Minh City', 'Rangoon', 'Naypyidaw'], 
['Tonga, Timor Leste & Brunei', 'Fiji, Solomon Islands & Marshall Islands', 
'New Zealand, Singapore & Vanuatu', 'Guam, Australia & Singapore'], 
['Lima', 'La Paz', 'Kathmandu', 'Bhutan'], 
['Trinidad & Tobago, Guyana & Jamaica', 'Cuba, Haiti & Jamaica', 
'Antigua & Barbuda, Anguila & Samoa', 'Puerto Rico, Cuba & Costa Rica']];

let corrAnswers3 = ['Nigeria & Ethiopia', 'Naypyidaw', 'Fiji, Solomon Islands & Marshall Islands', 
'La Paz', 'Cuba, Haiti & Jamaica'];

let i = 0;

let score = 0;

document.getElementById('score').innerHTML = `Your Score: ${score}`;

function displayQandA(e){
    if (e){
        console.log(e.target);
        checkAnswer(e);
    }
    if(i < 5){
        j = 0;
        document.getElementById('geoquestions').innerHTML = geoQuestions[i];
        document.getElementById('geoans1').innerHTML = geoAnswers[i][j];
        j++;
        document.getElementById('geoans2').innerHTML = geoAnswers[i][j];
        j++;
        document.getElementById('geoans3').innerHTML = geoAnswers[i][j];
        j++;
        document.getElementById('geoans4').innerHTML = geoAnswers[i][j];
    } else {
        document.getElementById('geoans1').style.display = 'none';
        document.getElementById('geoans2').style.display = 'none';
        document.getElementById('geoans3').style.display = 'none';
        document.getElementById('geoans4').style.display = 'none';
    }
    i++;
};

displayQandA();

function checkAnswer(e){
    if (e.target.textContent === corrAnswers3[i - 1]){
        score += 20;
        document.getElementById('score').innerHTML = `Your Score: ${score}`;
    }
    if (score >= 100){
        document.getElementById('geoquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage1.html');
        battleOver.innerText = 'Proceed to the Finish!'
        document.getElementById('container').appendChild(battleOver);
    } else if (i >= 5 && score < 100){
        document.getElementById('geoquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage2.html');
        battleOver.innerText = 'Proceed to the Finish!'
        document.getElementById('container').appendChild(battleOver);
    }
}

let proceed = document.querySelector('.geoanswer');
proceed.addEventListener('click', displayQandA);