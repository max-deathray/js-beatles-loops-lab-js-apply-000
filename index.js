function theBeatlesPlay(musArray, insArray) {
  const finalArray = [];
  
  for (let i = 0; i < musArray.length; i++) {
    const currentBeatle = musArray[i];
    const currentInstrument = insArray[i];
    let string = `${currentBeatle} plays ${currentInstrument}`
    finalArray.push(string);
  }
  
  return finalArray;
}