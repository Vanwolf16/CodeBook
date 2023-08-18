import React from 'react'
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Faq } from './components/Faq';
import { Testimonials } from './components/Testimonial';
import { useTitle } from '../../hooks/useTitle';

export const HomePage = () => {
    useTitle("Access Latest Computer Science E-Books");
    return(
        <main>
            <Hero />
            <FeaturedProducts />
            <Testimonials />
            <Faq />
        </main>
    )
}