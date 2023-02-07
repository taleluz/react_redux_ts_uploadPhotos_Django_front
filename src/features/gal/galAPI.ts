import axios from "axios";
import { IImg } from "../../features/models/IImg";

const MYSERVR="http://127.0.0.1:8000/img"

export function getImages() {
   
  return new Promise<{ data: IImg[] }>((resolve) =>
    axios.get(MYSERVR).then(res=> resolve({ data: res.data }))
  );
}
export function delImage(id:number) {
   console.log("first")
  return new Promise<{ data: IImg[] }>((resolve) =>
    axios.delete(MYSERVR + "/" +id).then(res=> resolve({ data: res.data }))
  );
}
