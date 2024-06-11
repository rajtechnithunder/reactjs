import { useState } from 'react';
import Card from "./components/Card";
import Form from "./components/Form";


function App() {
  const image1 = "https://images.pexels.com/photos/3862615/pexels-photo-3862615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const image3 = "https://images.pexels.com/photos/6177611/pexels-photo-6177611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const projectDetails = [
    {
      title: "Project 1",
      duration: "2 Months",
      cost: 1000,
    },
  ]

  const [component, setComponent] = useState(false)
  const [data, setData] = useState(projectDetails)

  const addNewProject = () => {
    setComponent(!component)
  }

  const handleGetData = (e) => {
    let x = [...data, e]
    setData(x)
    setComponent("")
  }

  console.log(data);
  return (
    <>
      <div className="flex h-screen flex-col bg-gray-100">
        <div className='mx-auto pt-6 px-[10%]'>

          <div className="flex">
            <h1 className="text-3xl font-bold uppercase">
              Projects
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-6 py-6 ">
            {data.map((e) =>
              <div>
                <Card
                  title={e.title}
                  duration={e.duration}
                  cost={e.cost}
                  img={e.img}
                />
              </div>
            )}
            <div
              className="flex w-[350] text-center justify-center items-center border-dashed border-4 border-gray-500 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-6 cursor-pointer hover:bg-slate-200"
              onClick={addNewProject}
            >
              <h6 className="text-2xl font-medium">Add <br /> New <br /> Project</h6>
            </div>
          </div>
          {component && <div className='flex'><Form getData={handleGetData} /></div>}
        </div>
      </div>
    </>
  );
}

export default App;
