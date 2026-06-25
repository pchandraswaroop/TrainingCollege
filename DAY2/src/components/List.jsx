const List = ({ datas }) => {
  return (
    <div className="flex flex-col gap-3">
      {datas.map((data) => (
        <div key={data.id} className="bg-gray-200 p-5 rounded-md">
          <h1 className="text-sm text-gray-500">ID: {data.id}</h1>
          <h1 className="text-xl font-bold">{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default List;
