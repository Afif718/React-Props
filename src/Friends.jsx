function Friends({ fNames }) {
  return (
    <div>
      {fNames.map((name) => (
        <li key={name}> {name}</li>
      ))}
    </div>
  );
}

export default Friends;
