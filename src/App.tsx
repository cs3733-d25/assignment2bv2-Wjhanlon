import './App.css'
import { Title } from "./title.tsx";
import { Intro } from "./intro.tsx";
import { Hobby1} from "./hobby1.tsx";

function App() {

  return (
    <>
        <Title />
        <Intro name="Patrick Tirch" name2="William Hanlon" />
        <Hobby1 />
    </>
  )
}

export default App
