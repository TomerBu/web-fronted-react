function Counter() {
  return (
    <div className="flex flex-col items-center">
      <button className="bg-purple-400 p-5 rounded-xl text-white text-2xl">
        +
      </button>
      <p>0</p>
      <button>-</button>
    </div>
  );
}

export default Counter;
