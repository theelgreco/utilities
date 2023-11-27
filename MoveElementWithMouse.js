let startCoords = { x: null, y: null };
let selected = false;
let touching = false;

function handleMouseDown(e) {
  setMouseCoords(e, startCoords);
  selected = true;
}

function handleMouseMove(e, element) {
  if (!selected) return;

  const deltaX = e.clientX - startCoords.x;
  const deltaY = e.clientY - startCoords.y;
  updateElementCoords(element, deltaX, deltaY);
  setMouseCoords(e, startCoords);
}

function setMouseCoords(e, coords) {
  coords.x = e.clientX;
  coords.y = e.clientY;
}

function updateElementCoords(element, deltaX, deltaY) {
  let { left, top } = element.getBoundingClientRect();
  element.style.left = `${left + deltaX}px`;
  element.style.top = `${top + deltaY}px`;
}

function handleMouseUp() {
  selected = false;
}
