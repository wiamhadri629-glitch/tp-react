import RecipeItem from './RecipeItem';

function RecipeList({
  recettes,
  onModifier,
  onSupprimer,
  onDupliquer
}) {
  return (
    <div>
      <h2>Mes recettes</h2>

      {recettes.length === 0 ? (
        <p>Aucune recette disponible.</p>
      ) : (
        recettes.map((recette) => (
          <RecipeItem
            key={recette.id}
            recette={recette}
            onModifier={onModifier}
            onSupprimer={onSupprimer}
            onDupliquer={onDupliquer}
          />
        ))
      )}
    </div>
  );
}

export default RecipeList;