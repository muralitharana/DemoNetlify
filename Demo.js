let myName = document.querySelector("#myName");

let newName = "";
let fullName = "Muralitharan";
let i = 0;
function nameTimer() {
  if (i < fullName.length) {
    newName = newName + fullName[i];
    myName.innerHTML = newName;
    i++;
    console.log("hai");
    setTimeout(nameTimer, 200);
  } else {
    i = 0;
    newName="";
    setTimeout(nameTimer, 200);
  }
}
nameTimer();
