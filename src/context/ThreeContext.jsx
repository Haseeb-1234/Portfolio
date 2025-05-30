// src/context/ThreeContext.jsx
import React, { createContext, useContext, useState, useRef } from 'react';

const ThreeContext = createContext();

export function ThreeProvider({ children }) {
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  const updateMousePosition = (e) => {
    mousePosition.current = { 
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1
    };
  };

  useEffect(() => {
    if (is3DEnabled) {
      window.addEventListener('mousemove', updateMousePosition);
    }
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [is3DEnabled]);

  const toggle3D = () => {
    setIs3DEnabled(prev => !prev);
  };

  const value = {
    is3DEnabled,
    toggle3D,
    mousePosition
  };

  return (
    <ThreeContext.Provider value={value}>
      {children}
    </ThreeContext.Provider>
  );
}

export function useThree() {
  return useContext(ThreeContext);
}