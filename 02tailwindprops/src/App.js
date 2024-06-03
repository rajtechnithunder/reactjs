import Card from "./components/Card";


function App() {

  let obj = {
    username: "rajtech",
    age: 24,
  };

  return (
    <>
      <h1 className=" bg-green-400 text-black p-4 rounded-xl mb-4">
        Hello world!
      </h1>
      <div className="flex flex-row gap-4">
        <Card username="rajTech" btnText="Click me" />
        <Card username="new" btnText="Visit me" />
        <Card username="Third" btnText="Visit me" />
      </div>
    </>
  );
}

export default App;
