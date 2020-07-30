import React from 'react';
import LogoGucci from '../image/Gucci/logo-gucci.jpg';
import DataGucci from '../data/datagucci';
import RenderGucci from '../renderdata/RenderGucci';

const Gucci = (props) => {
    return (
        <div className='brand-gucci'>
            <div className='logo-branch'>
                <img className='image-branch' src={LogoGucci} alt='Logo-Gucci' />
            </div>
            <div className='introduce-branch'>
                <div className='intro-content-branch'>
                    <h1>Fashion History: GUCCI</h1>
                    <p>Founded in 1921 by Guccio Gucci, The House of Gucci was originally a leather goods and luggage store in Guccio’s hometown of Florence.
                His London-honed skills, paired with classic Italian craftsmanship, breathed an air of sophistication into the leather goods industry. <br /><br />
                Gucci attracted customers quickly, and in 1938 the label expanded and opened a boutique in Rome. The equestrian-inspired accessories attracted a certain refined clientele, and the now signature horsebit and stirrup motifs were introduced to the line.<br /><br />
                In 1947, the brand introduced the famous "Bamboo Bag" – which would quickly become one of the biggest selling and timeless pieces that Gucci would make. This time, a difficult one in Italy’s history, would prove to be a growing period for the brand.
                The trademark green and red web was developed and trademarked in the 1950’s. Inspired by the saddle girth and moccasin, the dressage theme of Gucci continued throughout this decade. Guccio died in 1953 and his son Aldo, along with his other sons Vasco, Rodolfo, and Ugo, took over the company and led it to massive international success by opening the company’s first boutique in New York. Familial disputes rippled through the descendants on issues as personal as inheritances to corporate decisions and the operations of the stores.<br /><br />
                The 1960’s saw Gucci’s role in the international luxury market expand with stores opening in Paris, London, Hong Kong, Tokyo, and throughout the U.S. It was during this time that they adopted the interlocking G logo that now emblazons most of the design house’s wares, introduced the Flora scarf that would become a celebrity favorite, and debuted the Jackie O bag.<br /><br />
                While business seemed to boom, and celebrities were flocking to Gucci for the latest it-item, a storm was brewing behind the scenes, as the brothers’ poor business decisions had led the company to near bankruptcy. In 1982 Maurizio Gucci, son of Rodolfo, took the helm and Gucci became a public limited company.
                </p>
                </div>
            </div>
            <div className='product-branch'>
                {DataGucci.map(item =>
                    <RenderGucci
                        {...item}
                    />
                )}
            </div>
        </div>
    );
};

export default Gucci;