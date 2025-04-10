export function Form1() {
    return(
        <>
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
        </>
    )
}