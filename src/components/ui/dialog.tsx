import * as React from "react";
import { X } from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
 * Native <dialog> replacement for @radix-ui/react-dialog.
 * Same API surface used by event-actions.tsx — no consumer changes needed.
 * ─────────────────────────────────────────────────────────────────────────── */

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  // Close on backdrop click
  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onOpenChange(false);
    }
  };

  // Sync native close (Escape key) with state
  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClick}
      onClose={handleClose}
      className="fixed inset-0 z-50 m-auto max-h-[85vh] max-w-lg overflow-y-auto bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-[2px] open:animate-in open:fade-in-0 open:zoom-in-95"
    >
      {open ? children : null}
    </dialog>
  );
}

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative grid w-full gap-4 border bg-background p-6 shadow-lg sm:rounded-lg ${className ?? ""}`}
    {...props}
  >
    {children}
  </div>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col space-y-1.5 text-center sm:text-left ${className ?? ""}`}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className ?? ""}`}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className ?? ""}`}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
};
