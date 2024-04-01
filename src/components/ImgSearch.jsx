import { useGlobalContext } from "../context";

const ImgSearch = () => {
    const {hello} = useGlobalContext() 

    console.log(hello);
  return (
    <div>ImgSearch</div>
  )
}

export default ImgSearch