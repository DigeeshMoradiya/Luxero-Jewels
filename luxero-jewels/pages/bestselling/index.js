import { useRouter } from "next/navigation";
import React from "react";

export default function Bestselling() {
  const router = useRouter()
  const categories = [
    { title: 'Rings', desc: "Wedding Rings", image: 'bg-latest-1' },
    { title: 'Earring', desc: "Floral Earring", image: 'bg-latest-2' },
    { title: 'Necklaces', desc: "Stone Necklaces", image: 'bg-latest-3' },
    { title: 'Bracelets', desc: "Stylish Bangles", image: 'bg-latest-4' },
  ];

  const handleredirect = () => {
    router.push("/component/weddingrings")
    console.log("dssds");
    
  }
  return (
    <div className="px-6 py-5">
      {/* Section Header */}
      <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">
        Best Selling
      </h4>
      <h4 className="text-center py-2 text-md font-gtAmerica text-[#71717A] font-medium">
        Explore our most sought-after jewelry pieces that combine elegance and allure
      </h4>

      {/* Grid Section */}
      <div className="py-5 bg-white overflow-auto">

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {categories?.map((item, i) => <div key={i} className={`relative group ${item.image} bg-cover bg-no-repeat bg-center cursor-pointer h-[330px]`}>
            <div div className="bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center opacity-100 transition-opacity duration-300 h-full w-full px-8 py-9 3xl:min-h-96 2xl:min-h-60 1xl:min-h-72 ">
              <div className="text-white ">
                <h3 className="font-medium font-freight-medium font-gtAmerica mb-1">{item?.title}</h3>

                <h2 className="text-3xl py-2 font-poiretOne text-white font-extrabold">
                  {item?.desc}</h2>
                <button className="mt-28 px-4 py-2 text-black border border-white  text-nowrap bg-white hover:bg-black hover:text-white hover:border-black" onClick={handleredirect}>Shop Now</button>
              </div>
            </div>
          </div>)
          }

        </div >
      </div>
    </div>
  );
}
