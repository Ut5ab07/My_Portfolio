import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "glass-panel shadow-2xl overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
