// creates an array [] with all the imgs i want to use
var bugImages = [
    "/Users/Ladmyarioualalen/ADA/Exercices/Crash course HTML CSS/Images/scared-bug.jpg",
    "/Users/Ladmyarioualalen/ADA/Exercices/Crash course HTML CSS/Images/bugProfilePics.jpg",
    "/Users/Ladmyarioualalen/ADA/Exercices/Crash course HTML CSS/Images/bugTongue.jpg",
    "/Users/Ladmyarioualalen/ADA/Exercices/Crash course HTML CSS/Images/bugSmile.jpg"
];
// query the document for button and selects it / can do a querySelectorAll too
var greyButton = document.querySelector("button");
// query the document for img and selects it / can do a querySelectorAll too
var img = document.querySelector("img");

// Starting the array at [1] after homepage image
var bugImgCounter = 1;

// creates an Event when clicking on the button
greyButton.addEventListener("click", function(){
    if (bugImgCounter === 4){
        bugImgCounter = 0
    }
   img.src = bugImages[bugImgCounter]
    bugImgCounter = bugImgCounter + 1;
});

// Images by supergicale found on https://3docean.net/item/cartoon-bug-rigged/23600622 