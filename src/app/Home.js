"use client";

import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';

const Home = () => {
    const [showHeader, setShowHeader] = useState(false);

    const handleVisibility = (visible) => {
        setShowHeader(visible);
      };

    return (
        <>
            {!showHeader && <Header />}
            <Hero showHeader={showHeader} handleVisibility={handleVisibility} />
        </>)
}

export default Home;