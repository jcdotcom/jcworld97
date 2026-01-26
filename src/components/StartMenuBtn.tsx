import type { StartMenuButton } from "./StartMenu";

export interface StartMenuBtnProps extends StartMenuButton {
  onToggle: (id: number) => void;
  onStartClose: () => void;
}

const StartMenuBtn = ({id, title, icon, onToggle, onStartClose}:StartMenuBtnProps) => {
  return (
    <button
      className="start-menu-btn"
      onClick={() => {
        onToggle(id);
        onStartClose();
      }}
    >
      <img 
        src={icon}
        alt={title}
        className="start-menu-btn-icon"
        draggable={false}
      />
      <span className="start-menu-btn-text">{title}</span>
    </button>
  );
};

export default StartMenuBtn;