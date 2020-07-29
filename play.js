
const connect = require('./client')
const stdin = process.stdin;
/**
 * Establishes connection with the game server
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function () {
  stdin.on('data', (key) => {
    process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
  });
} 
  
  

console.log('Connecting ...');
connect();
setupInput();