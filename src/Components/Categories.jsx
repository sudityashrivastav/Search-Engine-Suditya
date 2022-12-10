import "../Style/Categories.css";

const Categories = () => {
  var Suditya = ["All", "Image", "Video", "Newz", "Books", "More"];

  return (
    <div className="cateContainer">
      {
        Suditya.map((elem,key) => (
          <div key={key} className="categories">{elem}</div>
        ))
      }
    </div>
  )
}
export default Categories;