import { CSSProperties } from 'react'
// import loadingGif2 from "../assets/loaderAsset/Loading.gif"
// import loadingGif from "../assets/loaderAsset/Loading (3).gif"
import {RingLoader} from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const Loader = () => {
    let color = "#1935CA";
  return (
    <div className='w-full flex justify-center'>
        <RingLoader
        color={color}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader