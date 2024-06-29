import "./Buttons.css";
import { FaArrowRight } from "react-icons/fa";


function Button() {
  return (
<button className="Header-btn flex"><a href="" className="flex items-center gap-2 uppercase font-semibold ">Try For Free {<FaArrowRight />}
</a></button>
  )
}

export default Button