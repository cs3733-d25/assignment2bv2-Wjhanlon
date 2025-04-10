import MusicProd from '../assets/MusicProd.jpg'
import './Image.css'


export function Hobby2() {
    return(
        <>
                <div className="center-div">
                    <img src={MusicProd} alt="Hobby" width={600} height={300}/>
                </div>
                <h2>William's Hobby: Music Production</h2>
                <p className="hobbyp">
                    My favorite hobby at the moment is music production and mixing.
                    Understanding how my favorite songs are made has always intrigued me and this hobby allows me to explore the effects and effort that went into making each song.
                    Producing and mastering allow me to cut sounds up and put them together to create my own music and enhance what I make.
                    There are a lot of costs involved for equipment, but luckily many brands have student discounts that I can take advantage of to push my music to the next level.
                </p>

            </>
    )
}
