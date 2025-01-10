
import { Helmet } from 'react-helmet';
import Banner from '../Components/Banner';
import WhyChooseUs from '../Components/WhyChooseUs';
import TrendingServices from '../Components/TrendingServices';
import CommentSection from '../Components/CommentSection';
import PartnerSection from '../Components/PartnerSection';
import StatsSection from '../Components/StatsSection';

const Home = () => {
    return (        
        <div>
            <Helmet>
                <title>Home || ElectroSavvy</title>
            </Helmet>
            <Banner></Banner>
            <TrendingServices></TrendingServices>
            <WhyChooseUs></WhyChooseUs>
            <PartnerSection></PartnerSection>
            <StatsSection></StatsSection>
            <CommentSection></CommentSection>

            
        </div>
    );
};

export default Home;