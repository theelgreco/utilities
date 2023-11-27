function checkIfInRange(element1, element2, range) {
  const element1Bounds = element1.getBoundingClientRect();
  const element2Bounds = element2.getBoundingClientRect();

  // prettier-ignore
  return (
    (element1Bounds.right >= element2Bounds.left - range && element1Bounds.left <= element2Bounds.right + range) && 
    (element1Bounds.bottom >= element2Bounds.top - range && element1Bounds.top <= element2Bounds.bottom + range)
  );
}
