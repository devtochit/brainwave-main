import { pricing } from '../constants';

const RoadmapList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
      {pricing.map((item) => (
        <div
          key={item.id}
          className='w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3'
        >
          <p className='body-2  font-grotesk min-h-[4rem] mb-3 font-bold text-white text-2xl'>
            {item.description}
          </p>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className='flex items-start py-5 border-t border-n-6'
              >
                {/* <img src={check} width={24} height={24} alt="Check" /> */}
                <p className='body-2 ml-4 text-white'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoadmapList;
