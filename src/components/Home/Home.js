import React from 'react';
import Cards from './Cards/Cards';
import InShort from './InShort/InShort';
import Video from './Video /Video';
import GoldenBook from '../GoldenBook/GoldenBook';
import Modal from '../Modal/Modal'
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <React.Fragment>
            <Cards/>
            <InShort/>
            <Video/>
            <GoldenBook/>
            <Modal />
            <Contact/>
        </React.Fragment>
    )
}

export default Home;