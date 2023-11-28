import Slider from 'react-slick';

const testimonials = [
  {
    image: '',
    name: '',
    designation: '',
    testimonial: '',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = () => {
  return (
    <div className='mt-10 flex flex-col items-center px-16'>
      <h2>Testimonials</h2>
      <Slider {...sliderSettings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
