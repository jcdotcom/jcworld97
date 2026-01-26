/*
    ~ ~~ ~~~ jcworld97 ~~~ ~~ ~
       my react webapp for my personal webpage ~{ www.jcworld.org }~

        0.22 - 01/26/2026 - optimized and improved start menu, added bug report menu,
                            more work on mobile view
                                new components {
                                    BugReportPage
                                }
        0.21 - 01/13/2026 - most things scale dynamically now, more work on mobile view
        0.20 - 12/14/2025 - complete re-write:  the cleaner and more dynamic edition
                                new components { 
                                    AboutPage, GalleryPage, GamesPage, MusicPage,
                                    PaintPage, Program, StartMenu, Taskbar
                                }
        0.1x - 09/12/2025 - 12/06/2025
*/

import {useState, useEffect } from 'react';
import { preload } from 'react-dom';
import Program from './components/Program';
import StartMenu from './components/StartMenu';
import AboutPage from './components/AboutPage';
import MusicPage from './components/MusicPage';
import GalleryPage from './components/GalleryPage';
import GamesPage from './components/GamesPage';
import PaintPage from './components/PaintPage';
import BugReportPage from './components/BugReportPage';
import './App.css';
import bug from './assets/bug.gif';
import startMenuBG from './assets/StartMenuBG.webp';

interface AppProps {
    onMobile: boolean;
}

export default function App({onMobile}: AppProps){

    // ??? trying to get start menu bg to load faster

    useEffect(() => {
        preload(startMenuBG);
        const img = new Image();
        img.src = startMenuBG;
        img.onload = () => {
            setImageLoaded(true);
        }
    }, []);
    

//----------------[ START MENU FUNCTIONS ]----------------//

    const [startIsVisible, setStartVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const startOpen = () =>{
        setStartVisible(!startIsVisible);
        console.log("visible?",startIsVisible)
    }

    const startAction = (key: number) => {
        if(programs.some((c) => c.id === (key+1))){ // TODO fix this it's a bandaid
            setCurrentActive(key+1);
            return;
        }
        switch(key){
            case 0: alert("now shutting down the entire internet"); break;
            case 1: window.open("https://github.com/jcdotcom", "_blank"); break;
            case 2: openProgram(1); break;
            case 3: openProgram(2); break;
            case 4: openProgram(3); break;
            case 5: openProgram(4); break;
            case 6: openProgram(5); break;
        }
    }

//----------------[ PROGRAM FUNCTIONS ]----------------//

    const [programs, setPrograms] = useState([{id: 1, title: 'About', content: <AboutPage />, mview: onMobile, open: true, active: true}]);
    const [currentActive, setCurrentActive] = useState(1);
    const openProgram = (key: number) => {
        console.log(`get program(${key})`);
        if (!(programs.some((c) => c.id === key))){
            const newProgram = {id: key, title: '', content: <div/>, mview: onMobile, open: true, active: true}
            switch(key){
                case 1: 
                    newProgram.content = <AboutPage/>; 
                    newProgram.title = "About";
                    break;
                case 2: 
                    newProgram.content = <MusicPage />; 
                    newProgram.title = "Music";
                    break;
                case 3: 
                    newProgram.content = <GalleryPage />; 
                    newProgram.title = "Gallery";
                    break;
                case 4:
                    newProgram.content = <GamesPage />; 
                    newProgram.title = "Games";
                    break;
                case 5:
                    newProgram.content = <PaintPage />; 
                    newProgram.title = "Paint";
                    break;
                case 6:
                    newProgram.content = <BugReportPage />;
                    newProgram.title = "Report a Bug";
                    break;
            }
            setPrograms(prev => [...prev, newProgram]);
            setCurrentActive(key);
        }
    }

    function closeProgram(id: number){
        if(currentActive === id){
            setPrograms((prev) => prev.filter((c) => c.id !== id));     
        }
    }

    function handleClick(id: number){
        setCurrentActive(id);
    }

    function handleBugClick(){
        openProgram(6);
    }

//----------------[ CLOCK FUNCTIONS ]----------------//

    const [time, setTime] = useState(new Date);

    useEffect(() =>{ 
        let clock=setTimeout(() => {
            setTime(new Date);
        }, 1000);
        return () => clearTimeout(clock)
    }, [time]);

//----------------[ LAYOUT ]----------------//

    return(
        <body className={"app-layout"}>
            <main className="app-desktop">
                <p className="watermark">jcworld.org</p>
                <div className="app-desktop-window-space">
                    { programs.map((program) => (
                            <Program
                                id={program.id}
                                title={program.title}
                                content={program.content}
                                active={program.id === currentActive}
                                onActivate={() => handleClick(program.id)}
                                onClose={() => closeProgram(program.id)}
                                mview = {onMobile}
                            />
                        ))
                    }
                </div>
            </main>
            <div className="desktop-element-wrapper">
                <div className="task-bar-wrapper">
                    <div className="task-bar">
                        <div onClick={()=>startOpen()} className="start-btn" />
                        <div className="task-btn-wrapper">
                            {!onMobile && programs.map((task) => (
                            <div onClick={()=>handleClick(task.id)} className="task-btn">
                                <p className="btn-text">{task.title}</p>
                            </div>                            
                            ))}
                        </div>
                        <div className="clock-layout">
                            <div className="clock">
                                <p className="clock-text">{time.toLocaleTimeString().substring(0,11)}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                {startIsVisible && imageLoaded && <div className="app-start-menu">
                    <StartMenu 
                        onToggle={startAction}
                        onStartClose={startOpen}
                    />
                    </div>}
                {!onMobile && <img src={bug} alt="bug" className="bug-pic" onClick={handleBugClick}/>}
                {onMobile && <img src={bug} alt="bug" className="bug-pic-mobile" onClick={handleBugClick}/>}
            </div>
        </body>
    );
}