interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  const handleClick = () => {
    title=capitaliseLetters(title);
    console.log(title);
  };

  function capitaliseLetters(title: string) {
    return title.toUpperCase()
  }
  return <h1 onClick={handleClick}>{title}</h1>;
}

export default AppHeader;
