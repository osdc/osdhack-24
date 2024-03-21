import ExploreCard from '../Components/ExploreCard/ExploreCard'
import About from '../Components/About/About';
import Timeline from '../Components/Timeline/Timeline';
import Home from './Home/Home';

const Layout = () => {
    return (
        <>
            <Home />
            <About />
            <ExploreCard />
            <Timeline />
        </>
    )
}

export default Layout;