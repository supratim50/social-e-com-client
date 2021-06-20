import style from "./SidenavIcon.module.scss";

const SidenavIcon = ({ icon, classList, active }) => {
  return (
    <i
      className={`${style.sideicon} ${classList && classList} ${
        active ? style.active : ""
      }`}
    >
      {icon && icon}
    </i>
  );
};

export default SidenavIcon;
