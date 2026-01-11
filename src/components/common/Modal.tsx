import { useEffect, useRef, type ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-label={title ?? "Modal"}
      onClose={onClose}
      onCancel={onClose}
    >
      <div className="modal-box max-w-5xl overflow-hidden p-0">
        <div className="flex items-center justify-between gap-3 border-b border-base-200 px-4 py-3">
          <h3 className="truncate text-sm font-semibold">{title ?? "Modal"}</h3>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => dialogRef.current?.close()}
          >
            ✕
          </button>
        </div>

        {children}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button aria-label="Close">close</button>
      </form>
    </dialog>
  );
}
