import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import products from './data.js';
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Singleproduct from './singleproduct.js';
gsap.registerPlugin(ScrollTrigger)
let black = '#0A0A0A';
let offWhite = '#EDEEE9';



const Home = () => {

    // ******************* buttons to go places
    const cta = useRef(null);
    const contact = useRef(null);
    const mywork = useRef(null);

    let scrollToSection = (elementRef)=>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })

    }

    //********************** */ marquee moving effect
    useEffect(()=> {
    //gsap.fromTo(el, {opacity: 0}, {opacity:1, duration: 3 })

    let mobileTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".marq-cont",
        start: "-100% bottom",
        scrub: 1,
      }
    });

    mobileTL.to(".first", {duration: 2, xPercent: -100 })
            .to(".second", {duration: 2, xPercent: 100},"<")
            //.to(".container", {duration: 0.5, backgroundColor: black},"<")
            //.to(".cta", {duration: 2},"<");
    

    
}, [])
  return (
    <>
    <body className='body-index'>
    <section className="header"> 
            <div className="firstpart" >
                <div className="css-typing">
                    <h1 className="line1">HELLO.</h1>
                    <p  className="line2">I'M SOFI</p>
                    <p className="line3">ESTEVEZ.</p>
                </div>
                <a className="btn desplazar" onClick={() => scrollToSection(cta)}>                     
                 <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M95.1914 0H105.049V193.048H95.1914V0Z"/>
                        <path d="M100 200L0 100L6.95238 93.0476L100 186.143L193.048 93.0952L200 100.048L100 200Z"/>
                    </svg>
                </a>
            </div>
        </section>
        <div ref={cta}>

    <nav className='nav'>
      <a className='nav-link' onClick={() => scrollToSection(cta)}>About me</a>
      <a className='nav-link' onClick={()=> scrollToSection(mywork)} >My work</a>
      <a className='nav-link' onClick={() => scrollToSection(contact)}>Contact</a>
    </nav>
    <section className="marq" id='about' >
            <div className="about">
                <div className="about-div"></div>
            </div>
            <div className="marq-cont">
                <div className="marquee__inner first">
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                </div>
                <div className="marquee__inner second">
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                    <h2 className="marquee-item">ABOUT ME</h2>
                </div>
                <div className="about-text">
                    <p>
                        I love creating beautiful technology experiences.
                         I'm a Communications B.S., Certified Product Owner and full
                        stack developer based in Buenos Aires, Argentina.
                        <i className="italic">I've been working with IT products 
                        for the last 5 years, managing both remote and in-site teams.
                        </i>
                       I thrive by turning ideas into reality with a
                        human-centered approach.
                       
                    </p>
                </div>
            </div>
            </section>
    </div>
    <section className="mywork-section" ref={mywork} >
      <div className="work-column1">
        <h2 className="section-title">MYWORK</h2>
      </div>
      <div className='work-wrapper'>
        {products.map((product) => {
          return (
            <article key={product.id} className='project'>
              <div className='project-title1'>
                <Link to={`/${product.id}`} className='fonts'
                onClick={() => {window.scroll(0, 0);}}
                
                >{product.name}</Link>
              </div>
            </article>
          )
        }
        )}
      </div>
    </section>

    </body>
    </>
  )
}

export default Home;