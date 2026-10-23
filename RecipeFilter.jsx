function RecipeFilter({
  recherche,
  categorie,
  onRechercheChange,
  onCategorieChange
}) {
  return (
    <div>
      <label>Rechercher une recette :</label>

      <input
        type="text"
        value={recherche}
        onChange={(e) => onRechercheChange(e.target.value)}
        placeholder="Nom de la recette"
      />

      <label>Catégorie :</label>

      <select
        value={categorie}
        onChange={(e) => onCategorieChange(e.target.value)}
      >
        <option value="Toutes">Toutes</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}

export default RecipeFilter;