import breakfast from "./images/breakfast.jpeg"
import breakfast2 from "./images/breakfast2.jpeg"

let ingredients = [
    {
      "ammount": "2",
      "measurement": "packages",
      "syntax": "of",
      "ingredient": "active dry yeast"
    },
    {
      "ammount": "1/2",
      "measurement": "cup",
      "ingredient": "white sugar"
    },
    {
      "ammount": "1/2",
      "measurement": "cup",
      "ingredient": "shortening"
    },
    {
      "ammount": "2",
      "measurement": "",
      "ingredient": "eggs"
    },
    {
      "ammount": "1",
      "measurement": "cup",
      "ingredient": "milk"
    },
    {
      "ammount": "1",
      "measurement": "cup",
      "ingredient": "warm water"
    },
    {
      "ammount": "1",
      "measurement": "teaspoon",
      "ingredient": "salt"
    },
    {
      "ammount": "6",
      "measurement": "cups",
      "ingredient": "all purpose flour"
    }
  ];

let overview = {
  title:"Raised Donut Recipe with Glaze",
  rating:"4 donuts!",
  description:"I have totally had it with packing!  Time to do something else for a while.  Luckily, while I was going through my stuff to pack, I ran across an old recipe for raised donuts with old fashioned sugar glaze.  I remember my mother making these for me and my sister when we were little.....such good memories.  So I decided to share it with you.  It is quite a bit more complicated than the recipes of today, these donuts are made the way they used to make them, long ago."
};

let images = [
{
  imageLink:breakfast,
  imageTitle:"Breakfast"
},
{
  imageLink:breakfast2,
  imageTitle:"Breakfast 2"
}
];

let directions = [
{step:"In a bowl with a spoon, mix yeast and warm water, and set aside"},
{step:"In a large bowl, mix sugar, salt and shortening (I use a stand mixer)"},
{step:"Add milk and allow to cool to room temperature"},
{step:"Beat eggs in another bowl with a whisk, and add to cooled mixture"},
{step:"Add yeast and water mixture"},
{step:"Add flour a bit at a time until you have a ball of dough (I use the paddle attachment)"},
{step:"Set dough in an oiled mixing bowl and allow to rise until it has doubled in size"},
{step:"Flour a board or you counter and place the dough on it."},
{step:"Roll the dough to a 1/2 inch thickness and cut with a cookie cutter or mason jar lid"},
{step:"Cut the hole (my mom used a thimble)"},
{step:"Let donuts rise again, for 30 minutes"},
{step:"Heat one inch of oil and fry donuts until both sides are golden brown."}
];


export {ingredients,overview,images,directions};
