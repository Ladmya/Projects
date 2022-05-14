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
  "ballon": " 🎈  ",
  "lettre d'amour": " 💌  ",
  "aime":" 💗  ",
  "cœur brisé": " 💔  ",
  "coeur brisé": " 💔  ",
  "aime plus": " 💔  ",
  "aimes plus": " 💔  ",
  "canard": " 🦆  ",
  "canards": " 🦆🦆  ",
  "caca":" 💩  ",
  "crotte":" 💩  ",
  "crottes":" 💩  ",
  "chocolat":" 🍫  ",
  "tablette de chocolat":" 🍫  ",
  "tablettes de chocolat":" 🍫  ",
  "cookies":" 🍪  ",
  "donut":" 🍩  ",
  "donuts":" 🍩  ",
  "donut au chocolat":" 🍩  ",
  "bière":" 🍺  ",
  "bières":" 🍻  ",
  "banane": " 🍌  ",
  "feu": " 🔥  ",
  "brûle": " 🔥🔥  ",
  "fantôme": " 👻  ",
  "singe": " 🐒  ",
  "abeille": " 🐝  ",
  "abeilles": " 🐝 🐝   ",
  "morte de rire":" 🤣  ",
  "mort de rire":" 🤣  ",
  "clin d'oeil":" 😉  ",
  "embrasse":" 😘  ",
  "envie":" 😍  ",
  "s'il-te-plaît":" 🥺  ",
  "énerve":" 😤  ",
  "énerves":" 😤  ",
  "énerver":" 😤  ",
  "mortel":" ☠️  ",
  "ok":" 👍  ",
  "daccord":" 👍  ",
  "nul":" 👎🏽  ",
  "danser":" 💃🏽  ",
  "danses":" 💃🏽  ",
  "danse":" 💃🏽  ",
  "fumer":" 🚬 😶‍🌫️  ",
  "fumes":" 🚬 😶‍🌫️  ",
  "fume":" 🚬 😶‍🌫️  ",
  "cigarette":" 🚬  ",
  "cigarettes":" 🚬  ",
  "clope":" 🚬  ",
  "fièvre":" 🤒  ",
  "rhume":" 🤧  ",
  "covid":" 🤮🤧🤒  ",
  "malade":" 🤢  ",
  "code":" 💻🤯  ",
  "coder":" 🤯  ",
  "codes":" 🤯  ",
  "nounours":" 🧸  ",
  "peluche":" 🧸  ",
  "dragon":" 🐉  ",
  "cadeau":" 🎁  ",
  "ninja":" 🥷🏼  ",
  "discret":" 🥷🏼  ",
  "heureux":" 😁  ",
  "heureuse":" 😁  ",
  "joyeux":" 😁  ",
  "joyeuse":" 😁  ",
  "tais-toi":" 🤫  ",
  "taire":" 🤫  ",
  "rien vu":" 🙈  ",
  "rien entendu":" 🙉  ",
  "rien dis":" 🙊  ",
  "poulpe":" 🐙  ",
  "chat":" 🐈‍⬛  ",
  "chatte":" 🐈‍⬛  ",
  "minou":" 🐈‍⬛  ",
  "miel":" 🍯  ", 
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


 