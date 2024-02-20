import styles, { layout } from "../style"
import { eventdetail }  from '../assets'
import { EventInfo, Checkout, Events, Footer } from './'


const EventDetails = () => (

    <section id='home' className={`flex flex-1 flex-col mx-10`}>
      <div className={`flex-1 flex ${styles.flexCenter} relative h-[200px]`}>
        <img src={eventdetail} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        {/* <Carousel image={images}/> */}
      </div>
      <div className={`${layout.section}`}>
        <EventInfo /> 
        <Checkout />       
      </div>
      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <Events />
      </div>
    <Footer />
    </section>
    
)


export default EventDetails