import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// IMAGENES REVISAR POR QUE SI SE MUEVEN SE DAÑA LA RUTA
import imgBebidas1 from '../Assets/sliderBebidas/kobby-mendez.jpg'
import imgBebidas2 from '../Assets/sliderBebidas/douglas-lopez.jpg'
import imgBebidas3 from '../Assets/sliderBebidas/joseph-sun.jpg'
import imgBebidas4 from '../Assets/sliderBebidas/licor-beirao.jpg'
import imgBebidas5 from '../Assets/sliderBebidas/moritz-mentges.jpg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export const DrinksSection = () => {

    return (
        <div className="meat-section">

            <div className="meat-section__description">

                <h4 className="meat-section__title">
                    Bebidas
                </h4>

                <p className="meat-section__parrafo p-gray">
                    Prueba nuestras deliciosas bebidas, vinos, gaseosas, jugos naturales, licores nacionales e internacionales.
                </p>

            </div>

            <div className="meat-section__slider">
                <Swiper pagination={true} className="mySwiper">
                    <SwiperSlide>
                        <img src={imgBebidas1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgBebidas2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgBebidas3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgBebidas4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgBebidas5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    )
}
