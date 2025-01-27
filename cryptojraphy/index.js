function encryption55() {
     letter_small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     letter_capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
     encryption = ["/", "(", "9", ".", "@", "#", ":", "*", "+", "7", "2", ";", "!", ">", "<", "}", "[", ")", "=", "4", "5", "%", "&", "^", "8", "{"];

     input22 = document.getElementById('ioi').value;
     result = "";

    for (let i = 0; i < input22.length; i++) {
         char = input22[i];
         if (char === " "){
            result += " ";
         }
        else if(letter_small.includes(char)) {
             index = letter_small.indexOf(char);
            result += encryption[index];

        } else if (letter_capital.includes(char)) {
             index = letter_capital.indexOf(char);
            result += encryption[index];

        } else {
            document.getElementById("Wrong input").innerText = "Invalid input!";
            return;
        }
    }

    document.getElementById("Wrong input").innerText = result;
}






function encryption54 (yoo){
    letter_small =  ["a" , "b" , "c" , "d", "e", "f" , "g", "h" , "i", "j" , "k" , "l" ,"m" , "n" , "o" ,"p" ,"q" , "r" ,"s" ,"t" ,"u" , "v" , "w" , "x" , "y" , "z"]
    letter_capital= ["A" , "B" , "C" , "D", "E", "F" , "G", "H" , "I", "J" , "K" , "L" ,"M" , "N" , "O" ,"P" ,"Q" , "R" ,"S" ,"T" ,"U" , "V" , "W" , "X" , "Y" , "Z"]
    encryption  =   ["/" , "(" , "9" , ".", "@", "#" , ":", "*" , "+", "7" , "2" , ";" ,"!" , ">" , "<" ,"}" ,"[" , ")" ,"=" ,"4" ,"5" , "%" , "&" , "^" , "8" , "{"]

input22 = document.getElementById('ioi').value
result = "";


    for (i = 0; i < input22.length; i++){
        char = input22[i];

        if (char === " "){
            result += " ";
         }

else if(encryption.includes(char)){
    index = encryption.indexOf(char);
    result += letter_small[index];
}
else{
 document.getElementById("Wrong income").innerText
 return;
}
}
document.getElementById("Wrong input").innerText = result;
}
