import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import Action from "../../../../Store/Actions";

const BarCard = () => {
  const dataBook = useSelector((state) => state.BookReducer.listAllBook);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.app.findManyEbook());
  }, []);

  const newData = dataBook.map((item) => {
    item.title = item.title.slice(0, 7) + '...'
    return item
  })
  return (
    <div className="App">
      <BarChart data={newData} width={1000} height={500} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="readers" fill="#8884d8"/>
        <Bar dataKey="avgScore" fill="#83a6ed" />
        <Bar dataKey="subscribers" fill="#82ca9d" />
        <Bar dataKey="sumHot" fill="#8dd1e1"/>
      </BarChart>
   
    </div>
  );
}

export default BarCard