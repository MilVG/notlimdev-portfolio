
import * as THREE from "three";
import { create } from "zustand";

//Definir el tipo del store
type ModelStore = {
  modelRef: React.MutableRefObject<THREE.Group | null> | null;
  setModelRef: (ref: React.MutableRefObject<THREE.Group | null>) => void;
};

// Crear el store con Zustand
export const useModelStore = create<ModelStore>((set) => ({
  modelRef: null, // Inicializamos en null
  setModelRef: (ref) => set({ modelRef: ref }),
}));

