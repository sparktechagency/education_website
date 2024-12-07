import Navigate from '@/components/navigate/Navigate';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa6';

import notification from '../../../../public/article/profile.png';
import { useTranslations } from 'next-intl';

const page = () => {
  const notifications = [
    {
      id: 1,
      title: "They have an education industry group that focuses on compliance, contracts, and policy for educational institutions.",
      head:"free educational.....",
      time:"2.00",
      img: notification,
    },
    {
      id: 2,
      title: "They have an education industry group that focuses on compliance, contracts, and policy for educational institutions.",
      head:"free educational.....",
      time:"2.00",
      img: notification,
    },
    {
      id: 3,
      title: "They have an education industry group that focuses on compliance, contracts, and policy for educational institutions.",
     head:"free educational.....",
     time:"2.00",
      img: notification,
    },
  ];

  const p = useTranslations("profile")
  return (
    <div className="max-w-[1400px] m-auto">
      <div className="mt-4 mb-20">
      <div className="md:w-[20%]">
          <Navigate title={`${p("Notification")}`}></Navigate>
        </div>
        <div className="mt-11">
          <div className='text-xl font-semibold'>
            Total 128 Notification
          </div>
          {notifications.map((notification) => (
            <div
              className="border-b py-6 ml-5 flex justify-between items-center pr-4"
              key={notification.id}
            >
              <div className="flex md:gap-11 gap-3 ">
                <div>
                  <Image
                    width={80}
                    height={80}
                    src={notification.img}
                    alt={notification.title}
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <h3>{notification.head}</h3>
                    <p className="text-[#595959]">{notification.title}</p>
                  </div>
                </div>
              </div>
              <div>
                <h1>{notification.time}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
