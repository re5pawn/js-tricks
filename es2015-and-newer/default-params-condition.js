function animalSentenceFancy(
  animals = 'tigers',
  animals2 = (animals === 'bears') ? 'sealions' : 'bears'
) {
  return `Lions and ${animals} and ${animals2}! Oh my!`;
}

animalSentenceFancy('bears');
// 'Lions and bears and sealions. Oh my!'
