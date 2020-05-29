import React from 'react';
import { Link } from 'react-router-dom';

import { CategoryBox } from './CategoryBox';
import categories from './../content/categories.js';

export const Categories = () => (
    <div className="categories">
        {categories.map(category => (
                <Link className="categoryBox" to={`/category/${category.id}`}>
                    <CategoryBox
                        key={category.id}
                        title={category.title}
                        image={category.image}
                        alt={category.alt}
                    />
                </Link>
            )
        )}
    </div>
);
