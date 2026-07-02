const UserCard = ({ children }) => {
  return (
    <>
      <h1>children passed as props </h1>
      {children}
    </>
  );
};

export default UserCard;
