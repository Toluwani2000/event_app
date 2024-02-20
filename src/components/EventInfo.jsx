import styles, { layout } from "../style"
import { BriefcaseIcon, MapIcon } from '@heroicons/react/24/solid';
import { eventinfo } from '../constants'

const EventInfo = () =>  (
        <div className={`${layout.sectionInfo}`}>
            {eventinfo.map((info) => (
                <div key={info.id} className={`flex-1 flex flex-col justify-start w-[900px]`}>
                    <div>
                        <p className='font-poppins fonts-normal xs:text-[20px] text-[14px] xs:leading-[25px] leading-[21px]'>{info.date}</p>
                        <h1 className='font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[53px] leading-[33px]'>{info.title}</h1>
                    </div>
                    <div className={`my-3`}>
                        <p className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px]'>{info.about}</p>
                    </div>
                    <div className={`my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>Date and Time</h3>
                        <div className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px] flex'>
                         
                            <BriefcaseIcon className="h-6 w-6 text-black mr-3"/>
                            <span>{info.datentime}</span>
                        
                        </div>
                    </div>  
                    <div className={`my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>Location</h3>
                        <div className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px] flex'>
                        
                            <MapIcon className="h-6 w-6 text-black mr-3"/>
                            {info.location}
                        </div>
                    </div>
                        <div className={`my-3`}>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>About this event</h3>
                    <p className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px]'>{info.time}</p>
                    </div>
                    <div>
                        <h3 className='font-poppins font-semibold xs:text-[25px] text-[20px] xs:leading-[53px] leading-[43px]'>Organized By:</h3>
                        <p className='font-poppins fonts-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[16px]'>{info.organizer}</p>
                    </div>
                </div>
            ))}
        </div>
  );


export default EventInfo;
