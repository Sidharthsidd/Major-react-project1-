import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="https://i.pinimg.com/originals/d0/53/f2/d053f2394d420d8d3712046f4e8f80cc.jpg" alt="Logo" className={css.logo} />

      <div className={css.menu}>
        <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink to="calender" className={css.item} title="Calender">
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink to="Board" className={css.item} title="Trello board">
          <FaTasks size={30} />
        </NavLink>
        <NavLink to="users" className={css.item} title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
