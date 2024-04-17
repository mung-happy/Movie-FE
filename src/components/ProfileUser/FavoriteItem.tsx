const FavoriteItem = () => {
  return (
    <div className="my-5 flex flex-col gap-3">
      <div className="sm:flex gap-5 items-center">
        <img
          className="w-[180px] rounded"
          src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              oblivion <span className="text-[#abb7c4]">(2012)</span>
            </a>
          </h6>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">8.1</span> /10
          </p>
          <p className="sm:border-b border-[#405266] sm:pb-6 sm:mb-6">
            Earth's mightiest heroes must come together and learn to fight as a
            team if they are to stop the mischievous Loki and his alien army
            from enslaving humanity...
          </p>
          <p className="run-time">
            {" "}
            Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
          </p>
          <p>
            Director:{" "}
            <a className="text-[#4280bf] hover:text-[#dcf836]" href="#">
              Joss Whedon
            </a>
          </p>
          <p>
            Stars:{" "}
            <a className="text-[#4280bf] hover:text-[#dcf836]" href="#">
              Robert Downey Jr.,
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="sm:flex gap-5 items-center">
        <img
          className="w-[180px] rounded"
          src="https://c8.alamy.com/comp/F762XE/film-movie-poster-of-titanic-F762XE.jpg"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              Titanic <span className="text-[#abb7c4]">(2008)</span>
            </a>
          </h6>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">9.9</span> /10
          </p>
          <p className="sm:border-b border-[#405266] sm:pb-6 sm:mb-6">
            Earth's mightiest heroes must come together and learn to fight as a
            team if they are to stop the mischievous Loki and his alien army
            from enslaving humanity...
          </p>
          <p className="run-time">
            {" "}
            Run Time: 2h07’ . <span>MMPA: PG-13 </span> .
          </p>
          <p>
            Director:{" "}
            <a className="text-[#4280bf] hover:text-[#dcf836]" href="#">
              Joss Whedon
            </a>
          </p>
          <p>
            Stars:{" "}
            <a className="text-[#4280bf] hover:text-[#dcf836]" href="#">
              Robert Downey Jr.,
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="sm:flex gap-5 items-center">
        <img
          className="w-[180px] rounded"
          src="https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              Mage <span className="text-[#abb7c4]">(2016)</span>
            </a>
          </h6>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">8.6</span> /10
          </p>
          <p className="sm:border-b border-[#405266] sm:pb-6 sm:mb-6">
            Earth's mightiest heroes must come together and learn to fight as a
            team if they are to stop the mischievous Loki and his alien army
            from enslaving humanity...
          </p>
          <p className="run-time">
            {" "}
            Run Time: 1h57’ . <span>MMPA: PG-13 </span> .
          </p>
          <p>
            Director:{" "}
            <a className="text-[#4280bf] hover:text-[#dcf836]" href="#">
              Joss Whedon
            </a>
          </p>
          <p>
            Stars:{" "}
            <a className="text-[#4280bf] hover:text-[#dcf836]" href="#">
              Robert Downey Jr.,
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
