import { Button } from "@/components/ui/button";
import type {HTMLAttributeAnchorTarget} from "react";

interface LinkButtonProps {
  href: string
  target?: HTMLAttributeAnchorTarget
  rel?: string
  className?: string
  children?: React.ReactNode
}

export default function LinkButton({ href, target, rel, className, children }: LinkButtonProps) {
  return (
    <Button asChild variant="ghost">
      <a href={href} target={target} rel={rel} className={className}>{children}</a>
    </Button>
  )
}
