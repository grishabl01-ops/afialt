"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { RequestModal } from "@/components/RequestModal";

const RequestModalContext = createContext<(() => void) | null>(null);

export function RequestModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  const value = useMemo(() => openModal, [openModal]);

  return (
    <RequestModalContext.Provider value={value}>
      {children}
      <RequestModal open={open} onClose={closeModal} />
    </RequestModalContext.Provider>
  );
}

export function useOpenRequestModal() {
  const openModal = useContext(RequestModalContext);
  if (!openModal) {
    throw new Error("useOpenRequestModal must be used within RequestModalProvider");
  }
  return openModal;
}
