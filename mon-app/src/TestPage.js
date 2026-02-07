import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from '../src/data/products'

function TestPage({ goToExercice, goToHome, goToTest2 }) {

   // const notWatched = movies.filter(x => !watchedMovies.some(y => x.id === y.id)); 

    return (
        <>
            <div>
                <Navbar title={"Page test"} goToExercice={goToExercice} goToHome={goToHome} goToTest={() => { }} goToTest2={goToTest2} />
            </div>

            <div>
                {products.map(product => (
                    <ProductCard id={product.id} price={product.price} name={product.name} inStock={product.inStock} onSale={product.onSale} />
                ))}
            </div>
        </>
    );
}

export default TestPage;