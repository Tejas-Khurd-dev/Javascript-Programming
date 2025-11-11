for (var i= 1; i<=10; i++) 
  process.stdout.write(i + " "); // --> process.stdout.write() does NOT add a newline and process.stdout.write() accepts only one argument, and it must be a string.

console.log("\n"+i) // --> Add newline after printing value