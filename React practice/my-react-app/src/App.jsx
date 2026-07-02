import Alertbtn from "./components/alertbtn";
import UserCard from "./components/UserCard";

function onAlert() {
  alert("hey bro");
}
const App = () => {
  return (
    <>
      <UserCard>
        <h2>this is children</h2>
      </UserCard>

      <Alertbtn ae={onAlert} />
    </>
  );
};

export default App;
