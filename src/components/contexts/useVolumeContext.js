import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const VolumeContext = createContext(null);

const useVolumeContext = () => {
  const contextValue = useContext(VolumeContext);

  return contextValue;
};

const OptionMap = {
  Relax: ['', '', ''],
  Focus: ['', '', ''],
  Creative: ['', '', ''],
  Productivity: ['', '', ''],
};

function VolumeContextProvider({ children }) {
  const [currentListening, setCurrentListening] = useState([]);

  const handleAddListening = useCallback((title) => {
    if (currentListening.includes(title)) {
      setCurrentListening(currentListening.filter(listening => listening !== title))
    } else {
      setCurrentListening([...currentListening, title]);
    }
  }, [currentListening]);

  const setOptionListening = useCallback((title) => {
    setCurrentListening(OptionMap[title]);
  }, []);

  const setRelaxListening = useCallback(() => {
    setCurrentListening(['', '', '']);
  }, []);

  const setFocusListening = useCallback(() => {
    setCurrentListening(['', '', '']);
  }, []);

  const setCreativeListening = useCallback(() => {
    setCurrentListening(['', '', '']);
  }, []);

  const setProductivityListening = useCallback(() => {
    setCurrentListening(['', '', '']);
  }, []);

  const contextValue = useMemo(() => ({
    currentListening,
    setCurrentListening: handleAddListening,
    setRelaxListening,
    setFocusListening,
    setCreativeListening,
    setProductivityListening,
    setOptionListening,
  }), [
    currentListening,
    handleAddListening,
    setCreativeListening,
    setFocusListening,
    setProductivityListening,
    setRelaxListening,
    setOptionListening,
  ]);

  return (
    <VolumeContext.Provider value={contextValue}>
      {children}
    </VolumeContext.Provider>
  );
};

export {
  useVolumeContext,
  VolumeContextProvider,
}
