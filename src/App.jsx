import styles from './style'

import { Navbar, Hero, Events, Footer} from './components'
// import { navLinks } from './constants';

const App = () => (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Hero />      
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Events />
          <Footer />
        </div>
      </div>
    </div>
);

export default App