console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i=0; i<100; i++){
    if (i%2==0 ) {
        continue;
    } else {console.log(i);
}
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i=0; 1<100; i++){
    console.log(i)
    if (i%3==0) {
        console.log("fizz"); 
    } else if (i%5==0) {
    console.log("buzz");
    } else (i%3==0&&i%5==0)
        console.log("fizzbuzz");
    }


// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let i=1
while(i<100){
    if(i%2==0) {
        console.log(i);
    }
    i++;
}

let x=1
do{
    if(x%2==0) {
        console.log(x);
    }
    x++;
} while(x<100);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let i=1

for (let i=1; i<=n; i++) {
    if(i==numberToFind) {
    console.log(`Found ${numberToFind}!`);
    break;
    }

if (i==n) {
console.log(`Did not find ${numberToFind} within 1-${n}..`);
}
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for(let i=start; i<=end; i++){
    let output="";
    if(i%fizzDivisor==0){
        output+= "Fizz";
    }

    if(i%buzzDivisor==0){
        output+="Buzz";
    }
    console.log(`${i} ${output}`);
}
console.log(fizzDivisor,buzzDivisor);