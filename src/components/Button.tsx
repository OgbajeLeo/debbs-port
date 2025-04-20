import { motion } from "framer-motion";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "px-6 py-2 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]}`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}
