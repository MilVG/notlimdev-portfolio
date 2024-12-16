import { create } from "zustand"


type LabelsStore = {

  labelsRef: { [key: string]: React.MutableRefObject<HTMLElement | null> }
  addLabelRef: (id: string, ref: React.MutableRefObject<HTMLElement | null>) => void
}

export const useLabelsStore = create<LabelsStore>((set) => ({

  labelsRef: {},
  addLabelRef: (id, ref) =>
    set((state) => ({
      labelsRef: { ...state.labelsRef, [id]: ref }
    }))
}))
