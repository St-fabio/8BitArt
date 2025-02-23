import { createContext, useContext, useState } from 'react';

// Création du contexte
const ReloadContext = createContext();

// Composant Provider qui encapsule toute l’application
export function ReloadProvider({ children }) {
  const [reload, setReload] = useState(0);

  // Fonction pour déclencher le reload
  const triggerReload = () => setReload(prev => prev + 1);

  return (
    <ReloadContext.Provider value={{ reload, triggerReload }}>
      {children}
    </ReloadContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte
export function useReload() {
  alert('JSP'); 
  return useContext(ReloadContext);
}
