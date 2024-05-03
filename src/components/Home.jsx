import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const data = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
      title: "First slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_1280.jpg",
      title: "Second slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_1280.jpg",
      title: "Third slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

  ]
  return (
    <Carousel>
      {
        data &&
        data.map((data, ind) => {
          return (
            <Carousel.Item>
              <img src={data.image} alt={data.title} style={{height:"100vh", width:"100%"}}/>
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>

          )
        })
      }


    </Carousel>
  );
}

export default Home;