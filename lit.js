let litQuestions = ['Who wrote "The Gulag Archipleago"?', 
'What is the best-selling non-religious book of all time?', 
'Agatha Christie is known for what genre of literature?', 
'Which author is known for his/her love of fishing?', 
'What is considered to be the oldest story known to man?'];


let litAnswers = [['Fyodor Dostoevsky', 'Aleksandr Solzhenitsyn', 
'Leo Tolstoy', 'Vladimir Nabakov'], ['The Art of War', 'Romeo & Juliet', 
'Don Quixote', 'The Iliad'], ['Horror', 'Mystery', 'Non-Fiction', 'Sci-Fi'], 
['Ernest Hemingway', 'Herman Melville', 'Jules Verne', 'Rachel Carson'], 
['The Annals of Ramsses II', 'The Epic of Gilgamesh', 'Beowulf', 
'The Lament for Ur']];

let corrAnswers4 = ['Aleksandr Solzhenitsyn', 'Don Quixote', 'Mystery', 
'The Epic of Gilgamesh'];

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
        document.getElementById('litquestions').innerHTML = litQuestions[i];
        document.getElementById('litans1').innerHTML = litAnswers[i][j];
        j++;
        document.getElementById('litans2').innerHTML = litAnswers[i][j];
        j++;
        document.getElementById('litans3').innerHTML = litAnswers[i][j];
        j++;
        document.getElementById('litans4').innerHTML = litAnswers[i][j];
    } else {
        document.getElementById('litans1').style.display = 'none';
        document.getElementById('litans2').style.display = 'none';
        document.getElementById('litans3').style.display = 'none';
        document.getElementById('litans4').style.display = 'none';
    }
    i++;
};

displayQandA();

function checkAnswer(e){
    if (e.target.textContent === corrAnswers4[i - 1]){
        score += 20;
        document.getElementById('score').innerHTML = `Your Score: ${score}`;
    }
    if (score >= 100){
        document.getElementById('litquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage1.html');
        battleOver.innerText = 'Proceed to the Finish!'
        document.getElementById('container').appendChild(battleOver);
    } else if (i >= 5 && score < 100){
        document.getElementById('litquestions').innerHTML = 'Battle Over!';
        let battleOver = document.createElement('a');
        battleOver.setAttribute('href', 'endpage2.html');
        battleOver.innerText = 'Proceed to the Finish!'
        document.getElementById('container').appendChild(battleOver);
    }
}

let proceed = document.querySelector('.litanswer');
proceed.addEventListener('click', displayQandA);
