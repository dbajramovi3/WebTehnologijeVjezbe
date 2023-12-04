function dodajDva(broj){
    return broj + 2;
}

function jednom(callback) {
        let prviPoziv = true;
        let rezultat;

        return function(parametar){
            if(prviPoziv){
                rezultat = callback(parametar);
                prviPoziv = false;
            }
            return rezultat;
        };
    }
    
    const jednomFunkcija = jednom(dodajDva);
    
    console.log(jednomFunkcija (4)); // treba ispisati 6
    console.log(jednomFunkcija (10)); // treba ispisati 6
    console.log(jednomFunkcija (9001)); // treba ispisati 6