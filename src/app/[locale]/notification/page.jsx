import Navigate from '@/components/navigate/Navigate';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa6';

import notification from '../../../../public/article/profile.png';

const page = () => {
  const notifications = [
    {
      id: 1,
      title: "News Reminder",
      time: "1 hour ago",
      img: notification,
    },
    {
      id: 2,
      title: "System Update",
      time: "2 hours ago",
      img: notification,
    },
    {
      id: 3,
      title: "Meeting Alert",
      time: "3 hours ago",
      img: notification,
    },
  ];
  return (
    <div className="max-w-[1400px] m-auto">
      <div className="mt-4 mb-20">
      <div className="md:w-[20%]">
          <Navigate title={'Notification'}></Navigate>
        </div>
        <div className="mt-11">
          {notifications.map((notification) => (
            <div
              className="border-b py-6 ml-5 flex justify-between items-center pr-4"
              key={notification.id}
            >
              <div className="flex md:gap-11 gap-3 ">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={notification.img}
                    alt={notification.title}
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <h3>{notification.title}</h3>
                    <p className="text-[#595959]">{notification.time}</p>
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
