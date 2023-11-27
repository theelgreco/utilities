function generateRandomRGBString() {
  let str = "";

  for (let i = 0; i < 9; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    if (i % 3 === 0) {
      str = `${str} ${randomNum}`;
    } else {
      str = `${str}${randomNum}`;
    }
  }

  return `rgb(${str.trimStart()})`;
}
