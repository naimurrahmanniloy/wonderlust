"use client";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

export default function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
