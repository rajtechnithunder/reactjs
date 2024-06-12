import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([
    {
      title: "Project 1",
      duration: 1,
      cost: 1000,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [findData, setFindData] = useState(null);

  const handleGetData = (e, isEdit) => {
    if (isEdit) {
      const temp = data.map((ele, index) => (ele.id === isEdit ? e : ele));
      console.log(temp);
    } else {
      console.log("welcome");
      let x = [...data, e];
      setData(x);
    }
  };

  const deleteProject = (index) => {
    const result = data.filter((prev, prevIndex) => prevIndex !== index);
    console.log(result);
    setData(result);
  };

  const onEdit = (cIndex) => {
    const x = data.find((ele, index) => index === cIndex);
    setFindData({ ...x, index: cIndex });
    setIsOpen(true);
  };

  const addNewProject = (e) => {
    let addData = [...data, e];
    setData(addData);
    setFindData("")
    setIsOpen(false)
  }

  const updateProject = (obj) => {
    const updatedData = data.map((i, index) => index === findData.index ? obj : i);

    setIsOpen(false)
    setData(updatedData);
  };

  return (
    <>
      <div className="flex h-screen flex-col bg-gray-100">
        <div className="mx-auto pt-6 px-[10%]">
          <div className="flex">
            <h1 className="text-3xl font-bold uppercase">Projects</h1>
          </div>
          <div className="grid grid-cols-3 gap-6 py-6 ">
            {data.map((e, index) => (
              <div>
                <Card
                  key={index}
                  index={index}
                  title={e.title}
                  duration={e.duration}
                  cost={e.cost}
                  img={e.img}
                  onDelete={deleteProject}
                  onUpdate={() => onEdit(index)}
                />
              </div>
            ))}
            <div
              className="flex w-[350] text-center justify-center items-center border-dashed border-4 border-gray-500 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-6 cursor-pointer hover:bg-slate-200"
              onClick={() => {
                setFindData(null);
                setIsOpen(true);
              }}
            >
              <button className="text-2xl font-medium">
                Add <br /> New <br /> Project
              </button>
            </div>
          </div>
          <div className="flex">
            <Form
              isOpen={isOpen}
              findData={findData}
              onCloseModal={() => setIsOpen(false)}
              getData={handleGetData}
              updateProject={updateProject}
              addNewProject={addNewProject}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
