"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  const toastStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
    default:
      "bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800",
  };

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `group toast px-4 py-3 rounded-lg shadow-lg`,
          description: "text-zinc-500 dark:text-zinc-400",
          actionButton:
            "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900",
          cancelButton:
            "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
