// prettier-ignore
const images = [
  { src: "images/gym-1.jpg", name: "Gym -1 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-2.jpg", name: "Gym -2 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-3.jpg", name: "Gym -3 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-4.jpg", name: "Gym -4 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-5.jpg", name: "Gym -5 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-6.jpg", name: "Gym -6 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-7.jpg", name: "Gym -7 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-8.jpg", name: "Gym -8 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-9.jpg", name: "Gym -9 credits: robertcleoncio@yahoo.com.ph" },
  { src: "images/gym-10.jpg", name: "Gym -10 credits: robertcleoncio@yahoo.com.ph" },
];

//Adding prettier-ignore makes the extension ignore the node of code above

let currentIndex = 0;

const selectedImage = document.getElementById("selected-image");
const imageName = document.getElementById("image-name");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const thumbnails = document.querySelectorAll(".thumbnail");

// these lines are all "directions" you give to Javascript to find the locations you store the variables as "short-cuts" to refer to.

// this function is created to update the selected image and the displayed image name
function updateGallery() {
  console.log(currentIndex);
  selectedImage.src = images[currentIndex].src; // the "."" symbol is like a gate or door it references the left (parent) and then look to the instructions on the right. Here it is src(source) = whatever current source is in index of the created Array
  imageName.innerText = images[currentIndex].name;
}

function nextImage() {
  console.log("next"); //console logging the input in order to see steps
  currentIndex++; // this is incrementing the index
  if (currentIndex >= images.length) {
    //if statement only runs the code so long as the condition holds true
    currentIndex = 0;
  }
  updateGallery(); //here we "call" this function which was created prior so we dont repeat ourselves creating a cleaner code.
}

/* THIS IS WHERE I HAD THE MOST ISSUES 

The biggest issue to be solved was this: 

function prevImage() {
  console.log("previous");
  currentIndex--; // this is decrementing the current index which was our variable created
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } // issue here if I decrement at 0 it will go to negative index which does not exist.
  updateGallery();
}


My original solution was this:

// Created Variable to be repeated//

function imageRange() {
  return currentIndex < 0 || currentIndex >= images.length;
}
  This function is saying return true if 0 is greater than currentIndex  or currentIndex is greater than the images array length.

This was too long.  Kind of missed the point too. 
The thing is when decrementing index reaching beyond image length is impossible so account for both possibilities in one variable is kind of redundant
  
  The key issue  was this line of code  
  
  if (currentIndex >= images.length) {
    currentIndex = 0;

I missed what this code was saying. in order to create a decrement the conditions are different than when incrementing

  if (currentIndex < 0) {
    currentIndex = images.length - 1;

If current index is to hit negative make it the last index of Array.

*/

function prevImage() {
  console.log("previous");
  currentIndex--; // this is decrementing the current index which was our variable created
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateGallery();
}
// This changes current index to selected thumbnail index
function selectThumbnail(index) {
  currentIndex = index;
  updateGallery();
}

// event listeners
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", () => selectThumbnail(i)); //for loop
}
