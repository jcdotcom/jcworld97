import { useEffect, useRef, useState, type ReactNode } from "react";
import './Components.css';

interface ProgramProps{
    id: number,            
    title: string,
    content: ReactNode,
    active?: boolean,
    onActivate: () => void;
    onClose: (id: number) => void;
    mview?: boolean
}

const Program = ({ id, title, content, active = false, onActivate, onClose, mview = false }: ProgramProps) => {
    const programRef = useRef<HTMLDivElement>(null);
    
    const [offset, setOffset] = useState({ y: (0.02*window.innerHeight), x: (0.04*window.innerWidth) });
    const [position, setPosition] = useState({top: offset.y+(id*22), left: offset.x+(id*20)});
    const mPosition = {top: 40+(id*30), left: (id*20)};
    
//----------------[ WINDOW SIZE FUNCTIONS ]----------------//
    
    const [windowSize, setWindowSize] = useState({y: window.innerHeight, x: window.innerWidth});

    function handleResize(){
      setWindowSize({y: window.innerHeight, x: window.innerWidth});
      setPosition({
        top: (position.top - (0.2*(windowSize.y-window.innerHeight))),
        left: (position.left - (0.1*(windowSize.x-window.innerWidth))),
      });
      console.log(windowSize.x, windowSize.y)
    }
    
    useEffect(() =>{
        window.addEventListener("resize", handleResize);
        return () =>{
            window.removeEventListener("resize", handleResize);
        };
    }, [windowSize]);
    
//----------------[ WINDOW DRAG FUNCTIONS ]----------------//
    
    const [dragging, setDragging] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
      console.log('dragging');
      if ((!programRef.current)||(mview)) return console.log('no drag');
      setDragging(true);
      onActivate();
      setOffset({
        y: e.clientY - programRef.current.offsetTop,
        x: e.clientX  - programRef.current.offsetLeft,
      });
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) =>{
      if (!dragging) return;
      setPosition({
        top: e.clientY - offset.y,
        left: (e.clientX - offset.x),
      });
    };

    const handleMouseUp = () =>{
      setDragging(false);
    };

    useEffect(() =>{
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () =>{
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [dragging]);  

//----------------[ LAYOUT ]----------------//

    if(mview){
      return (
        <div 
          ref={programRef} 
          className="window-frame-mobile" 
          style = {{
            top: mPosition.top,
            left: mPosition.left,
            zIndex: active ? 1000 : 1,
          }}
          onMouseDown={() => { onActivate(); }}
        >
            <div className={`window-frame-header ${dragging ? "dragging" : ""} 
            ${active ? "active" : ""}`} onMouseDown={handleMouseDown}>
              <p className="window-header-text" /*style = {{ marginLeft: wSize.y*0.01, marginTop: wSize.y*0.022, fontSize: 0.020*wSize.y }}*/>
                {title}
              </p>
              <button className="window-frame-close-btn" onClick={() => onClose(id)}>
                X
              </button>
            </div>
            <div className="window-frame-body">
              {content}
            </div>    
        </div>
      );
    }

    else{
      return (
        <div 
          ref={programRef} 
          className="window-frame" 
          style = {{
            top: position.top,
            left: position.left,
            zIndex: active ? 1000 : 1,
          }}
          onMouseDown={() => { onActivate(); }}
        >
            <div className={`window-frame-header ${dragging ? "dragging" : ""} 
            ${active ? "active" : ""}`} onMouseDown={handleMouseDown}>
              <p className="window-header-text" /*style = {{ marginLeft: wSize.y*0.01, marginTop: wSize.y*0.022, fontSize: 0.020*wSize.y }}*/>
                {title}
              </p>
              <button className="window-frame-close-btn" onClick={() => onClose(id)}>
                X
              </button>
            </div>
            <div className="window-frame-body">
              {content}
            </div>    
        </div>
      );
    }
}

export default Program;