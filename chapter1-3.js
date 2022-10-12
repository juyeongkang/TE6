console.log("this is chapter1-3 answer");

//Chess board
//I learned through eloquentjavascript soultions since I could not get the right one...

// define a binding size = 8
var size  = 8;

// cb=empty chessboard
var cb = "";

// outer loop (o)
for (var o = 1; o <= size; o++) {
// inner loop(i)
  for (var i = 1; i <= size; i++) {
//(from eloquentjavascript hint)
// To know whether to put a space or a hash sign at a given position, 
// you could test whether the sum of the two counters is even (% 2).
    if ((o+i) % 2 == 0) { 
      cb += " ";
      // cb += "\n"; 
    } else { 
      cb += "#";
    }
  }
// A newline character is written "\n". - from eloquentjavascript hint. 
  cb += "\n"; 
}

console.log(cb);