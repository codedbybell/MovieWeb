import React from 'react'
import './Movie.css'
import Details from './Details';


const movies = [
  {
    title: 'Toy Story 1',
    image: 'https://tr.web.img3.acsta.net/r_1920_1080/img/e7/b0/e7b0d17d328de7af403c669a098c0d64.jpg',
    img: 'https://m.media-amazon.com/images/S/aplus-media/vc/6e14c1ae-c97b-4aca-b9b5-bcf8543f3338._CR0,0,970,300_PT0_SX970__.jpg',
    year: '1995',
    time: '1.14 hours',
    imbd: '8,3/10',
    kind: 'Animation',
    description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.',
  },
  {
    title: 'Toy Story 2',
    image: 'https://www.filmler.com/wp-content/uploads/2022/02/oyuncak-hikayesi-2-600x900.jpg',
    img: 'https://miro.medium.com/v2/resize:fit:1200/1*Hu-s9on7NCfO7H-ZvPSJBw.jpeg',
    year: '1999',
    time: '1.30 hours',
    imbd: '7,9/10',
    kind: 'Animation',
    description: 'When Woody is stolen by a toy collector, Buzz and his friends set out to rescue him, but Woody finds the idea of immortality in a museum tempting.',
  },
  {
    title: 'Finding Nemo',
    image: 'https://tr.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/91/25/21/20154443.jpg',
    img: 'https://apps.watershed.co.uk/shared/imagecache/appimages/7214/default/16-9/750/23/07/fnemo_1sheet_fnw_ka1h_l_6427714eb6d51c59e6c9ab1aa235d1cac1e8119b.jpg',
    year: '2003',
    time: '1.40 hours',
    imbd: '8,1/10',
    kind: 'Animation',
    description: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
  },
  {
    title: 'Finding Dory',
    image: 'https://tr.web.img4.acsta.net/r_1920_1080/pictures/16/03/14/16/21/478890.jpg',
    img: 'https://snworksceo.imgix.net/ame-egl/7791b930-8a00-4d77-90b4-7f0f696d35ed.sized-1000x1000.jpg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces',
    year: '2016',
    time: '1.45 hours',
    imbd: '7,3/10',
    kind: 'Animation',
    description: 'Dory, a wide-eyed blue tang fish, suffers from memory loss every few seconds or so. The friendly but forgetful fish begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.',
  },
  {
    title: 'Incredible Family',
    image: 'https://tr.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/35/23/97/18866500.jpg',
    img: 'https://i.ytimg.com/vi/mTdpwzoOIP0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAANRyHpvTZF4luj4OOiFXid2aVGg',
    year: '2004',
    time: '1.55 hours',
    imbd: '8,0/10',
    kind: 'Animation',
    description: 'Bob Parr has given up his superhero days to live a quiet suburban life with his wife Helen and their three children. But when a new villain emerges, Bob is called back into action to save the world, with the help of his family.',
  },
  {
    title: 'Incredible Family 2',
    image: 'https://tr.web.img4.acsta.net/r_1920_1080/img/dd/51/dd516ff39cee000090cdb13f6e4d6995.jpg',
    img: 'https://i.ytimg.com/vi/Zb7cnP_n_Dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAjnLDOxBQaLteklZIC5Bnp-1oGTQ',
    year: '2018',
    time: '1.50 hours',
    imbd: '7,6/10',
    kind: 'Animation',
    description: 'Elastigirl is called to action to save the world, while Mr. Incredible must stay home to take care of the kids. But when a new villain emerges, the family must come together to save the day.',
  },
  {
    title: 'Ratatouille',
    image: 'https://tr.web.img4.acsta.net/r_1920_1080/img/89/6e/896e95d93807d69f57bc7492c55366c3.jpg',
    img: 'https://egetelgrafcom.teimg.com/egetelgraf-com/uploads/2024/08/ratatuy.jpg',
    year: '2019',
    time: '1.50 hours',
    imbd: '8,0/10',
    kind: 'Animation',
    description: 'A rat named Remy dreams of becoming a great chef, despite his family\'s wishes. When he finds himself in Paris, he teams up with a young kitchen worker to create culinary masterpieces, while avoiding the dangers of being discovered by humans.',
  },
  {
    title: 'Up',
    image: 'https://tr.web.img2.acsta.net/r_1920_1080/img/e4/6a/e46ac16c81de4e8d803a721932f3e298.jpg',
    img: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2015/3/16/1426524494256/2009-Pixar-film-Up-008.jpg?quality=85&auto=format&fit=max&s=e5cb47a0c0f9b24cb1baa7e7ceab3190',
    year: '2009',
    time: '1.40 hours',
    imbd: '8,2/10',
    kind: 'Animation',
    description: 'A retired balloon salesman named Carl Fredricksen fulfills his dream of visiting South America by tying thousands of balloons to his house and flying there. Along the way, he meets a'
  },
  {
    title: 'Inside Out',
    image: 'https://tr.web.img2.acsta.net/r_1920_1080/pictures/15/03/04/09/49/116335.jpg',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStYmBI9tBCkjpLZ2FdHRrTCxQOifCtalLVA&s',
    year: '2015',
    time: '1.35 hours',
    imbd: '8,1/10',
    kind: 'Animation',
    description: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house and school. As Riley struggles to adjust, her emotions try to guide her through this difficult transition. But when Joy and Sadness are accidentally swept into the far reaches of Riley\'s mind, the two must work together to get back to Headquarters, and Riley, before it\'s too late.',
  },
  {
    title: 'Coco',
    image: 'https://tr.web.img4.acsta.net/r_1920_1080/img/86/42/86423dfc4aea8afac1986c1c2c432879.jpg',
    img: 'https://c4.wallpaperflare.com/wallpaper/468/761/255/coco-pixar-animation-4k-8k-wallpaper-thumb.jpg',
    year: '2017',
    time: '1.45 hours',
    imbd: '8,4/10',
    kind: 'Animation',
    description: 'Despite his family\'s ban on music, young Miguel dreams of becoming a musician like his idol, Ernesto de la Cruz. After a series of events, Miguel finds himself in the Land of the Dead, where he meets his ancestors and learns about the importance of family and music.',
  },
  {
    title: 'Soul',
    image: 'https://tr.web.img4.acsta.net/r_1920_1080/pictures/20/10/16/20/05/4277880.jpg',
    img: 'https://i.ytimg.com/vi/xOsLIiBStEs/maxresdefault.jpg',
    year: '2020',
    time: '1.40 hours',
    imbd: '8,1/10',
    kind: 'Animation',
    description: 'Joe Gardner, a middle-school band teacher, has a near-death experience that separates his soul from his body. In the afterlife, he meets a soul named 22 who has never lived on Earth. Together, they embark on a journey to help Joe return to his body and fulfill his dream of becoming a jazz musician.',
  },
    {
    title: 'Luca',
    image: 'https://tr.web.img4.acsta.net/r_1920_1080/pictures/21/04/29/10/04/4023516.jpg',
    img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*_bd2eBY6fhLQB5YU.jpeg',
    year: '2021',
    time: '1.35 hours',
    imbd: '7,5/10',
    kind: 'Animation',
    description: 'Luca Paguro, a young sea monster, experiences a life-changing summer on the Italian Riviera. With his new best friend Alberto, he explores the human world above the surface, but must keep his true identity a secret from the humans who inhabit the town.',
  },
];


function Movie() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const handleCloseDetails = () => {
        setSelectedMovie(null);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        {selectedMovie ? (
          <Details movie={selectedMovie} onClose={handleCloseDetails} />
        ) : (
          <>
            <div className='header'>
              <div>
                <h1>Movie Library</h1>
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Search movies...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className='container'>
              {filteredMovies.length > 0 ? (
                <div className="movie-grid">
                  {filteredMovies.map((movie, index) => (
                    <div className="movie-card" key={index} onClick={() => setSelectedMovie(movie)}>
                      <img src={movie.image} alt={movie.title} />
                      <h3>{movie.title}</h3>
                      <p>Release Year: {movie.year}</p>
                      <p>Time: {movie.time}</p>
                      <p>IMDb Rating: {movie.imbd}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No movies found</p>
              )}
            </div>
          </>
        )}
      </>
    );
}

export default Movie