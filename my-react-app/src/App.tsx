import { useState } from 'react';

type Props = {}

export default function App({}: Props) {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Hello World</h1>
            <h4>The below button has been clicked {count} times</h4>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <button onClick={() => setCount(0)}>Clear Me</button>
            <h4>I hope you enjoyed using my app</h4>
        </>
    )
}