// idk if i'm gonna keep this, need to figure out how to send image
// from GalleryPage back to App to make a new program window for this

import './Components.css';

interface GalleryViewerProps{
  img: string,
}

const GalleryViewerPage = ({img}: GalleryViewerProps) => {
    return(
      <div className="gallery-viewer-wrapper">
        <div className="gallery-viewer-body">
          <img src={img} className="gallery-viewer-img" />
        </div>
      </div>
    );
};

export default GalleryViewerPage;