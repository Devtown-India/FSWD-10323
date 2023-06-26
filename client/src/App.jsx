import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=0f649da1&app_key=c4617349e4334b66e1a01ee216b5f10b`
      );
      setRecipes(res.data.hits);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <Header />
      <Search handleSearch={handleSearch} />
      {loading ? <h1 className="text-center text-2xl">Loading...</h1> : null}
      <div>
        {recipes.length > 0
          ? recipes.map(({ recipe }, index) => {
              return <RecipeCard recipe={recipe} key={index} />;
            })
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default App;
