import CustomCard from "@/utilities/commoncomponents/Cards"
import axios from "axios";

async function getData(){
  // let getData = await axios.get("https://jsonplaceholder.typicode.com/todos");
  // return getData.data;
}

const page = async() => {
  const data = await getData();
  return (
    <div>
      {JSON.stringify(data)}
        <CustomCard/>
    </div>
  )
}

export default page
