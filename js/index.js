const activeProfile = document.querySelector(".amr--profile");
let profiles = ["img/profile.jpg", "img/profile.jpeg", "img/BillyBob.jpg"];
let index = 0;
let interval = null;

nextProfile = () => {
  index = (index === profiles.length - 1) ? 0 : index + 1;
  activeProfile.src = profiles[index];
}

activeProfile.addEventListener("mouseover", (e) => {
  interval = setInterval(nextProfile, 1500);
});

activeProfile.addEventListener("mouseout", (e) => {
  clearInterval(interval);
});


console.log("    *     ||   ||  ======  oo     *    ");
console.log("   ***    ||   ||    ||    oo    ***   ");
console.log("  *****   ||===||    ||    oo   *****  ");
console.log("   ***    ||   ||    ||          ***   ");
console.log("    *     ||   ||  ======  OO     *    ");
