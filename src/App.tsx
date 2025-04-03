import './App.css'
import { Title } from "./Components/title.tsx";
import { Intro } from "./Components/intro.tsx";
import { Hobby1} from "./Components/hobby1.tsx";
import { List1 } from "./Components/list1.tsx"
import { Table1 } from "./Components/table1.tsx";
import { Form1 } from "./Components/form1.tsx";
import { Hobby2 } from "./Components/hobby2.tsx";
import { List2 } from "./Components/list2.tsx";
import { Table2 } from "./Components/table2.tsx";
import { Form2 } from "./Components/form2.tsx";

function App() {

  return (
    <>
        <Title />
        <Intro name="Patrick Tirch" name2="William Hanlon" />
        <br/>
        <div className="bothHobbies">
            <div className="PatrickHobby">
                <Hobby1 />
                <hr/>
                <List1 />
                <hr/>
                <Table1 />
                <hr/>
                <Form1 />
            </div>
            <br/>
            <hr/>
            <div className="WilliamHobby">
                <Hobby2 />
                <hr/>
                <List2 />
                <hr/>
                <Table2 />
                <hr/>
                <Form2 />
            </div>
        </div>
    </>
  )
}

export default App
