//questions in array form

let histQuestions = ['During what years were the Civil War?', 
'When was the Empire State Building finished?', 'Which President served the most terms?', 
'During which Century did the plague hit Europe?', 'Who was the first Black Woman to earn a Medical Degree in the US?'];

let histAnswers = [['1914 - 1918', '1812 - 1815', '1861 - 1865', '1834 - 1839'], 
['1928', '1935', '1931', '1946'], ['LBJ', 'FDR', 'JFK', 'MLK'], 
['13th Century', '14th Century', '8th Century', '12th Century'], 
['Sojourner Truth', 'Daisy Bates', 'Bessie Smith', 'Rebecca Lee Crumpler']];

let corrAnswers2 = ['1861 - 1865', '1931', 'FDR', '14th Century', 
'Rebecca Lee Crumpler'];

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
        document.getElementById('histquestions').innerHTML = histQuestions[i];
        document.getElementById('histans1').innerHTML = histAnswers[i][j];
        j++;
        document.getElementById('histans2').innerHTML = histAnswers[i][j];
        j++;
        document.getElementById('histans3').innerHTML = histAnswers[i][j];
        j++;
        document.getElementById('histans4').innerHTML = histAnswers[i][j];
    } else {
        document.getElementById('histans1').style.display = 'none';
        document.getElementById('histans2').style.display = 'none';
        document.getElementById('histans3').style.display = 'none';
        document.getElementById('histans4').style.display = 'none';
    }
    i++;
};

displayQandA();

function checkAnswer(e){
    if (e.target.textContent === corrAnswers2[i - 1]){
        score += 20;
        document.getElementById('score').innerHTML = `Your Score: ${score}`;
    }
    if (score >= 100){
        document.getElementById('histquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage1.html');
        battleOver.innerText = 'Proceed to the Finish!'
        document.getElementById('container').appendChild(battleOver);
    } else if (i >= 5 && score < 100){
        document.getElementById('histquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage2.html');
        battleOver.innerText = 'Proceed to the Finish!'
        document.getElementById('container').appendChild(battleOver);
    }
}

let proceed = document.querySelector('.histanswer');
proceed.addEventListener('click', displayQandA);