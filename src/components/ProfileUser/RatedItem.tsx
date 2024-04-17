const RatedItem = () => {
  return (
    <div className=" my-5 flex flex-col gap-5">
      <div className="text-sm flex gap-5 border-b border-gray-600 py-5">
        <img
          className="w-[100px] h-max rounded"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              Archer <span className="text-[#abb7c4]">(2012)</span>
            </a>
          </h6>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your rate:
          </p>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">8.0</span> /10
          </p>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your reviews:
          </p>
          <h6>Best Marvel movie in my opinion</h6>
          <p className="text-[#4280bf] mt-2">02 April 2017</p>
        </div>
      </div>
      <div className="text-sm flex gap-5 border-b border-gray-600 py-5">
        <img
          className="w-[100px] h-max rounded"
          src="https://www.huntlancer.com/wp-content/uploads/2020/07/Beauty-and-the-Beast-Movie-Poster-Art-by-Kyle-Lambert.jpg"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              Beauty and the Beast
              <span className="text-[#abb7c4]">(2019)</span>
            </a>
          </h6>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your rate:
          </p>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">8.9</span> /10
          </p>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your reviews:
          </p>
          <h6>Best Marvel movie in my opinion</h6>
          <p className="text-[#4280bf] mt-2">02 April 2019</p>
        </div>
      </div>
      <div className="text-sm flex gap-5 ">
        <img
          className="w-[100px] h-max rounded"
          src="https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              thor love and thunder{" "}
              <span className="text-[#abb7c4]">(2015)</span>
            </a>
          </h6>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your rate:
          </p>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">8.0</span> /10
          </p>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your reviews:
          </p>
          <h6>Best Marvel movie in my opinion</h6>
          <p className="text-[#4280bf] mt-2">02 April 2017</p>
        </div>
      </div>
    </div>
  );
};

export default RatedItem;
