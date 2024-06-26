import styles from "./style";
import { Forecast,Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero} from "./components/index";
import { Analytics } from '@vercel/analytics/react';


const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <Analytics />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
       <Forecast />
        <CardDeal />
        <Testimonials />
      
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;