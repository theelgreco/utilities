function isElementOutsideContainer(element, container) {
  const containerBounds = container.getBoundingClientRect();
  const elementBounds = element.getBoundingClientRect();

  if (elementBounds.left <= containerBounds.left) {
    return "left";
  }

  if (elementBounds.top <= containerBounds.top) {
    return "top";
  }

  if (elementBounds.right >= containerBounds.right) {
    return "right";
  }

  if (elementBounds.bottom >= containerBounds.bottom) {
    return "bottom";
  }

  return false;
}
