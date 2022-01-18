const args = process.argv;

let count = 1;
const spins = args[2];
const max = (spins * 8) + 2;
let time = 100;

while (count <= max) {
  
  let char;
  switch (count % 4) {
  case 0:
    char = '\r\\   ';
    break;
  case 1:
    char = '\r|   ';
    break;
  case 2:
    char = '\r/   ';
    break;
  case 3:
    char = '\r-   ';
    break;
  }

  if (count !== max) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 200;
    count++;
    continue;
  }
  
  setTimeout(() => {
    process.stdout.write('\n');
  }, time);
  count++;

}