// TRANSLATION CODE

let showEmoji = document.querySelector('.emojis');

/* DICTIONARY : 
   PROS : -> Easier for user to type a real sentence not an emoji name => better translation
          -> Code to replace keys by value (Object.entries)
          -> Assignment of new keys to values
          -> Shorter code vs arrays & push method
   CON  : ->Type all the keys/values vs API          
*/

const dicoEmojis =  {
  "ballon": " ๐  ",
  "lettre d'amour": " ๐  ",
  "aime":" ๐  ",
  "cลur brisรฉ": " ๐  ",
  "coeur brisรฉ": " ๐  ",
  "aime plus": " ๐  ",
  "aimes plus": " ๐  ",
  "canard": " ๐ฆ  ",
  "canards": " ๐ฆ๐ฆ  ",
  "caca":" ๐ฉ  ",
  "crotte":" ๐ฉ  ",
  "crottes":" ๐ฉ  ",
  "chocolat":" ๐ซ  ",
  "tablette de chocolat":" ๐ซ  ",
  "tablettes de chocolat":" ๐ซ  ",
  "cookies":" ๐ช  ",
  "donut":" ๐ฉ  ",
  "donuts":" ๐ฉ  ",
  "donut au chocolat":" ๐ฉ  ",
  "biรจre":" ๐บ  ",
  "biรจres":" ๐ป  ",
  "banane": " ๐  ",
  "feu": " ๐ฅ  ",
  "brรปle": " ๐ฅ๐ฅ  ",
  "fantรดme": " ๐ป  ",
  "singe": " ๐  ",
  "abeille": " ๐  ",
  "abeilles": " ๐ ๐   ",
  "morte de rire":" ๐คฃ  ",
  "mort de rire":" ๐คฃ  ",
  "clin d'oeil":" ๐  ",
  "embrasse":" ๐  ",
  "envie":" ๐  ",
  "s'il-te-plaรฎt":" ๐ฅบ  ",
  "รฉnerve":" ๐ค  ",
  "รฉnerves":" ๐ค  ",
  "รฉnerver":" ๐ค  ",
  "mortel":" โ ๏ธ  ",
  "ok":" ๐  ",
  "daccord":" ๐  ",
  "nul":" ๐๐ฝ  ",
  "danser":" ๐๐ฝ  ",
  "danses":" ๐๐ฝ  ",
  "danse":" ๐๐ฝ  ",
  "fumer":" ๐ฌ ๐ถโ๐ซ๏ธ  ",
  "fumes":" ๐ฌ ๐ถโ๐ซ๏ธ  ",
  "fume":" ๐ฌ ๐ถโ๐ซ๏ธ  ",
  "cigarette":" ๐ฌ  ",
  "cigarettes":" ๐ฌ  ",
  "clope":" ๐ฌ  ",
  "fiรจvre":" ๐ค  ",
  "rhume":" ๐คง  ",
  "covid":" ๐คฎ๐คง๐ค  ",
  "malade":" ๐คข  ",
  "code":" ๐ป๐คฏ  ",
  "coder":" ๐คฏ  ",
  "codes":" ๐คฏ  ",
  "nounours":" ๐งธ  ",
  "peluche":" ๐งธ  ",
  "dragon":" ๐  ",
  "cadeau":" ๐  ",
  "ninja":" ๐ฅท๐ผ  ",
  "discret":" ๐ฅท๐ผ  ",
  "heureux":" ๐  ",
  "heureuse":" ๐  ",
  "joyeux":" ๐  ",
  "joyeuse":" ๐  ",
  "tais-toi":" ๐คซ  ",
  "taire":" ๐คซ  ",
  "rien vu":" ๐  ",
  "rien entendu":" ๐  ",
  "rien dis":" ๐  ",
  "poulpe":" ๐  ",
  "chat":" ๐โโฌ  ",
  "chatte":" ๐โโฌ  ",
  "minou":" ๐โโฌ  ",
  "miel":" ๐ฏ  ", 
};

/* 
  => querySelector: search through the DOM
  => addEventListener : translation set up on click
  => creation of the translation variable askWord : 
       -> takes lowercase & uppercase inputs
       -> 2 new variables created for keys & values
       -> replaces keys (word) by corresponding values (emoji)
*/
let submit = document.querySelector(".submit");
submit.addEventListener("click",()=> {
let askWord = document.querySelector('.text').value
 for (const [word, emoji] of Object.entries(dicoEmojis)) {
    askWord = askWord.replace(word,emoji);
    askWord = askWord.toLowerCase().replace(word,emoji);
    askWord = askWord.toUpperCase().replace(word,emoji);  
    console.log(askWord);  
}
showEmoji.innerHTML = askWord;
});

var emojiClear = document.querySelector('.emojis');
emojiClear.innerHTML="";


 