import React from 'react';
import { Link } from 'react-router-dom';

import CategoryBox from './CategoryBox';
import categories from './../../content/categories';

const Categories = () => (
    <div className="categories">
        <h1 className="sectionTitle categories__title">Che cosa offriamo</h1>
        <div className="categories__wrap">
            {categories.map(category => (
                    <Link className="categoryBox" to={`/categoria/${category.url}`} key={category.id}>
                        <CategoryBox
                            title={category.title}
                            image={category.image}
                            alt={category.alt}
                        />
                    </Link>
                )
            )}
        </div>
    </div>
);

export default Categories;
