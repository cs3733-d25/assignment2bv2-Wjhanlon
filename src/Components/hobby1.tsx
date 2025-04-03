import './Image.css'
import PatrickTirchTrumpet from '../assets/PatrickTirchTrumpet.jpg'

export function Hobby1() {
    return(
        <>
            <div className="center-div">
            <img src={PatrickTirchTrumpet} alt="PatrickTirchTrumpet" width={600}/>
            </div>
            <h2>Patrick's Hobby: Music</h2>
            <p className="hobbyp">
                I have been playing and listening to music since a very young age.
                I technically started playing trumpet in 3rd grade as Winthrop in my high school's performance of The Music Man.
                I have been in many different ensembles since and have played various styles of music from classical to jazz to orchestral.
                I also listen to many different genres of music in my free time.
            </p>

        </>
    )
}