import {useState} from "react";

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(2);

    const onClickCategory = (idx) => {
      setActiveIndex(idx)
    }

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, idx) => (
                        <li
                            onClick={() => onClickCategory(idx)}
                            className={activeIndex === idx ? 'active' : ''}
                            key={item}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;