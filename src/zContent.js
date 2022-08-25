import { useState } from "react";

const Content = () => {
    const [getName, setName] = useState('YU');

    const handleNameChange = () =>{
        const names = ['aa','bb','cc'];
        const int = Math.floor(Math.random()*3);
        // return names[int]
        setName(names[int])
    }

    const handleClick = () => {
        console.log("You clicked it")
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicking`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                {/* Hello {handleNameChange()} */}
                Hello {getName}
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={() => handleClick2('YU')}>Click2</button>
            <button onClick={(e) => handleClick3(e)}>Click3</button>
        </main>
    )
}
export default Content