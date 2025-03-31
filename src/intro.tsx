
interface Props {
    name: string;
    name2: string;
}

export function Intro(props: Props) {
    return(
        <div>
            <p>
                We are team 42, {props.name} and {props.name2}. We are both sophomore Computer Science students. {props.name} is on the WPI Varsity Swim and Dive team, as well as playing trumpet for the WPI Stage Band. His favorite Pokemon is Lucario. {props.name2} enjoys learning about mixing, mastering, and composing music. He currently is in a band playing guitar, as well as working on his own musical projects. His favorite pokemon is the humble Shuppet.
            </p>
        </div>
    )
}