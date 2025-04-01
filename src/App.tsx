import './App.css'
import { Title } from "./title.tsx";
import { Intro } from "./intro.tsx";
import { Hobby1} from "./hobby1.tsx";
import { Hobby2 } from "./hobby2.tsx";
import {List2} from "./list2.tsx";
import {Table2} from "./table2.tsx";
import {Form2} from "./form2.tsx";

function App() {

  return (
    <>
        <Title />
        <Intro name="Patrick Tirch" name2="William Hanlon" />
        <Hobby1 />
        <Hobby2 />
        <List2 />
        <Table2 />
        <Form2 />

    </>
  )
}

export default App
