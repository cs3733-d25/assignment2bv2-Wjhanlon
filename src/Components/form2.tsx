export function Form2(){
   return( <>
        <h2>Musical Survey Form</h2>
        <form>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" id="name" placeholder="enter text here"/>
            <br/>
            <label htmlFor="email">Enter Your Email</label>
            <input type="text" id="email" placeholder="enter text here"/>
            <br/>

            <label>What are your favorite genres?</label>
            <br/>
            <label htmlFor="rock"> Rock</label>
            <input type="checkbox" id="rock"/>
            <label htmlFor="rap"> Rap</label>
            <input type="checkbox" id="rap"/>
            <label htmlFor="pop"> Pop</label>
            <input type="checkbox" id="pop"/>
            <label htmlFor="jazz"> Jazz</label>
            <input type="checkbox" id="jazz"/>
            <label htmlFor="other"> Other</label>
            <input type="checkbox" id="other"/>
            <br/>

            <label>How experienced are you with music production?</label>
            <br/>
            <label htmlFor="beginner">Beginner</label>
            <input type="radio" id="beginner" name="experience" value="beginner"/>
            <br/>
            <label htmlFor="intermediate">Intermediate</label>
            <input type="radio" id="intermediate" name="experience" value="intermediate"/>
            <br/>
            <label htmlFor="expert">Expert</label>
            <input type="radio" id="expert" name="experience" value="expert"/>
            <br/>

            <label htmlFor="comments">Additional Comments</label>
            <br/>
            <textarea id="comments" placeholder="enter text here" rows={3} cols={55}></textarea>
            <br/>
            <label htmlFor="daw">Choose your favorite DAW (Digital Audio Workspace</label>
            <select id="daw" name="daw">
                <option value="Ableton Live">Ableton Live</option>
                <option value="FL Studio">FL Studio</option>
                <option value="Reaper">Reaper</option>
                <option value="Garageband">Garageband</option>
                <option value="Logic Pro">Logic Pro</option>
                <option value="Other">Other</option>
            </select>
            <br/>
            <button type="submit">Submit</button>
        </form>

    </>
   )
}