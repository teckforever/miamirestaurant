import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// IMAGENES REVISAR POR QUE SI SE MUEVEN SE DAÑA LA RUTA
import imgSalad1 from '../Assets/sliderEnsaladas/brooke-lark.jpg'
import imgSalad2 from '../Assets/sliderEnsaladas/chris-a-tweten.jpg'
import imgSalad3 from '../Assets/sliderEnsaladas/dan-gold.jpg'
import imgSalad4 from '../Assets/sliderEnsaladas/jez-timms.jpg'
import imgSalad5 from '../Assets/sliderEnsaladas/jonathan-farber.jpg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export const SaladSection = () => {

    return (
        <div className="meat-section bg-black">

            <div className="meat-section__description">

                <h4 className="meat-section__title">
                    Ensaladas
                </h4>

                <p className="meat-section__parrafo p-white">
                    Prueba nuestra deliciosa ensalada hecha con amor y con los mas esquisitos ingredientes, con la mas exclusiva seleccion de vegetales, cuidados de la mejor manera para que la disfrutes con tu familia
                </p>

            </div>

            <div className="meat-section__slider">
                <Swiper pagination={true} className="mySwiper">
                    <SwiperSlide>
                        <img src={imgSalad1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSalad2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSalad3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSalad4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSalad5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    )
}
