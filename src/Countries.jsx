const Countries = ({ counNames }) => {
  return (
    <>
      {counNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </>
  );
};

export default Countries;
