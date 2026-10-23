function RecipeItem({
  recette,
  onModifier,
  onSupprimer,
  onDupliquer
}) {
  return (
    <div>
      {recette.image && (
        <img
          src={recette.image}
          alt={recette.nom}
          width="150"
        />
      )}

      <h3>{recette.nom}</h3>

      <p>Catégorie : {recette.categorie}</p>

      <p>Description : {recette.description}</p>

      <p>Difficulté : {recette.difficulte}/5</p>

      <h4>Ingrédients :</h4>

      <ul>
        {recette.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <button onClick={() => onModifier(recette)}>
        Modifier
      </button>

      <button onClick={() => onDupliquer(recette)}>
        Dupliquer
      </button>

      <button onClick={() => onSupprimer(recette.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default RecipeItem;