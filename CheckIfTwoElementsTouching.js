function checkTouching(element1, element2) {
  const element1Bounds = element1.getBoundingClientRect();
  const element2Bounds = element2.getBoundingClientRect();

  // prettier-ignore
  return (
          (element1Bounds.right >= element2Bounds.left && element1Bounds.left <= element2Bounds.right) && 
          (element1Bounds.bottom >= element2Bounds.top && element1Bounds.top <= element2Bounds.bottom)
      );
}
