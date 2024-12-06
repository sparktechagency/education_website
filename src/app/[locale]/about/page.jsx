import Image from 'next/image';

import img from '../../../../public/home/about.png';
import { useTranslations } from 'next-intl';

const page = () => {
    const about = [
        {
            imgaes: img
        },
        {
            imgaes: img
        },
        {
            imgaes: img
        },
        {
            imgaes: img
        }
    ]
    const m = useTranslations("aboutus"); 
  return (
    <div className="mb-20">
      <div className="bg-[#DBE3EA] py-8 px-4 ">
        <div className="max-w-[1400px] m-auto ">
          <h1 className="md:text-4xl text-2xl  font-bold">{m("Discover Who We Are")}</h1>
          <h1 className="text-white font-bold md:text-4xl text-2xl  mt-2">
            <span className="text-zinc-600">-</span> {m("what drives us")}
          </h1>
        </div>
      </div>
      <div className="max-w-[1400px] m-auto">
      <div className=" mt-11 mx-4 ">
        <Image src={img} width={1600} height={399} alt="asdf" />

        <h1 className="my-4 text-4xl font-semibold">Get to Know Us: Our Journey and Vision for Child Education</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia soluta est ex sunt deserunt recusandae obcaecati illum nulla natus omnis, nostrum, dolorem consequuntur quisquam inventore, non eaque? Eius, voluptas corrupti ratione fugiat distinctio molestiae ea ad nam sed aperiam necessitatibus, sint ab quod tempora, quasi numquam? Veritatis ad cumque rem, tempora optio ab explicabo totam dicta corrupti perferendis laudantium inventore ipsam rerum aliquid expedita praesentium enim dolore cum quasi dolores provident aliquam aut facilis. Repudiandae sint esse dolorum, mollitia rerum doloremque sunt ea exercitationem placeat nihil quaerat in recusandae, debitis ex a porro quisquam minima facere labore facilis ad, veritatis similique. Dignissimos possimus rerum libero, omnis voluptatibus quo pariatur maiores fugiat a voluptates iure eos magnam qui beatae, ad expedita sequi quis perspiciatis nemo. Possimus magni cumque perferendis laudantium! Dicta blanditiis sapiente temporibus. Sunt temporibus quidem, optio enim minus esse, repellat nisi nesciunt voluptatem perspiciatis nam dignissimos. Dignissimos, hic facilis.</p>
      </div>
      </div>

        
    </div>
  );
};

export default page;
