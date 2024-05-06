const categoryList = document
  .getElementById("categories")
  .querySelectorAll(".item");
console.log("Number of categories:", categoryList.length);

categoryList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
