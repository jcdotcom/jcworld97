
//import startMenuBG from '../assets/StartMenuBg.jpg';


interface StartMenuProps {
    onToggle: (id: number) => void;
    onStartClose: () => void;
    startTaskButtonKeys: number[];
}

const StartMenu = ({onToggle, onStartClose, startTaskButtonKeys}:StartMenuProps) => {
    return (
        <div>
          {/* <img src={startMenuBG} loading="eager" style={{gridArea:'1/1'}}/> */}
            {startTaskButtonKeys.map((key) => (
              <div className="start-menu-btn-container">
                <button
                  title={`menu-btn-${key}`}
                  className={`start-menu-task-${key}`}
                  onClick={() => {
                    onToggle(key);
                    onStartClose();
                  }}>
                </button> 
              </div>
            ))}
        </div>
      );    
}

export default StartMenu;