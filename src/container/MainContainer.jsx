import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,
{
  EffectCoverflow, Navigation, Autoplay,
}
  from 'swiper';

import { get } from '../utils';
import metadata from '../data/metadata';

import 'swiper/swiper-bundle.min.css';

export default function MainContainer() {
  const dailyboxoffice = useSelector(get('dailyBoxOffice'));

  if (!dailyboxoffice) {
    return (
      <p>Loading...</p>
    );
  }

  const handleError = (e) => {
    e.target.onerror = null;
  };

  SwiperCore.use([Autoplay]);

  return (
    <div className="h-screen flex justify-center">
      <div className="text-center font-semibold text-3xl md:text-6xl text-gray-700">
        TOP 박스오피스
      </div>

      <Swiper
        className="font-black absolute justify-center pt-12 h-full"
        slidesPerView={1}
        effect="coverflow"
        grabCursor
        centeredSlides
        centeredSlidesBounds
        navigation
        modules={[EffectCoverflow, Navigation]}
        pagination={{
          clickable: true,
          type: 'fraction',
        }}
        coverflowEffect={{
          rotate: 45,
          stretch: -100,
          depth: 400,
          modifier: 1,
          slideShadows: false,
          scale: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {dailyboxoffice.map((movie, index) => (
          <SwiperSlide key={movie.movieCd}>
            <div>
              <div>
                <div className="flex justify-center sm:justify-start sm:ml-32 md:ml-52 lg:ml-0">
                  <img
                    src={`https://top10.netflix.com/images/big_numbers/${index + 1}.png`}
                    alt="number"
                    className="w-10 h-10 md:w-16 md:h-16"
                  />
                </div>
                <h3 className="text-3xl text-center text-gray-900 truncate">
                  {movie.movieNm}
                </h3>
                <p className="text-md text-center text-gray-700">
                  누적&nbsp;
                  { Number(movie.audiAcc) > 10000 ? Math.floor(Number(movie.audiAcc) / 10000) : '1' }
                  만
                </p>
              </div>

              <li key={movie.movieCd}>
                <Link to={`/boxoffice/${movie.rank}`}>
                  {metadata.filter((datum) => datum.title === movie.movieNm).map((correspond) => (
                    <div key={correspond.poster} className="mx-auto my-0 w-2/3 sm:w-1/2 md:w-5/12 lg:w-full">
                      <img
                        src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/0000${correspond.poster.slice(0, 2)}/${correspond.poster}/${correspond.poster}_320.jpg`}
                        onError={handleError}
                        alt="Movie postser"
                      />
                      <p className="text-center">
                        {correspond.tags.map((tag) => <span className="bg-indigo-100 text-indigo-800 text-sm md:text-lg font-semibold mr-2 px-2.5 rounded" key={tag}>{tag}</span>)}
                      </p>
                    </div>
                  ))}
                </Link>
              </li>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
