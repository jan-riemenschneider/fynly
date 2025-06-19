import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ButtonLoadingProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  onClick?: () => Promise<void>;
  loading?: boolean;
}

export function ButtonLoading({
  children,
  className,
  size,
  onClick,
  loading,
}: ButtonLoadingProps) {
  return (
    <Button
      size={size}
      disabled={loading}
      onClick={onClick}
      className={className}
    >
      {loading ? <Loader2Icon className="animate-spin" /> : children}
    </Button>
  );
}
