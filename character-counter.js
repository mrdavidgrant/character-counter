function countLetters(str){
  var letters = str.replace(/\s/g,'').split('');
  var totals = {
    create: function(property){
      totals[property] = 1;
    }
  };

  // console.log(letters);
  
  for (var i = 0; i < letters.length; i++){
    if (!totals[letters[i]]) {
      totals.create(letters[i]);
      console.log(totals[letters[i]], 'created')
    } else {
      totals[letters[i]]++;
      console.log(totals[letters[i]]);
    }
  };
  return totals;
}

console.log(countLetters('Lighthouse in the house'));