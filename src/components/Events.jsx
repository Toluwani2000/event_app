import { event } from '../constants';
import styles from '../style';
import EventCard from './EventCard';
import Button from './Button';

const Events = () => (
    <section id='events' className={`${styles.flexCenter}`}>
      <div className='flex flex-row flex-wrap sm:justify-start justify-center w-full relative z-[1]'>
        {event.map((event) => (
          <EventCard key={event.id} {...event}/>
        ))}
        <div className='flex flex-col justify-center items-center'>
          <Button />
        </div>
      </div>
    </section>
)

export default Events