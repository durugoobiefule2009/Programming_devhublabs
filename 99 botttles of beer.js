console.log("Lyrics of the song 99 Bottles of Beer");

function beer (numOfBeer) {
    while (numOfBeer >= 1) {
        var nextLine = numOfBeer - 1;
        if(numOfBeer > 1){
        console.log(numOfBeer + " bottles of beer on the wall, " + numOfBeer + " bottles of beer.");
        console.log("Take one down and pass it around, " + nextLine +" bottles of beer on the wall.");
        }
        else{
            console.log(numOfBeer + " bottle of beer on the wall, 1 bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall");
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        numOfBeer--;
    }    
}

beer(99)