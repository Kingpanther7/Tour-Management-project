import React from "react";
import Slider from 'react-slick'
import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoPlay:true,
        speed:1000,
        swipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,


        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                },
              },
              {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll:1,
                },
              },
        ]
    }
    return <Slider {...settings}>
        <div className="testimonial py-4 py-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ad id vitae consequatur minus? At nostrum exercitationem autem voluptas eos suscipit. Iusto libero molestias optio ut natus a voluptas dicta? </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2'alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 py-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore explicabo numquam provident, temporibus perferendis fuga libero neque aspernatur nam enim quibusdam obcaecati aliquam totam, optio culpa laudantium iure cum voluptatibus? </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2'alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Linda Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 py-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed repudiandae cumque? Recusandae possimus saepe ex sit nostrum tempora harum deserunt voluptatem laudantium quasi enim sapiente aut nulla, dolor accusantium. </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2'alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 py-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores consequuntur perspiciatis, libero a tempora ea, repudiandae vero qui suscipit ipsa corporis illum nemo, sapiente mollitia tenetur aperiam quidem molestiae repellat! </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2'alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Linda Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
}

export default Testimonials