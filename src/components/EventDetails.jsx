import styles, { layout } from "../style"
import { BeakerIcon, BriefcaseIcon, MapIcon } from '@heroicons/react/24/solid';
import { eventdetail }  from '../assets'
// import Carousel from "./Carousel"
import { eventinfo } from '../constants'

const EventDetails = () => (
    <section id='home' className={layout.section}>
      {/* <div className={`flex-1 flex ${styles.flexCenter} relative h-[449px]`}>
        <img src={eventdetail} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
      </div> */}

        <div className={`${layout.sectionInfo}`}>
            {eventinfo.map((info) => (
                <div key={info.id} className={`flex-1 flex flex-col ustify-start m-3`}>
                    <div className={`${styles.marginX} ${styles.marginY}`}>
                        <p className='font-poppins fonts-normal xs:text-[20px] text-[14px] xs:leading-[25px] leading-[21px]'>{info.date}</p>
                        <h1 className='font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[53px] leading-[33px]'>{info.title}</h1>
                    </div>
                    <div className={`${styles.marginX} my-3`}>
                        <p className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px]'>{info.about}</p>
                    </div>
                    <div className={`${styles.marginX} my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>Date and Time</h3>
                        <div className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px] flex'>
                         
                            <BriefcaseIcon className="h-6 w-6 text-black mr-3"/>
                            <span>{info.datentime}</span>
                        
                        </div>
                    </div>
                    <div className={`${styles.marginX} my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>Location</h3>
                        <div className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px] flex'>
                        
                            <MapIcon className="h-6 w-6 text-black mr-3"/>
                            {info.location}
                        </div>
                    </div>
                        <div className={`${styles.marginX} my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>About this event</h3>
                    <p className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px]'>{info.time}</p>
                    </div>
                    <div className={`${styles.marginX} my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>Organized By:</h3>
                        <p className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px]'>{info.organizer}</p>
                    </div>
                </div>
            ))}
            <h1>Hello </h1>
        </div>
        <div className={`${layout.sectionInfo}`}>
        <h1>How are you </h1>
        </div>
    </section>
    
    
)


export default EventDetails