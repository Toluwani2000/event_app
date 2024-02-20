import styles, { layout } from "../style"
import { EventInfo, Checkout, Events } from './'


const EventDetails = () => (

    <section id='home' className={`flex flex-1 flex-col`}>
      <div className={`${layout.section}`}>
        <EventInfo /> 
        <Checkout />       
      </div>
      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <Events />
      </div>
    </section>
    
)


export default EventDetails