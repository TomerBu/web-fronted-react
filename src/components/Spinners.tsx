import {BarLoader, CircleLoader, RingLoader } from 'react-spinners'
const Spinners = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-2">
      <BarLoader color="#0d0" />
      <CircleLoader color="#0d0" />
      <RingLoader color="#0d0" />
    </div>
  );
}

export default Spinners