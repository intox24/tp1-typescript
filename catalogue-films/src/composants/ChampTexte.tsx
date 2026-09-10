// src/composants/ChampTexte.tsx
import type { ChangeEvent } from "react";

export interface ChampTexteProps {
  nom: string;                                     // sert d'id ET de name
  label: string;
  valeur: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password";            // "text" par défaut
  erreur?: string;
  placeholder?: string;
}

export function ChampTexte({
  nom,
  label,
  valeur,
  onChange,
  type = "text",
  erreur,
  placeholder,
}: ChampTexteProps) {
  const idErreur = `${nom}-erreur`;

  return (
    <div>
      <label htmlFor={nom} className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        id={nom}
        name={nom}
        type={type}
        value={valeur}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!erreur}
        aria-describedby={erreur ? idErreur : undefined}
        className={`mt-1 w-full rounded-lg border px-3 py-2 ${
          erreur ? "border-red-500" : "border-slate-300"
        }`}
      />

      {erreur && (
        <p id={idErreur} className="mt-1 text-sm text-red-600">
          {erreur}
        </p>
      )}
    </div>
  );
}
