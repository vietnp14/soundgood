import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import { VolumeContextProvider } from "../src/components/contexts/useVolumeContext";

const IndexPage = () => {
  return (
    <>
      <VolumeContextProvider>
        <div className="body">
          <Header />
          <Main />
          <Footer />
        </div>
      </VolumeContextProvider>
    </>
  );
};

export default IndexPage;
