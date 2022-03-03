function Pyramid() {
  var nombre = prompt("Choisis un nombre ");
  var output = '';
  for (var i = 1; i <= nombre; i++) {
      for (var j = 1; j <= i; j++) {
          output += "#" + '  ';
      }
      console.log(output);
      output = '';
  }
}

Pyramid();