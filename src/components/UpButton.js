import './UpButton.css'
import { FiChevronsUp } from "react-icons/fi";

function UpButton() {
  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className='nv'>
      <div className="nav-list-home">
        <a href="#Home" onClick={handleClick("home")} className="home">Up<FiChevronsUp size={26} /></a>
      </div>
    </nav>
  );
}

export default UpButton;