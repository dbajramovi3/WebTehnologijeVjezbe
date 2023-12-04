let brojacModul = (function () {
    let brojac = 0;
  
    // Objekat koji sadrži metode modula
    let modul = {
      dodaj: function () {
        return brojac += 1;
      },
      resetuj: function () {
        brojac = 0;
      }
    };
  

    return modul;       
  })();
  
  console.log(brojacModul.dodaj());  // 1
  console.log(brojacModul.dodaj());  // 2
  brojacModul.resetuj();
  console.log(brojacModul.dodaj());  // 1
