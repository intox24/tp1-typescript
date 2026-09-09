import type { ReactNode } from "react";

export interface CarteProps {
  titre: string;
  sousTitre?: string;
  children: ReactNode;
  actions?: ReactNode;   // pied de carte, optionnel
}

export function Carte({ titre, sousTitre, children, actions }: CarteProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h3 className="font-bold">{titre}</h3>
      {sousTitre && <p className="text-sm text-slate-500">{sousTitre}</p>}

      <div className="mt-2">{children}</div>

      {actions && <div className="mt-4">{actions}</div>}
    </div>
  );
}
