
import PatrickTirchTrumpet from './assets/PatrickTirchTrumpet.jpg'

export function Hobby1() {
    return(
        <div>
            <img src={PatrickTirchTrumpet} alt="PatrickTirchTrumpet" width={600}/>
            <h2>Patrick's Hobby: Music</h2>
            <p id="hobby">
                I have been playing and listening to music since a very young age.
                I technically started playing trumpet in 3rd grade as Winthrop in my high school's performance of The Music Man.
                I have been in many different ensembles since and have played various styles of music from classical to jazz to orchestral.
                I also listen to many different genres of music in my free time.
            </p>
            <h3>My Experience</h3>
            Here's a list of all the music groups I have been a part of:
            <br />
            <ul id="groups">
                <li id="element1">Arlington High School production of The Music Man in 3rd grade</li>
                <li>Titusville Intermediate School Band</li>
                <li>Titusville Intermediate School Chorus</li>
                <li>Union Vale Middle School Band</li>
                <li>Union Vale Middle School Jazz Bands 1 + 2</li>
                <li>Arlington High School Wind Ensemble</li>
                <li>Arlington High School Philharmonia Orchestra</li>
                <li>Arlington High School Brass Ensemble</li>
                <li>Arlington High School Jazz 3 + Jazz Machine</li>
                <li>WPI Jazz Ensemble and Stage Band</li>
            </ul>
            <h3>My Favorites</h3>
            Here's a collection of my favorite music groups in certain genres:
            <table>
                <tbody>
                    <tr>
                        <th>Classic Rock</th>
                        <th>Alternative Rock</th>
                        <th>Jazz</th>
                        <th>Hip Hop / Rap</th>
                        <th>Miscellaneous</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Styx</td>
                        <td>Imagine Dragons</td>
                        <td>Miles Davis</td>
                        <td>Kendrick Lamar</td>
                        <td>Dua Lipa</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Toto</td>
                        <td>The Offspring</td>
                        <td>Louis Prima</td>
                        <td>JID</td>
                        <td>Bad Bunny</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Kansas</td>
                        <td>Fall Out Boy</td>
                        <td>Harry James</td>
                        <td>Saba</td>
                        <td>Masayoshi Takanaka</td>
                    </tr>
                </tbody>
            </table>

            <h2>What's your favorite music?</h2>
            <form>
                <label htmlFor="fullname">Enter your full name:</label>
                <input type="text" id="fullname" />
                <br />
                <label htmlFor="collegeyear">Select your academic year:</label>
                <select name="years" id="collegeyear">
                    <option value="frosh">Freshman</option>
                    <option value="soph">Sophomore</option>
                    <option value="jr">Junior</option>
                    <option value="sr">Senior</option>
                    <option value="grad">Grad Student</option>
                    <option value="prof">Professor</option>
                </select>
                <br />
                <br />
                <label htmlFor="favband">Enter your favorite artist/band:</label>
                <input type="text" id="favband" />
                <br />
                <label htmlFor="whyfavband">Explain what emotions you feel when listening to this artist/band:</label>
                <br />
                <textarea id="whyfavband" rows={3} cols={55}></textarea>
                <br />
                <br />
                Genres you listen to:
                <br />
                <input type="checkbox" id="pop" />
                <label htmlFor="pop">Pop</label>
                <br />
                <input type="checkbox" id="classicrock" />
                <label htmlFor="classicrock">Classic Rock</label>
                <br />
                <input type="checkbox" id="hardrock" />
                <label htmlFor="hardrock">Hard Rock</label>
                <br />
                <input type="checkbox" id="electronic" />
                <label htmlFor="electronic">Electronic</label>
                <br />
                <input type="checkbox" id="hiphoprap" />
                <label htmlFor="hiphoprap">Hip Hop / Rap</label>
                <br />
                <input type="checkbox" id="jazz" />
                <label htmlFor="jazz">Jazz</label>
                <br />
                <input type="checkbox" id="country" />
                <label htmlFor="country">Country</label>
                <br />
                <input type="checkbox" id="classical" />
                <label htmlFor="classical">Classical</label>
                <br />
                <label htmlFor="other">Other:</label>
                <input type="text" id="other" />
                <br />
                <br />
                How often do you listen to music?
                <br />
                <input type="radio" name="frequency" value="Less than 1 hour a day" id="<1hraday" />
                <label htmlFor="<1hraday">Less than 1 hour a day</label>
                <br />
                <input type="radio" name="frequency" value="1 hour a day" id="1-2hraday" />
                <label htmlFor="1-2hraday">1-2 hours a day</label>
                <br />
                <input type="radio" name="frequency" value="3-4 hours a day" id="3-4hraday" />
                <label htmlFor="3-4hraday">3-4 hours a day</label>
                <br />
                <input type="radio" name="frequency" value="5 or more hours a day" id=">5hraday" />
                <label htmlFor=">5hraday">5 or more hours a day</label>
                <br />
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
)
}