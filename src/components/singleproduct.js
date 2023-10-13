import React from 'react';
import {Link, useParams} from 'react-router-dom';
import products from './data.js';
import './style.css'

const Singleproduct = () => {
    const {productId} = useParams();
    const product = products.find((product)=> product.id === productId);
    const {name, descripcion, tag1, tag2, tag3, seeMore, image1, image2, image3, image4, image5, details} = product;
    return (
       <>
       <div className='body-project'>
        <section className='project-page'>
            <Link to='/' className='back-parent'>
                <p>GO BACK</p>
                <div className="svg-dad" >              
                    <svg fill="currentColor" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.85 31.08">
                    <g>
                        <polygon points="30.85 14.21 5.04 14.21 17.4 1.84 15.57 0 .29 15.27 .3 15.28 0 15.59 15.49 31.08 17.32 29.24 4.9 16.81 30.85 16.81 30.85 14.21"/>
                    </g>
                </svg>
                </div>
            </Link>
            <div className="project-page-title">
                <h2>{name}</h2>
            </div>
            <div className="col1">
                <p className="descripcion" >{descripcion}</p>
            </div>
            
        </section>
        <div className="grid-project">
            <div className="tags">
                <div><p>{tag1} </p></div>
                <div><p>{tag2}</p></div>
                <div><p>{tag3}</p></div>
            </div>

            <a className="link"  href={seeMore} target='_blank'>See more</a>
        </div>

        <section className="section-project">
        <div className="grid-item">
            <img className='img-project' src={image1}/>
        </div>
        <div className="grid-item">
            <img className='img-project' src={image2}/>
        </div>
        <div className="grid-item">
            <img className='img-project' src={image3}/>
        </div>
        <div className="grid-item">
            <img className='img-project' src={image4}/>
        </div>
        <div className="grid-item">
            <img className='img-project' src={image5}/>
        </div>
        <div className="grid-item text">
            <p>{details}</p>
        </div>
    </section>
    </div>
    </> 
    )

}

export default Singleproduct;
