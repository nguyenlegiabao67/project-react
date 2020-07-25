import React from 'react';
import productcolumn from '../data/productcolumn';
import ProductColumn from '../component/ProductColumn';
import { render } from '@testing-library/react';

const renderProductColumn = () => {

    const limit = 3;
    const totalpage = Math.ceil(productcolumn.length / limit);

    function changePage(page) {
        const indexLast = page * limit;
        const indexFirst = indexLast - limit;
        const currentPage = productcolumn.slice(indexFirst, indexLast);
        render(
            <div className='product-column'>
                {currentPage.map((item, idx) =>
                    <ProductColumn key={idx} {...item} />
                )}
            </div>
        )
    }
    //Render button Pagination
    function Pagination() {
        const pages = [];
        for (var i = 1; i <= totalpage; i++) {
            pages.push(i);
        }
        render(pages.map((page, key) =>
            <button key={key} className='pagination' onClick={() => changePage(page)}>{page}</button>))
    }
    return (
        <div className='product-category'>
            <div className='product-column'>
                {productcolumn.map((item, idx) =>
                    <ProductColumn key={idx} {...item} />
                )}
            </div>
            {Pagination()}
        </div>
    );
};

export default renderProductColumn;