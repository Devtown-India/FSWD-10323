const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');


const searchForRecipe = async()=>{
  try {
    ul.innerHTML=""
    const searchString = input.value;
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=286bc7ab&app_key=35a1884caeea3f9d221f90a10178d3de%09`
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    const recipes = data.hits;
    console.log(recipes);
    recipes.forEach(obj=>{
      const {recipe} = obj
      console.log(recipe);
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = recipe.image;
      li.innerHTML = recipe.label
      li.appendChild(img)
      ul.appendChild(li)
    })

  } catch (error) {
    
  }
}

button.addEventListener('click', searchForRecipe)