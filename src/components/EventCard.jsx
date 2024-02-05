
const EventCard = ({img, title, date, location, price, publisher}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[353px] md:mr-5 mr-0 my-5'>
        <img src={img} alt='event_img' className='w-[512px] h-[256px] object-contain'/>
        <h4 className='font-poppins font-semibold text-[20px]       leading-[32px] text-black'>{title}
        </h4>
        <div className='flex flex-col ml-2'>
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-black my-10'>
            {date}
            </p>
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-black my-10'>
            {location}
            </p>
            <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-black'>
                {price}
            </h4>
            <p className='font-poppins font-normal text-[16px] leading-[24px] text-black'>{publisher}</p>
        </div>
    </div>
)

export default EventCard