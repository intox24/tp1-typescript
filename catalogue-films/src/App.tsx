import type { Film } from './lib/utils'
import { FILMS, filtrerParGenre, trierPar } from './lib/utils'
import { ListeFilms } from './composants/ListeFilms'

function afficherDetails(film: Film) {
  console.log(film.titre)
}

function App() {
  return (
    <div className="bg-slate-50 p-6">
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">Tous les films</h2>
        <ListeFilms films={trierPar(FILMS, 'titre')} onSelection={afficherDetails} />
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">Drames</h2>
        <ListeFilms films={filtrerParGenre(FILMS, 'Drame')} onSelection={afficherDetails} />
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Comédies</h2>
        <ListeFilms films={filtrerParGenre(FILMS, 'Comédie')} />
      </section>
    </div>
  )
}

export default App
