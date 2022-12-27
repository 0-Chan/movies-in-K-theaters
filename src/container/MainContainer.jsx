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
    // e.target.src = '/images/onError-main.jpg';
    e.target.onerror = null;
  };

  SwiperCore.use([Autoplay]);

  return (
    <div className="h-screen">
      <div>
        <h1 className="text-center font-semibold text-6xl text-gray-700">
          TOP 박스오피스
        </h1>
      </div>

      <Swiper
        className="font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[42%]"
        spaceBetween={50}
        slidesPerView="1"
        effect="coverflow"
        grabCursor
        centeredSlides
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
          320: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
            effect: 'coverflow',
          },

          1300: {
            slidesPerView: 3,
            spaceBetween: 30,
            effect: 'coverflow',
          },
        }}
      >
        {dailyboxoffice.map((movie, index) => (
          <SwiperSlide key={movie.movieCd}>
            <div className="max-w-[90%] max-h-[90%]">
              <div>
                <img src={`https://top10.netflix.com/images/big_numbers/${index + 1}.png`} alt="number" width="64" height="64" className="object-cover self-start -mt-1 ml-7" />
              </div>
              <div className="">
                <div>
                  <h3 className="text-3xl text-center text-gray-900 truncate">
                    {movie.movieNm}
                  </h3>
                  <p className="text-md text-gray-700 ml-3 mb-2">
                    누적&nbsp;
                    { Number(movie.audiAcc) > 10000 ? Math.floor(Number(movie.audiAcc) / 10000) : '1' }
                    만
                  </p>
                </div>
              </div>

              <li key={movie.movieCd}>
                <Link to={`/boxoffice/${movie.rank}`}>
                  {metadata.filter((datum) => datum.title === movie.movieNm).map((correspond) => (
                    <div key={correspond.poster} className="-mt-5">
                      <img
                        src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/0000${correspond.poster.slice(0, 2)}/${correspond.poster}/${correspond.poster}_320.jpg`}
                        onError={handleError}
                        alt="Movie postser"
                        className="object-cover scale-95"
                        width="512"
                        height="256"
                      />
                      <p className="text-center -mt-2">
                        {correspond.tags.map((tag) => <span className="bg-indigo-100 text-indigo-800 text-lg font-semibold mr-2 px-2.5 rounded" key={tag}>{tag}</span>)}
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
