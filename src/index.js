// 1st select the element
const btn = document.querySelector('#click-me');
// console.log(btn);

// 2nd add event listener
// btn.addEventListener('event', 'behavior')
btn.addEventListener('click', (event) => {
  // console.log(event); // click ITSELF
  // console.log(event.currentTarget); // element that we clicked on
  // btn == event.currentTarget
  btn.innerText = 'Wait please...';
  event.currentTarget.disabled = true;
});
