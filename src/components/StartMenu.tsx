import StartMenuBtn from './StartMenuBtn';
//import startMenuBG from '../assets/StartMenuBg.jpg';
import paintIcon from '../assets/StartIcon_paint.webp';
import gamesIcon from '../assets/StartIcon_games.webp';
import galleryIcon from '../assets/StartIcon_gallery.webp';
import musicIcon from '../assets/StartIcon_music.webp';
import githubIcon from '../assets/StartIcon_github.webp';
import aboutIcon from '../assets/StartIcon_about.webp';
import shutdownIcon from '../assets/StartIcon_shutdown.webp'

export interface StartMenuButton {
  id: number;
  title: string;
  icon: string;
}

export const START_MENU_BUTTONS: StartMenuButton[] = [
  { id: 6, title: 'Paint', icon: paintIcon },
  { id: 5, title: 'Games', icon: gamesIcon },
  { id: 4, title: 'Gallery', icon: galleryIcon },
  { id: 3, title: 'Music', icon: musicIcon },
  { id: 1, title: 'Github', icon: githubIcon },
  { id: 2, title: 'About', icon: aboutIcon },
  //{ id: 0, title: 'Shutdown', icon: shutdownIcon },
];

interface StartMenuProps {
    onToggle: (id: number) => void;
    onStartClose: () => void;
}

const StartMenu = ({onToggle, onStartClose}:StartMenuProps) => {
    return (
        <div className="start-menu">
          {START_MENU_BUTTONS.map((btn) => (
            <StartMenuBtn
              key={btn.id}
              {...btn}
              onToggle={onToggle}
              onStartClose={onStartClose}
            />
          ))}
          <div style={{  padding: "2.4%", pointerEvents: "none" }} />
          <StartMenuBtn
            key={0}
            id={0}
            title={'Shutdown'}
            icon={shutdownIcon}
            onToggle={onToggle}
            onStartClose={onStartClose}
          />
        </div>
      );    
}

export default StartMenu;