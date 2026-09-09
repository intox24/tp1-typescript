export type VarianteBouton = "primaire" | "secondaire" | "danger";

export interface BoutonProps {
  libelle: string;
  variante?: VarianteBouton;   // "primaire" par défaut
  desactive?: boolean;         // false par défaut
  onClick?: () => void;
}

const classesVariante: Record<VarianteBouton, string> = {
    primaire:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondaire:
      "bg-slate-200 text-slate-900 hover:bg-slate-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };
  
  export function Bouton({
    libelle,
    variante = "primaire",
    desactive = false,
    onClick,
  }: BoutonProps) {
    return (
      <button
        type="button"
        disabled={desactive}
        onClick={onClick}
        className={`rounded-md px-4 py-2 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${classesVariante[variante]}`}
      >
        {libelle}
      </button>
    );
  }
