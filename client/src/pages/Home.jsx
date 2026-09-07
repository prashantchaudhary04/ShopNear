import BestSeller from "../componets/BestSeller"
import BottomBanner from "../componets/BottomBanner"
import Categories from "../componets/Categories"
// import Login from "../componets/Login"
import MainBanner from "../componets/MainBanner"
import NewsLetter from "../componets/NewsLetter"

const Home = () => {
  return (
    <div className="mt-2">
        <MainBanner></MainBanner>
        <Categories></Categories>
        <BestSeller></BestSeller>
        <BottomBanner></BottomBanner>
        <NewsLetter></NewsLetter>   
    </div>
  )
}

export default Home