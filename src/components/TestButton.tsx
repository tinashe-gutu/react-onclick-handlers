function TestButton(): JSX.Element {

const handleClick = ()=>console.log('hello all')

  return <button onClick={handleClick}>Make me do something when I'm clicked...</button>;
}

export default TestButton;
