import { Navbar, Footer, EventDetails } from "../src/components";
import { eventdetail }  from '../src/assets'
import styles from "../src/style";

const EventDetail = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} bg-black-gradient`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex-1 flex ${styles.flexCenter} relative h-[300px]`}>
            <img src={eventdetail} alt="billing" className='w-[40%] relative z-[5]'/>
          </div>
        </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <EventDetails />
        </div>
      </div> 

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EventDetail
