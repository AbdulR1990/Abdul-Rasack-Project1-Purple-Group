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

let i = 0;
let j = 0;

document.getElementById('geoquestions').innerHTML = geoQuestions[i];

document.getElementById('geoans1').innerHTML = geoAnswers[i][j];
j++;
document.getElementById('geoans2').innerHTML = geoAnswers[i][j];
j++;
document.getElementById('geoans3').innerHTML = geoAnswers[i][j];
j++;
document.getElementById('geoans4').innerHTML = geoAnswers[i][j];