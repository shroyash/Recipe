import React from 'react';

const Liked = () => {
  return (
    <div className="bg-white p-4 max-w-lg mx-auto rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">RECIPE TEMPLATE</h1>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <img src="https://placehold.co/150x150" alt="Stack of pancakes with blueberries and syrup" className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-semibold mb-2">INGREDIENTS</h2>
          <ul className="list-disc list-inside">
            <li>1 cup all-purpose flour, (spooned and leveled)</li>
            <li>2 tablespoons sugar</li>
            <li>2 teaspoons baking powder</li>
            <li>½ teaspoon salt</li>
            <li>1 cup milk</li>
            <li>1 large egg</li>
            <li>2 tablespoons unsalted butter, melted, or vegetable oil</li>
            <li>Assorted toppings</li>
          </ul>
        </div>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Procedure</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil in a bowl and whisk.</li>
          <li>Add a pinch of salt.</li>
          <li>Set aside for 30 mins to rest if you have time.</li>
          <li>Set a pan over medium heat and carefully wipe it down with oil.</li>
          <li>Pour in your batter using a ladle.</li>
          <li>Cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.</li>
        </ol>
      </div>
    </div>
  );
}

export default Liked;

