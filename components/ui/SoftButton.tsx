import React from "react";

interface SoftButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SoftButton = ({
  className = "",
  children,
  ...props
}: SoftButtonProps) => (
  <button
    className={
      "rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 " +
      "bg-emerald-900 text-white hover:bg-emerald-800 focus:ring-emerald-700 " +
      className
    }
    {...props}
  >
    {children}
  </button>
);
