const newCategory = (name, description, items) => (
  {
    name,
    description,
    items,
  }
)

const newItem = (name, description, price) => (
  {
    name,
    description,
    price: `$${price.toString()}`
  }
)

const menuData = {
  categories: [
    newCategory(
      "Breakfast Specials",
      "All eggs are cooked to order and served with hash browns or grits, and biscuit with gravy or toast & jelly",
      [
        newItem(
          "Two Egg Breakfast",
          null,
          7.99
        ),
        newItem(
          "Two Egg Plus",
          "Choice of 3 bacon strips, 2 sausage patties or links or 3 ham strips",
          8.99
        ),
        newItem(
          "Ham Steak",
          "An 8oz bone-in southern ham steak. Served with 2 eggs",
          11.99
        ),
        newItem(
          "Country Breakfast",
          "A hand-breaded chicken fried steak topped with country gravy and served with 2 eggs",
          13.99
        ),
        newItem(
          "Pork Chops",
          "2 pork chops, grilled or hand breaded and fried, served with 2 eggs",
          12.99
        ),
        newItem(
          "Sirloin Steak",
          "An 8oz choice sirloin cooked to order and served with 2 eggs",
          14.99
        ),
        newItem(
          "Hamburger Steak",
          "Our 1/2 pound burger patty werved with 2 eggs",
          11.99
        ),
        newItem(
          "All American Sampler",
          "2 eggs with 2 strips of bacon, 2 sausage patties or links, and 2 ham strips",
          12.99
        ),
        newItem(
          "Red, White, and Blue",
          "3 scrambled eggs topped with cheddar jack cheese. Served with 3 bacon strips and 2 sausage patties",
          11.99
        ),
        newItem(
          "Chicken Fried Chicken Breakfast",
          "Hand breaded chicken breast covered with gravy and served with 2 eggs",
          13.99
        ),
        newItem(
          "Grand Old Faithful",
          "Hash browns topped with cheddar jack cheese, ham, bacon, sausage, mushrooms, onions, bell peppers, tomatoes and 2 eggs",
          12.99
        )
      ]
    ),
    newCategory(
      "Cafe Classics",
      null,
      [
        newItem(
          "Breakfast Sandwich",
          "2 pieces of Texas toast filled with 2 eggs and your choice of sausage, bacon, or ham with American cheese. Served with hash browns and silver dollar cakes.",
          10.99
        ),
        newItem(
          "Country Debris",
          "2 open face biscuits topped with hash browns, covered in country gravy, chopped bacon and sausage, and topped with 2 eggs. Served with 3 silver dollar cakes."
          , 11.99
        ),
        newItem(
          "Cafe Burrito",
          "Flour tortilla stuffed with scrambled eggs, onion, bell peppers, cheddar jack cheese, and your choice of bacon, sausage, or ham. Served with hash browns and silver dollar cakes.",
          10.99
        ),
        newItem(
          "Hash Brown Bowl",
          "Hash browns tossed with corned beef, sauteed tomatoes, bell peppers and onions, and jalapenos, cheddar cheese, and 2 eggs. Served with silver dollar pancakes.",
          12.99
        ),
      ]
    ),
    newCategory(
      "Omelets",
      "All omelets are made with 3 eggs and served with hash browns or side of grits and choice of 1 biscuit and gravy or toast & jelly",
      [
        newItem(
          "Cheese Omelet",
          "Stuffed with cheddar jack or pepper jack cheese.",
          8.99
        ),
        newItem(
          "All Meat Omelet",
          "Stuffed with bacon, ham sausage, and cheddar cheese.",
          11.99
        ),
        newItem(
          "Star Spangled Omelet",
          "Sauteed onions, bell peppers, mushrooms, tomatoes, ham, bacon, sausage, and cheddar jack cheese.",
          12.99
        ),
        newItem(
          "Philly Style Omelet",
          "Philly beef steak or grilled chicken with onions, bell peppers, mushrooms, tomatoes, and mozzarella cheese.",
          13.99
        ),
        newItem(
          "Western Omelet",
          "Filled with ham, bell peppers, onion, tomatoes, and cheddar cheese.",
          11.99
        ),
        newItem(
          "Veggie Omelet",
          "Filled with onions, spinach, mushrooms, tomatoes, and mozzarella cheese.",
          11.99
        ),
        newItem(
          "Spanish Omelet",
          "Filled with sauteed onions, tomatoes, sausage, and jalapenos and topped with cheddar cheese.",
          11.99
        )
      ]
    ),
    newCategory(
      "Waffles and Pancakes",
      "Add blueberries, strawberries, bananas, peanut butter, chocolate chips, walnuts, or whipped cream for $0.99 each",
      [
        newItem(
          "Belgian Waffle",
          "A crispy golden waffle.",
          6.99
        ),
        newItem(
          "Waffle Platter",
          "A crisp, golden waffle with 2 eggs, 2 bacon strips, 2 sausage patties or links, and hash browns.",
          13.99
        ),
        newItem(
          "French Toast",
          "6 points dipped in cinnamon custard and grilled to a golden brown topped with powdered sugar, served with a side of syrup.",
          6.99
        ),
        newItem(
          "French Toast Combo",
          "6 points dipped in cinnamon custard and grilled golden brown, served with 2 eggs, 2 bacon strips, 2 sausage patties or links, and hash browns.",
          13.99
        ),
        newItem(
          "Single Pancake",
          null,
          3.99
        ),
        newItem(
          "Short Stack (2)",
          null,
          5.99
        ),
        newItem(
          "Full Stack (3)",
          null,
          6.99
        ),
        newItem(
          "1x1x1",
          "1 pancake, 2 eggs, 1 bacon strip, and your choice of 1 sausage patty or link, and hash browns.",
          10.99
        ),
        newItem(
          "2x2x2",
          "2 pancakes, 2 eggs, 2 bacon strips, and choice of 2 sausage patties or links, and hash browns.",
          13.99
        ),
      ]
    ),
    newCategory(
      "Seniors Breakfast",
      null,
      [
        newItem(
          "Senior 2 Egg Breakfast",
          "2 egg, hash browns, 2 bacon strips or 1 sausage patty, and your choice of one piece of toast or one biscuit and gravy.",
          7.99
        ),
        newItem(
          "Pork Chop",
          "A grilled or hand breaded chop served with 2 eggs, hash browns, and toast or one biscuit and gravy.",
          9.99
        ),
        newItem(
          "Cheese Omelet",
          "2 egg omelet served with hash browns, and toast or biscut and gravy. Add any veggie for $0.59 each. Add any meat $0.99 each.",
          7.99
        ),
        newItem(
          "Senior French Toast",
          "2 points of Texas toast served with 2 eggs, hash browns and 2 bacon strips or 1 sausage.",
          9.99
        ),
        newItem(
          "Senior Country Debris",
          "An open face biscuit with hash browns, covered with gravy, topped with chopped bacon, sausage, and 2 eggs any style, and served with silver dollar cakes.",
          10.99
        ),
        newItem(
          "Senior Meat Omelet",
          "2 egg omelet stuffed with bacon, ham, sausage, and cheddar cheese. Served with hash browns, and toast & jelly or one biscuit and gravy.",
          10.99
        ),
        newItem(
          "Senior Veggie Omelet",
          "2 egg omelet stuffed with spinach, onions, mushrooms, bell peppers, tomatoes and mozzarella cheese. Served with hash browns, and toast & jelly or one biscuit and gravy.",
          10.99
        ),
      ]
    ),
    newCategory(
      "Breakfast Sides",
      null,
      [
        newItem(
          "3 Sausage",
          null,
          3.49
        ),
        newItem(
          "3 Bacon Strips",
          null,
          3.49
        ),
        newItem(
          "3 Turkey Bacon",
          null,
          3.49
        ),
        newItem(
          "One Egg",
          null,
          0.99
        ),
        newItem(
          "Hash Browns",
          null,
          3.49
        ),
        newItem(
          "Grits and Toast",
          null,
          4.99
        ),
        newItem(
          "Oatmeal and Toast",
          null,
          4.99
        ),
        newItem(
          "Toast & Jelly",
          null,
          2.49
        ),
        newItem(
          "Biscuit",
          null,
          1.49
        ),
        newItem(
          "1 Biscuit and Gravy",
          null,
          1.49
        ),
        newItem(
          "2 Biscuit and Gravy",
          null,
          3.49
        ),
      ]
    ),
    newCategory(
      "Great Starters",
      null,
      [
        newItem(
          "Chili Cheese Fries or Tots",
          "Covered in chili, cheese, onion, and bacon crumbles.",
          8.99
        ),
        newItem(
          "Fried Mushrooms",
          "Dipped in buttermilk and seasoned flour, served with ranch.",
          7.99
        ),
        newItem(
          "Mozzarella Cheese Sticks",
          "eight per order. Served with a side of our zesty marinara.",
          7.99
        ),
        newItem(
          "Fried Jalapeno Caps",
          "Dipped in buttermilk and seasoned flour. Served with ranch.",
          7.99
        ),
        newItem(
          "Fried Pickles Caps",
          "Dipped in buttermilk and seasoned flour. Served with ranch.",
          7.99
        ),
      ]
    ),
    newCategory(
      "Soups",
      null,
      [
        newItem(
          "Soup of the Day - Cup",
          null,
          3.99
        ),
        newItem(
          "Soup of the Day - Bowl",
          null,
          5.99
        ),
        newItem(
          "Soup and Side Salad",
          "A cup of our soup of the day served with a side salad and crackers.",
          7.99
        ),
        newItem(
          "Frito Chili Pie",
          "Corn chips vovered in our house chili, cheddar jack cheese, pinto beans, and onions.",
          7.99
        ),
        newItem(
          "House Chili - Cup",
          null,
          3.99
        ),
        newItem(
          "House Chili - Bowl",
          null,
          6.99
        ),
      ]
    ),
    newCategory(
      "Fresh Salads",
      "Dressings: Homemade Ranch, French, 100 Island, Lite Italian, Raspberry Vinaigrette, and Honey Mustard. Add avocado or bacon to any salad for only $1.99 each.",
      [
        newItem(
          "Ultimate Chef",
          "Sliced lean ham and turky breast on a bed of lettuce garnished with cucumbers, tomatoes, olives, a hardboiled egg, and topped with cheddar jack cheese.",
          11.99
        ),
        newItem(
          "Grilled or Fried Chicken Salad",
          "Grilled or fried hand breaded chicken breast served on a bed of lettuce garnished with cucumbers, tomatoes, olives, a hardboiled egg, and topped with cheddar jack cheese.",
          11.99
        ),
        newItem(
          "Taco Salad",
          "Tortilla chips covered with chili and topped with lettuce, tomatoes, olives, and cheddar jack cheese with sour cream and salsa on the side.",
          10.99
        ),
        newItem(
          "Cheese and Avocado Salad",
          "Fresh lettuce topped with sliced avocado, cheddar jack cheese, tomatoes, red onion, carrot, cucumbers, olives and a hard-boiled egg.",
          10.99
        ),
        newItem(
          "House Salad",
          "Lettuce, tomatoes, cucumbers, egg, olive, red onion, and cheese.",
          5.99
        ),
      ]
    ),
    newCategory(
      "Lite Side",
      "Served with a House Salad and your choice of 1 side",
      [
        newItem(
          "Grilled Chicken Breast",
          "Marinated chicken breast seasoned and grilled: served on a bed of lettuce with red onion, avocado, and sliced tomatoes.",
          11.99
        ),
        newItem(
          "Grilled Hamburger Patty",
          "1/2 pound beef patty served on a bed of lettuce with red onion, avocado, and sliced tomatoes.",
          11.99
        )
      ]
    ),
    newCategory(
      "Sandwich Board",
      "Served with your choice of French Fries, Tater Tots, Onion Ring, or House Salad. \n *Substitute the bread with Lettuce Leaf for a Low Carb / Low Calorie Option",
      [
        newItem(
          "Ultimate Reuben",
          "Thinly sliced, savory pastrami or corned beef, Swiss cheese and sauerkraut topped with 1000 Island dressing on grilled marble rye.",
          11.99
        ),
        newItem(
          "Philly Cheese Sandwich",
          "Your choice of tender steak or chicken with grilled onions, mushrooms, and green peppers, topped with cheese.",
          11.99
        ),
        newItem(
          "The First Lady",
          "Sliced smoked turkey, avocado, tomato, Swiss cheese, and mayo on toasted wheat bread.",
          10.99
        ),
        newItem(
          "Tuna Salad Sandwich",
          "Fresh made tuna salad on grilled oat nut bread, with lettuce, tomatoes, and red onion.",
          10.99
        ),
        newItem(
          "The Liberty Bell",
          "Thinly Sliced smoked ham with Swiss cheese, lettuce, tomato, and mayo on toasted wheat bread.",
          10.99
        ),
        newItem(
          "B.L.T Supreme",
          "Bacon, lettuce, tomato, and mayo on grilled wheat bread.",
          11.99
        ),
        newItem(
          "America's Best Club",
          "Turkey, ham, bacon, American and Swiss cheese, piled high on grilled potato bread with lettuce, tomato, and mayo.",
          11.99
        ),
        newItem(
          "Pastrami",
          "Thinly sliced lean pastrami, big eye Swiss cheese, lettuce, tomatoes, and Dijon mustard served marble rye.",
          11.99
        ),
      ]
    ),
    newCategory(
      "Gourmet Burgers",
      "Our fresh juicy 1/2 pound burgers are cooked to well done and served with Tater Tots, French Fries, Onion Rings or House Salad. Add cheese or bacon for $0.99 each",
      [
        newItem(
          "USA Old Fashioned Burger",
          "Our original 1/2 pound burger with your choice of mustard or mayo, on a toasted bun topped with lettuce, tomato, onion, and pickles.",
          9.99
        ),
        newItem(
          "Sapulpa Burger",
          "1/2 pound burger served open face on Texas toast; topped with fries and covered in gravy with sauteed onion and diced bacon. Fries included, no additional side.",
          11.99
        ),
        newItem(
          "Mushroom Burger",
          "1/2 pound burger topped with sauteed mushrooms and onions, and Swiss cheese. Served on a toasted bun with your choice of mustard or mayo.",
          11.99
        ),
        newItem(
          "Stars & Stripes",
          "1/4 pound patty lettuce, tomato, onion. Extra 1/4 pound patty: $2.99",
          7.99
        ),
        newItem(
          "Davy Crockett Patty Melt",
          "1/2 pound burger topped with sauteed onions and Swiss cheese on grilled rye bread.",
          11.99
        ),
        newItem(
          "Texas Red Burger",
          "Two 1/4 pound hamburger patties served open-faced on Texas toast, smothered with chili, cheddar cheese, and grilled onions.",
          12.99
        ),
        newItem(
          "Smoke House BBQ",
          "1/2 pound burger on a toasted bun with cheddar cheese, diced bacon, BBQ sauce, pickles , and onion tanglers.",
          11.99
        ),
        newItem(
          "Breakfast Burger",
          "1/2 pound burger with cheese, onion, hash brown, bacon and fried egg on toasted bun.",
          11.99
        ),
      ]
    ),
    newCategory(
      "Specials and Pasta",
      "Add a side or salad to any entree: $2.49",
      [
        newItem(
          "Classic Alfredo",
          "Penne pasta with broccoli covered in our made fresh to order creamy alfredo sauce with your choice of chicken or shrimp and garlic toast.",
          13.99
        ),
        newItem(
          "Spaghetti & Meatballs",
          "Served with home-style meatballs, marinara sauce, mozzarella cheese, and garlic toast.",
          12.99
        ),
        newItem(
          "4-way Spaghetti",
          "Spaghetti topped with chili, beans, onions, and cheddar cheese, served with garlic toast.",
          12.99
        ),
        newItem(
          "Chicken Monterey",
          "Grilled chicken breast covered with sauteed mushrooms, onions, spinach, and cherry tomatoes. Topped with bacon and mozzarella cheese.",
          13.99
        ),
        newItem(
          "Open Face Bi-Centennial",
          "Roast beef piled high on Texas toast; served with mashed potatoes and smothered with brown gravy.",
          11.99
        )
      ]
    ),
    newCategory(
      "Great Plates",
      "Served with your choice of any 2 sides and a hot roll. \n Add a side salad for $2.49.",
      [
        newItem(
          "Chicken Fried Steak",
          "Hand breaded buttermilk choice cube steak fried golden brown; covered in country gravy.",
          13.99
        ),
        newItem(
          "Chicken Fried Chicken",
          "Hand breaded buttermilk chicken breast fried and covered in country gravy.",
          13.99
        ),
        newItem(
          "Liver and Onions",
          "Grilled beef liver topped with sauteed red onions and covered in rich brown gravy.",
          11.99
        ),
        newItem(
          "Grilled Chicken Breast",
          "Marinated chicken breast seasoned and grilled to perfection.",
          11.99
        ),
        newItem(
          "Roast Beef Dinner",
          "Slow cooked tender roast beef; covered in brown gravy.",
          13.99
        ),
        newItem(
          "Pork Chops",
          "2 country style chops seasoned and grilled or hand breaded and fried.",
          12.99
        ),
        newItem(
          "Chicken Strips Platter",
          "Hand breaded buttermilk chicken tenders. Served with your choice of ranch, BBQ, buffalo, or honey mustard.",
          12.99
        ),
        newItem(
          "Hamburger Steak",
          "Fresh beef burger topped with sauteed onions, mushrooms and covered in rich brown gravy.",
          11.99
        )
      ]
    ),
    newCategory(
      "Steak and Seafood",
      "All dinners are served with 2 sides and a roll. \n Add 2 chicken tenders or 4 shrimp: $2.99",
      [
        newItem(
          "Top Sirloin",
          "Choice 8oz sirloin steak, hand cut in house, and cooked to your liking.",
          14.99
        ),
        newItem(
          "Shrimp Dinner",
          "Breaded and fried jumbo shrimp served with choice of dipping sauce.",
          13.99
        ),
        newItem(
          "Catfish",
          "2 delicious, deep-fried catfish fillets served with hush puppies, and tartar sauce.",
          11.99
        ),
        newItem(
          "Gourmet Grilled Salmon",
          "8oz Atlantic salmon fillet seasoned and grilled to perfection, served on a bed of rice with sweet and savory gourmet sauce, and garlic toast.",
          13.99
        )
      ]
    ),
    newCategory(
      "Dessert",
      "Add a scoop of ice cream: $1.49",
      [
        newItem(
          "Cobbler",
          null,
          3.99
        ),
        newItem(
          "Pie",
          null,
          3.99
        ),
        newItem(
          "French Silk",
          null,
          3.99
        ),
        newItem(
          "Cheesecake",
          "Choice of blueberries or strawberries, with whipped cream.",
          4.99
        )
      ]
    ),
    newCategory(
      "Beverages",
      null,
      [
        newItem(
          "Soft Drinks",
          "Free Refills",
          2.49
        ),
        newItem(
          "Iced Tea",
          "Sweet / Unsweetened and Free Refills",
          2.49
        ),
        newItem(
          "Hot Tea",
          "Free Refills",
          2.49
        ),
        newItem(
          "Coffee",
          "Regular / Decaf and Free Refills",
          2.49
        ),
        newItem(
          "Milk",
          null,
          2.99
        ),
        newItem(
          "Chocolate Milk",
          null,
          2.99
        ),
        newItem(
          "Orange Juice - Medium",
          null,
          2.99
        ),
        newItem(
          "Orange Juice - Large",
          null,
          3.99
        ),
        newItem(
          "Apple Juice - Medium",
          null,
          2.99
        ),
        newItem(
          "Apple Juice - Large",
          null,
          3.99
        ),
        newItem(
          "Hot Chocolate",
          null,
          2.49
        )
      ]
    )
  ]
};

export default menuData;