import React from 'react'
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Faq } from './components/Faq';

export const HomePage = () => {
    return(
        <main>
            <Hero />
            <FeaturedProducts />
            <Faq />
        </main>
    )
}