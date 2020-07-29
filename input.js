const stdin = process.stdin;
let connection;

const setupInput = function(conn) {
  connection = conn;
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
    //w
    if (key === '\u0077') {
      connection.write("Move: up")
    } 
    //a
    if (key === '\u0061'){
      connection.write("Move: left")
    }
    //s
    if (key === '\u0073') {
      connection.write("Move: down")
    }
    //d
    if (key === '\u0064') {
      connection.write("Move: right")
    }
    if (key === '\u0020') connection.write("Say: Hello Peeps!");
    if (key === '\u001B') connection.write("Say: I GIVE UP!");
    
  });
} 

module.exports = setupInput