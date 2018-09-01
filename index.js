function theBeatlesPlay(musArray, insArray) {
  const finalArray = [];
  
  for (let i = 0; i < musArray.length; i++) {
    const currentBeatle = musArray[i];
    let string = '';
    string+currentBeatle + " plays " + insArray[i];
    finalArray.push(string);
  }
  
  return finalArray;
}