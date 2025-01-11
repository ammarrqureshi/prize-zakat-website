import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { experts } from 'components/data';
const ExpertsSlider = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Meet Our Experts</h2>
        <p className="mb-8 text-center text-gray-600">
          Our expert team is here to help you understand our mission and strategy .
        </p>

        {/* Slider */}
        <div className="relative mx-auto max-w-4xl  ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="h-[22rem] rounded-lg  "
          >
            {experts.map((expert, index) => (
              <SwiperSlide key={index}>
                <div className="min-h-80 flex max-h-80 flex-col items-center rounded-lg bg-white p-6 shadow-lg">
                  <img src={expert.image} alt={expert.name} className="mb-4 h-32 w-32 rounded-full object-cover" />
                  <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
                  <p className="text-sm text-blue-600">{expert.role}</p>
                  <p className="mt-4 text-center text-gray-600">{expert.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button to Team Page */}
        <div className="mt-8 flex items-center justify-center text-center">
          <Link href="/team">
            <div className=" flex items-center justify-center gap-4 rounded-xl  px-4 py-2 text-accent-1 shadow-[0-25-35px] md:mr-11 md:px-6  md:py-4 ">
              <span className="flex items-center justify-center rounded-full bg-accent-1 p-6 text-white">
                <span className="material-icons">arrow_forward</span>
              </span>
              Meet the Whole Team
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSlider;
