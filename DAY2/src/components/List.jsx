const List = () => {
  const datas = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex justify-center items-center shadow-lg gap-2 w-ful h-screen">
        {datas.map((data) => (
          <p>{data}</p>
        ))}
      </div>
      {/* we wrote html sp we use ()=>() rather than ()=>{} */}
    </>
  );
};

export default List;
