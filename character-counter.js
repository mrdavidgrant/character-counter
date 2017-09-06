function countLetters(str){
  var letters = str.replace(/\s/g,'').split('');
  console.log(letters);
}

countLetters('Lighthouse in the house');