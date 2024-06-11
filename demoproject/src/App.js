import { useState } from 'react';
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const projectDetails = [
    {
      title: "Project 1",
      duration: "1",
      cost: 1000,
    },
    {
      title: "Project 2",
      duration: "2",
      cost: 2000,
    },
  ]

  const [component, setComponent] = useState(false)
  const [data, setData] = useState(projectDetails)

  const [isOpen, setIsOpen] = useState(false);

  const addNewProject = () => {
    setComponent(!component)
  }

  const handleGetData = (e) => {
    let x = [...data, e]
    setData(x)
    setComponent("")
  }

  const deleteProject = (index) => {
    const result = data.filter((prev, prevIndex) => prevIndex !== index)
    console.log(result);
    setData(result)
  }

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
            {data.map((e, index) =>
              <div>
                <Card
                  key={index}
                  index={index}
                  title={e.title}
                  duration={e.duration}
                  cost={e.cost}
                  img={e.img}
                  onDelete={deleteProject}
                />
              </div>
            )}
            <div
              className="flex w-[350] text-center justify-center items-center border-dashed border-4 border-gray-500 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-6 cursor-pointer hover:bg-slate-200"
              onClick={addNewProject}
            >
              <button
                onClick={() => setIsOpen(true)}
                className="text-2xl font-medium"
              >Add <br /> New <br /> Project</button>
            </div>
          </div>
          {component && <div className='flex'><Form isOpen={isOpen} onCloseModal={() => setIsOpen(false)} getData={handleGetData} /></div>}
        </div>
      </div>
    </>
  );
}

export default App;
