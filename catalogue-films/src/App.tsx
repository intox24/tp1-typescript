import { useState } from 'react'
import type { Inscription, InscriptionEnregistree } from './lib/inscription'
import { FormulaireInscription } from './composants/FormulaireInscription'
import { ListeInscriptions } from './composants/ListeInscriptions'

function App() {
  const [inscriptions, setInscriptions] = useState<InscriptionEnregistree[]>([])

  const ajouterInscription = (donnees: Inscription) => {
    const nouvelle: InscriptionEnregistree = {
      id: Date.now(),
      prenom: donnees.prenom,
      email: donnees.email,
      cgv: donnees.cgv,
    }
    setInscriptions((liste) => [nouvelle, ...liste])
  }

  const supprimerInscription = (id: number) => {
    setInscriptions((liste) => liste.filter((i) => i.id !== id))
  }

  return (
    <div className="grid gap-8 bg-slate-50 p-6 md:grid-cols-2">
      <section>
        <h2 className="mb-3 text-lg font-semibold">Inscription</h2>
        <FormulaireInscription onInscription={ajouterInscription} />
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Inscriptions enregistrées</h2>
        <ListeInscriptions
          inscriptions={inscriptions}
          onSuppression={supprimerInscription}
        />
      </section>
    </div>
  )
}

export default App
