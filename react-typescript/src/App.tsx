import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonsList } from "./components/PersonsList";
import { Status } from "./components/Status";
import { LogedIn } from "./components/state/LogedIn";
import { User } from "./components/state/User";

function App() {
  const personName = {
    first: "Manvith",
    last: "Bujala",
  };
  const nameList = [
    {
      first: "Santosh",
      last: "Bujala",
    },
    {
      first: "Swetha",
      last: "Gangireddy",
    },
    {
      first: "Manvith",
      last: "Bujala",
    },
  ];
  return (
    <div className="App">
      <Greet name="Santosh Reddy Bujala" version={18} isLogedin={true} />
      <Person name={personName} />
      <PersonsList names={nameList} />
      <Status status="success"/>
      <Heading>Heading Text</Heading>
      <Oscar>
        <Heading>Inner Components</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{console.log('Button clicked', event, id)}}/>
      <Input value="test" handleChange={(event)=>console.log(event)}/>
      <LogedIn />
      <User />
    </div>
  );
}

export default App;
