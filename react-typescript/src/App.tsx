import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonsList } from "./components/PersonsList";
import { Status } from "./components/Status";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContex";
import { UserContextProvider } from "./components/context/UserContext";
import { Counter } from "./components/state/Counter";
import { LogedIn } from "./components/state/LogedIn";
import { User } from "./components/context/User";
import { MoutableRef } from "./components/ref/MoutableRef";
import { CounterClass } from "./components/class/CounterClass";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RamdomNumber } from "./components/restriction/RamdomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/pholymorpic/Text";


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
      <h1>React Azure Deployment</h1>
      <Greet name="Santosh Reddy Bujala" version={18} isLogedin={true} />
      <Person name={personName} />
      <PersonsList names={nameList} />
      <Status status="success" />
      <Heading>Heading Text</Heading>
      <Oscar>
        <Heading>Inner Components</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="test" handleChange={(event) => console.log(event)} />
      <LogedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MoutableRef />
      <CounterClass message="The Count Value is" />
      <Private isLogedin={true} component={Profile} />
      {/* <List
        items={["Santosh", "Swetha", "Manvith"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Santosh",
            last: "Bujala",
          },
          {
            id: 2,
            first: "Swetha",
            last: "Gangireddy",
          },
          {
            id: 3,
            first: "Manvith",
            last: "Bujala",
          },
        ]}
        onClick={(item) => console.log(item)}
      ></List>
      <h1>Restricting Props</h1>
      <RamdomNumber value={10} isPositive></RamdomNumber>
      <RamdomNumber value={-10} isNegative></RamdomNumber>
      <RamdomNumber value={0} isZero></RamdomNumber>
      <Toast position="center"></Toast>
      <CustomButton variant='primary' onClick={()=>console.log('Clicked')}>Primary Button</CustomButton>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor="someId" size='sm' color="secondary">Label</Text>
    </div>
  );
}

export default App;
