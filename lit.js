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

let i = 0;
let j = 0;

document.getElementById('litquestions').innerHTML = litQuestions[i];

document.getElementById('litans1').innerHTML = litAnswers[i][j];
j++;
document.getElementById('litans2').innerHTML = litAnswers[i][j];
j++;
document.getElementById('litans3').innerHTML = litAnswers[i][j];
j++;
document.getElementById('litans4').innerHTML = litAnswers[i][j];