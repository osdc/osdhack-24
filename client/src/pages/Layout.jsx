import ExploreCard from '../Components/ExploreCard/ExploreCard'
import About from '../Components/About/About';
import Timeline from '../Components/Timeline/Timeline';
import Home from './Home/Home';
import Prizes from '../Components/Prizes/Prizes';
import Events from '../Components/events/Events';
import Faculty from '../Components/Faculty/Faculty';

const Layout = () => {
    return (
        <>
            <Home />
            <About />
            <Events />
            <Prizes/>
            {/* <ExploreCard /> */}
            <Timeline />
            <Faculty/>
        </>
    )
}

export default Layout;