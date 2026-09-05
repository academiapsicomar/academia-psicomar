import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/cn";

/** Renderiza Markdown con los estilos `.prosa` de globals.css. */
export function Prosa({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("prosa", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
