import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// IMAGENES REVISAR POR QUE SI SE MUEVEN SE DAÑA LA RUTA
import imgCarne1 from '../Assets/sliderCarnes/alexandru-bogdan.jpg'
import imgCarne2 from '../Assets/sliderCarnes/emerson-vieira.jpg'
import imgCarne3 from '../Assets/sliderCarnes/emerson-vieira1.jpg'
import imgCarne4 from '../Assets/sliderCarnes/josh-olalde.jpg'
import imgCarne5 from '../Assets/sliderCarnes/mf-evelyn.jpg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export const MeatSection = () => {

    return (
        <div className="meat-section">

            <div className="meat-section__description">

                <h4 className="meat-section__title">
                    Carnes
                </h4>

                <p className="meat-section__parrafo">
                    Prueba nuestra exquisita carne acompañada de una ensalada de tomate, ademas podras agregarle unas deliciosas papas rústicas, podras pedir tu carne en el termino de cocción que prefieras.
                </p>

            </div>

            <div className="meat-section__slider">
                <Swiper pagination={true} className="mySwiper">
                    <SwiperSlide>
                        <img src={imgCarne1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgCarne2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgCarne3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgCarne4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgCarne5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    )
}
