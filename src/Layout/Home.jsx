
import { Helmet } from 'react-helmet';
import Banner from '../Components/Banner';
import WhyChooseUs from '../Components/WhyChooseUs';
import TrendingServices from '../Components/TrendingServices';

const Home = () => {
    return (        
        <div>
            <Helmet>
                <title>Home || ElectroSavvy</title>
            </Helmet>
            <Banner></Banner>
            <TrendingServices></TrendingServices>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;