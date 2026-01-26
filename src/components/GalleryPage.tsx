import './Components.css';

const images = import.meta.glob('../assets/gallery-img/*.{png,jpg,jpeg}', {eager: true, as: 'url'})
const imagesList = Object.values(images).map((image, index) => (
  <img key={index} src={image} alt={`Image ${index}`} className="gallery-img" onClick={()=>openImage(image)} />
));

const openImage = (image: string) => {
  window.open(image, "_blank");
}

const GalleryPage = () => {
    return(
      <div className="gallery-wrapper">
        <div className="gallery-header">
          <p>My Gallery</p>
        </div>
        <div className="gallery-body">
          <div className="gallery-scroller">
            {imagesList}
          </div>
        </div>
      </div>
    );
};

export default GalleryPage;