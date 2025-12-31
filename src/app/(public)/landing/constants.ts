import { CheckCircle2, XCircle } from "./../../../../node_modules/lucide-react";

export const patterns = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const benefits = [
  {
    id: 1,
    title: "No vendemos tareas sueltas",
    icon: XCircle,
    color: "red",
  },
  {
    id: 2,
    title: "No vendemos horas.",
    icon: XCircle,
    color: "red",
  },
  {
    id: 3,
    title:
      "Nos hacemos responsables del funcionamiento y crecimiento del sistema.",
    icon: CheckCircle2,
    color: "green",
  },
];
