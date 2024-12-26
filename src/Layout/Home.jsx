
import { Helmet } from 'react-helmet';
import Banner from '../Components/Banner';

const Home = () => {
    return (        
        <div>
            <Helmet>
                <title>Home || ElectroSavvy</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;