import IconRating from "../assets/rating.png";
import IconHalfRating from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-white text-md py-2 px-3">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-[40px] text-white font-bold">
              Have a Crush on You
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconHalfRating} alt="" className="w-8 h-8" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white bg-black font-bold text-md hover:bg-gray-800">
                Detail
              </button>
              <button className="p-2 text-white bg-red-600 font-bold text-md hover:bg-red-800">
                Watch Movie
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={IconPay}
                alt="play"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
