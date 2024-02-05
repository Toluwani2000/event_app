import { event } from '../constants'
import styles from '../style'
import EventCard from './EventCard'

const Events = () => (
    <section id='events' className={`${styles.paddingY} ${styles.flexCenter} `}>
      <div className='flex flex-wrap sm:justify-start justify-center w-full relative z-[1]'>
        {event.map((event) => (
          <EventCard key={event.id} {...event}/>
        ))}
      </div>
    </section>
)

export default Events