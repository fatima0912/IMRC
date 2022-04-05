import 'bootstrap/dist/css/bootstrap.css'
import bore3 from './img/bore3.jpg';
import bore4 from './img/bore4.jpg';
import borewell from './img/borewell.jpg';
function Home() {
    return <div className='container'>
      <h2>carousel Example</h2>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={bore3} className="d-block w-100" alt=".."/>
      {/* <img src='bore3.jpg' width ="300px" alt=".."/> */}
     </div>
    <div className="carousel-item">
      <img src={bore4} className="d-block w-100" alt=".."/>
      </div>
    <div className="carousel-item">
      <img src={borewell} className="d-block w-100" alt=".." />
     </div>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div> 
}


export default Home;

