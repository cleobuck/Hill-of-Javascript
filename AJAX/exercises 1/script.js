const req = new XMLHttpRequest();

req.onreadystatechange = function () {
    
    if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {

      let array = JSON.parse(req.responseText);
      
      


    // ------------------------------------------------------ ajouter un score aléatoire entre 0 et 1000 à toutes ces personnes

      
    array.map(obj =>  obj.score = Math.floor(Math.random()*1001));

    console.log(array);

   // -------------------------------------------------------- classer par score

    array.sort( (obj1,obj2) => obj1.score-obj2.score);

    

    //console.log(array);

  // --------------------------------------Mettre les personnes dans 3 catégories  (a > 750, b > 500, c < 500 )
  
  let a = [];
  let b = [];
  let c = [];

  array.forEach(function(obj) {

     if (obj.score > 750) {

      a.push(obj);

     } else if (obj.score > 500) {

      b.push(obj);

     } else {

      c.push(obj);

     }

    });

//console.log(a);
//console.log(b);
//console.log(c);

  // -------------------------------compter combien de personne viennent du "Bahrain" 

    function filter_Bahrain(person) {
      return person.country == "Bahrain";
  }

  let BahrainFilter = array.filter( elem => elem.country == "Bahrain");

  console.log(BahrainFilter);


  //--------------------------------afficher le plus grand score dans la console tip


  let topScore = array.pop();
  let totalTopScore = [topScore];

  while(totalTopScore[0].score == array[array.length-1].score) {

    totalTopScore.push(array[array.length-1]);

  }

  console.log(totalTopScore[0].score);



 //---------------------------------afficher le plus petit score dans la console tip

  array.sort((obj1,obj2) =>  obj2.score-obj1.score);
  

  
    console.log(array.pop().score);


    // end if 

    };

// end onreadystatechange







};

req.open('get', 'https://raw.githubusercontent.com/becodeorg/CRL-Turing-3.11/master/Parcours/04-Javascript/11-AJAX/files/data.json?token=ALTYPXPVROISVZZR2PB5NP25DXPKS', true);
req.send();






