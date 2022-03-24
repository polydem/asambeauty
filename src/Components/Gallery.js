const Gallery = (props) => {
const imagePath = props.gallery.path;
   
   return (
        <div className="product-images">
          <img src={imagePath} />
        </div>
      );
}

export default Gallery;