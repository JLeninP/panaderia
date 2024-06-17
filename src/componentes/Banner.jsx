import '../css/estilo1.css'
import banner from '../assets/img/banner.jpg'
function Banner(){
    return(
        <div className="cajaBanner">
            <img className='banner' src={banner} alt="" />
        </div>
    )
}
export default Banner