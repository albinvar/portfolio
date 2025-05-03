import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "max-w-3xl mb-16",
        align === 'center' && "mx-auto text-center",
        align === 'right' && "ml-auto text-right",
        className
      )}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}