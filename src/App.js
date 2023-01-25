import React from "react";
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import Data from './cardData'

function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                // {...item}
                item={item}

                // img={item.img}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // country={item.country}
                // title={item.title}
                // price={item.price}
                // openSpot={item.openSpot}
                // location={item.location}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">
                {cards}
            </section>
        </div>
    )
}

export default App