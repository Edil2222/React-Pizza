
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort.jsx";
import Products from "../components/Products/Products.jsx";

const Home = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <Products/>
            </div>
        </div>
    );
};

export default Home;