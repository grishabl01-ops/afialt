"use client";

import { useOpenRequestModal } from "@/components/RequestModalProvider";

interface RequestButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function RequestButton({ className, children }: RequestButtonProps) {
  const openModal = useOpenRequestModal();
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
