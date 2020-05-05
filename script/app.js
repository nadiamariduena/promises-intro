//
//
// -1-

function delay(ms) {
  // __6__
  //
  return new Promise((resolve) => {
    // set time out is a function with 2 paramnters: resolve() and  }, ms);
    setTimeout(() => {
      resolve();
      // throw a function which is resolve
    }, ms);
    // the ms serve to know how many milliseconds the user will wait
    // now tell it HOW MUch?
    //
  });
}
// __2__declare a variable called 3000
//
let ms = 3000;
// __3__ Build the function call
delay(ms).then(myFunction);
// .then(); here you can either build a function inside the parenthesis or you can call the function.
//
//
// I decided to call a function that s going to be build in the next step, but before, be careful with the parentheses to the right side of the myFunction as if you added like so:(myFunction());, you will be calling the function in that moment and you will not let the "then" do its work, actually it will give you an ERROR. the "then" has a big task, so dont ignore it.
//
//
//__4__BUILD THE FUNCTION
//
function myFunction() {
  let text = document.querySelector(".text");
  //
  text.innerHTML = `It took me ${ms} ms to be done`;
  // THIS inner.html will happen only IF the function in line 32 is called, and only if the "then" in line 23 is triggered.
  // _5_NOW CREATE THE "then" content.
}

//
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
/*
// -1-
function delay(ms) {
  // -6
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
// -2
let ms = 3000;
// -3
delay(ms).then(myFunction);
// -4
function myFunction() {
  let text = document.querySelector(".text");
  // -5
  text.innerHTML = `It took me ${ms} ms to be done`;
}
*/
