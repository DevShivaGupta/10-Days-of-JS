'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    const i=0;
    if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
    letter='A';
    if(s[i]=='b' || s[i]=='c' || s[i]=='d' || s[i]=='f' || s[i]=='g')
    letter='B';
    if(s[i]=='h' || s[i]=='j' || s[i]=='k' || s[i]=='l' || s[i]=='m')
    letter='C';
    if(s[i]=='n' || s[i]=='p' || s[i]=='q' || s[i]=='r' || s[i]=='s' || s[i]=='t' || s[i]=='v' || s[i]=='w' || s[i]=='x' || s[i]=='y' || s[i]=='z')
    letter='D';

    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}