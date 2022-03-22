console.log(1);
const day = prompt();

switch (day) {
  case `Monday`:
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `Tuesday`:
    console.log(`Prepare theory videos`);
    break;
  case `Wednesday`:
    console.log(`Hello, world`);
    break;
  case `Thursday`:
    console.log(`Hello, world`);
  case `Friday`:
    console.log(`Friday prayer`);
    break;
  case `Saturday`:
  case `Sunday`:
    console.log(`Have a Fun Weekend`);
    break;
  default:
    console.log(`Not a day`);
}
