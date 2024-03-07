function GetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error !"), 2000);
  });
}
