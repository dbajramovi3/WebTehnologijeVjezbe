let odgovor = prompt("Kako se zoves?", "Imenom i prezimenom (default)");
if(odgovor != "" && odgovor != null){
    //Kreirat cemo funkciju koja ce obnuti neki tekst
    function Obrni(text){
        return text.split("").reverse().join("");
        //split ce neku rijec razdvojiti na karaktere PR: Zdravo -> "Z" "d" "r" "a" "v" "o"
        //reverse ce obrnuti redoslijed -> "o" "v" "a" "r" "d" "Z"
        //join ce spojiti to u jednu rijec
        }

    let obrnutiText = Obrni(odgovor);
    let r = confirm("Pritisnite OK da prikazete obrnuti tekst u alertboxu, a Cancel za prikaz direktno na stranici.");
    if(r){
        alert(obrnutiText)
    }else{
        document.write(obrnutiText)
    }
}
