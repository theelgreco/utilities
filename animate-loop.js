// Only works on the client-side (requestAnimationFrame is only available in browser)

// _NOTES_

// - requestAnimationFrame(cb) takes a callback as an argument, in this case the function 'update'

// - update(time) takes an argument 'time', which requestAnimationFrame passes to it with the current browser time in ms

// - update is then recursively called each frame eventually returning when it meets the base case, in this case when the specified duration (2000ms) has passed

// - you can then do what you like inside the update function

// - the animate function merely gets the ball rolling by calling requestAnimationFrame with update which is then recursively called inside of itself

function animate() {
  const duration = 2000;
  const startTime = performance.now();

  function update(time) {
    const elapsedTime = time - startTime;
    if (elapsedTime > duration) return;
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
