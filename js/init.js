(function () {
  const grid = new Grid(document.getElementById("container"));
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => response.json())
    .then((breeds) => {
      const imageManipulator = new Loader(
        document.getElementById("image-manipulator")
      );
      const top15 = breeds.slice(0, 15);
      console.log("top15:", top15);
      grid.populate(top15);
    });
  // .catch((error) => {
  //   alert("error occurred " + error.message);
  // });
})();
