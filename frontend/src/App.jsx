import './styles/App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import {ScrollContainer, ScrollPage} from "react-scroll-motion";
import MainSection from './components/mainSection';
import WhyUsSection from './components/whyUsSection';
import PeopleSection from './components/facultySection';
import GallerySection from './components/gallerySection';


function App(data) {
  return (
    <>
      <ScrollContainer>

          <NavBar/>

          <ScrollPage page={0}>
            <MainSection cardContent={data.cardContent}/>
          </ScrollPage>

          <ScrollPage page={1}>
            <WhyUsSection />
          </ScrollPage>

          <ScrollPage page={2}>
            <PeopleSection />
          </ScrollPage>

          <ScrollPage page={3}>
            <PeopleSection />
          </ScrollPage>

          <ScrollPage page={4}>
            <PeopleSection />
          </ScrollPage>

          <ScrollPage page={5}>
            <PeopleSection />
          </ScrollPage>

          <ScrollPage page={6}>
            <GallerySection />
          </ScrollPage>
          
          <ScrollPage page={7}>
            <Footer/>
          </ScrollPage>

      </ScrollContainer>
    </>
  );
}

export default App;
