const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText = 'It was extremly hot outside, so :insertx: Chris and Alex  sat for chess game. They were driving to :inserty:, they stared in horror for a few moments, then :insertz:. Jake stood there watching, but was not surprised — :insertx: weighs 800LBS , and it was a sunny day.';
let insertX = ['the Incredible Hulk', 'Loki the one who became more', 'Chris Festival'];
let insertY = ['the fiesty Harry', 'Hogwarts', 'the Dungeon Ally'];
let insertZ = ['very witty', 'bolted into a puddle on the sidewalk', 'Chirs turned into a phoneix and flown away'];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Chris', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('street Photographer', temperature);
    newStory = newStory.replace('crazy vagabond', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}
