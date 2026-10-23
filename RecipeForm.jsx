import { useState } from 'react';

function RecipeForm({ onEnregistrer }) {
  const [nom, setNom] = useState('');
  const [categorie, setCategorie] = useState('Entrée');
  const [ingredients, setIngredients] = useState(['']);
  const [difficulte, setDifficulte] = useState(1);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  function ajouterIngredient() {
    setIngredients([...ingredients, '']);
  }

  function changerIngredient(index, valeur) {
    const nouvelleListe = [...ingredients];

    nouvelleListe[index] = valeur;

    setIngredients(nouvelleListe);
  }

  function supprimerIngredient(index) {
    setIngredients(
      ingredients.filter((ingredient, i) => i !== index)
    );
  }

  function choisirImage(e) {
    const fichier = e.target.files[0];

    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  function soumettreFormulaire(e) {
    e.preventDefault();

    const recette = {
      nom: nom,
      categorie: categorie,
      ingredients: ingredients.filter(
        (ingredient) => ingredient.trim() !== ''
      ),
      difficulte: Number(difficulte),
      description: description,
      image: image
    };

    onEnregistrer(recette);

    setNom('');
    setCategorie('Entrée');
    setIngredients(['']);
    setDifficulte(1);
    setDescription('');
    setImage('');
  }

  return (
    <form onSubmit={soumettreFormulaire}>
      <h2>Créer une recette</h2>

      <label>Nom :</label>

      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />

      <label>Catégorie :</label>

      <select
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
      >
        <option>Entrée</option>
        <option>Plat</option>
        <option>Dessert</option>
        <option>Boisson</option>
      </select>

      <h3>Ingrédients :</h3>

      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={ingredient}
            onChange={(e) =>
              changerIngredient(index, e.target.value)
            }
            placeholder={`Ingrédient ${index + 1}`}
          />

          <button
            type="button"
            onClick={() => supprimerIngredient(index)}
            disabled={ingredients.length === 1}
          >
            Supprimer
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={ajouterIngredient}
      >
        Ajouter un ingrédient
      </button>

      <br />

      <label>Difficulté : {difficulte}/5</label>

      <input
        type="range"
        min="1"
        max="5"
        value={difficulte}
        onChange={(e) => setDifficulte(e.target.value)}
      />

      <br />

      <label>Description :</label>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <label>Image :</label>

      <input
        type="file"
        accept="image/*"
        onChange={choisirImage}
      />

      <br />

      <button type="submit">
        Ajouter la recette
      </button>
    </form>
  );
}

export default RecipeForm;