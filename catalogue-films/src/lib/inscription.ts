// src/lib/inscription.ts

export interface Inscription {
  prenom: string;
  email: string;
  motDePasse: string;
  confirmation: string;
  cgv: boolean;
}

export const valeursInitiales: Inscription = {
  prenom: "",
  email: "",
  motDePasse: "",
  confirmation: "",
  cgv: false,
};

// Dérivé de Inscription : ajouter un champ au formulaire suffit à le rendre
// connu du type des erreurs.
export type Erreurs = Partial<Record<keyof Inscription, string>>;

// On ne conserve jamais de mot de passe dans la liste.
export type InscriptionEnregistree =
  Omit<Inscription, "motDePasse" | "confirmation"> & { id: number };

const FORMAT_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function valider(donnees: Inscription): Erreurs {
  const erreurs: Erreurs = {};

  if (donnees.prenom.trim().length < 2) {
    erreurs.prenom = "Le prénom doit contenir au moins 2 caractères.";
  }

  if (!FORMAT_EMAIL.test(donnees.email)) {
    erreurs.email = "L'adresse email n'est pas valide.";
  }

  if (donnees.motDePasse.length < 8) {
    erreurs.motDePasse = "Le mot de passe doit contenir au moins 8 caractères.";
  }

  if (donnees.confirmation !== donnees.motDePasse) {
    erreurs.confirmation = "Les deux mots de passe ne sont pas identiques.";
  }

  if (!donnees.cgv) {
    erreurs.cgv = "Vous devez accepter les conditions générales.";
  }

  return erreurs;
}
