declare module 'lucide-react' {
  import { FunctionComponent, SVGProps } from 'react';
  export type LucideIcon = FunctionComponent<SVGProps<SVGSVGElement>>;
  export const icons: Record<string, LucideIcon>;
} 