import breakfast from "./images/breakfast.jpeg"
import breakfast2 from "./images/breakfast2.jpeg"
import onionPie1 from './images/onion-pie-1.jpg'
import onionPie2 from './images/onion-pie-2.jpg'
import onionPie3 from './images/onion-pie-3.jpg'

let links = [
  {
    recipeNumber:"1",
    recipeTitle:"Raised Donut Recipe with Glaze",
    imageLink: breakfast
  },
  {
    recipeNumber:"2",
    recipeTitle:"Cheese and Onion Pie",
    imageLink: onionPie1
  }
];

let donutRecipe = {
  ingredients: [
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
  ],
  overview: {
    title:"Raised Donut Recipe with Glaze",
    rating:"4 donuts!",
    description:"I have totally had it with packing!  Time to do something else for a while.  Luckily, while I was going through my stuff to pack, I ran across an old recipe for raised donuts with old fashioned sugar glaze.  I remember my mother making these for me and my sister when we were little.....such good memories.  So I decided to share it with you.  It is quite a bit more complicated than the recipes of today, these donuts are made the way they used to make them, long ago."
  },
  images: [
    {
      imageLink:breakfast,
      imageTitle:"Breakfast"
    },
    {
      imageLink:breakfast2,
      imageTitle:"Breakfast 2"
    }
  ],
  directions: [
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
  ]
};

let onionPieRecipe = {
  ingredients: [
    {
      "ammount": "1/4",
      "measurement": "cup",
      "syntax": "of",
      "ingredient": "unsalted butter",
      "note": ", or half a stick"
    },
    {
      "ammount": "6",
      "measurement": "",
      "ingredient": "Onions",
      "note": ", thinly sliced"
    },
    {
      "ammount": "1",
      "measurement": "teaspoon",
      "ingredient": "kosher salt"
    },
    {
      "ammount": "1",
      "measurement": "teaspoon",
      "ingredient": "freshly ground black pepper"
    },
    {
      "ammount": "3/4",
      "measurement": "cup",
      "ingredient": "water"
    },
    {
      "ammount": "1 1/2",
      "measurement": "pounds",
      "ingredient": "grated Cheddar cheese"
    },
    {
      "ammount": "2",
      "measurement": "",
      "ingredient": "eggs"
    },
    {
      "ammount": "5",
      "measurement": "tablespoons",
      "ingredient": "sour cream"
    },
    {
      "ammount": "1/4",
      "measurement": "cup",
      "syntax": "of",
      "ingredient": "unsalted butter",
      "note": ", or half a stick"
    },
    {
      "ammount": "6",
      "measurement": "",
      "ingredient": "Onions",
      "note": ", thinly sliced"
    },
    {
      "ammount": "1",
      "measurement": "teaspoon",
      "ingredient": "kosher salt"
    },
    {
      "ammount": "1",
      "measurement": "teaspoon",
      "ingredient": "freshly ground black pepper"
    },
    {
      "ammount": "3/4",
      "measurement": "cup",
      "ingredient": "water"
    },
    {
      "ammount": "1 1/2",
      "measurement": "pounds",
      "ingredient": "grated Cheddar cheese"
    },
    {
      "ammount": "2",
      "measurement": "",
      "ingredient": "eggs"
    },
    {
      "ammount": "5",
      "measurement": "tablespoons",
      "ingredient": "sour cream"
    }
  ],
  overview: {
    title:"Cheese and Onion Pie",
    rating:"TBD",
    author:"Rebecca",
    link:"https://www.foodiewithfamily.com/cheese-onion-pie/",
    description:
`I'm happy to have developed today’s recipe for Cheese and Onion Pie as part of my partnership with Horizon Organic. I love cooking with their naturally good products and I feel great about feeding them to my active kids. And my whole family loves this classic crisp-crusted British-style Cheese and Onion Pie packed with a creamy filling of savoury onions and Cheddar cheese with a hint of British mustard.
<image>
With cooler fall weather comes a deep desire for hearty, warm foods that fill your belly. In fact, it often seems like a biological imperative to create comforting foods. Cheese and Onion pie might sound a little weird at first, but it is a classic British comfort food and mainstay of family tables and pubs across the UK. Just think of it: creamy filling made from gently cooking onions down in butter with a tremendously generous amount of Cheddar cheese and a little egg and Coleman's British style mustard to bind it, all lovingly tucked into a crisp pastry crust made with another hint of mustard in it. Onions, cheese, and mustard are such good friends and they play beautifully together in this Cheese and Onion Pie.

There is no need for pastry anxiety on this beautiful pie, either, because it is a take on the dead easy hot water pastry and is almost impossible to overwork unlike most pie crusts. Hot water pastry fell out of favour for a while because of the fact that it is sturdy and crisp rather than lofty and flaky as is the fashion for pies. The thing is, though, a flaky delicate crust just can’t stand up to being filled with super hearty savoury fillings like pot pies and cheese and onion pies.
<image>
This pie is best made in a 9- or 10-inch springform pan. If you don’t have one and don’t want to purchase one, you can make it in a parchment lined casserole dish, but it will be harder to remove the pie from the pan after it cools. Getting the finished Cheese and Onion Pie out of the pan is important to keeping the sides and bottom of the crust crisp. If you plan to eat the whole pie in one go, that is not as big a deal, but we like to have leftovers to serve for lunch or hearty snacks the day after it is made.
<image>
I like to guarantee easy removal of my cheese and onion pie from my springform pan by laying a sheet of parchment that is larger than the pan over the base of the springform pan before fitting the sides in place. When the pie has cooled a bit and I remove the sides of the pan, I can then use the parchment sling to lift the pie to a cutting board or serving platter.

Our “hot water pastry” has a little added interest by being made with hot milk instead of hot water. This gives the crust a little added flavour and depth.

Be sure to whisk together your dry mustard, salt, and flour before adding the hot milk and butter mixture. That will ensure that any clumps of dry mustard are broken up and evenly distributed. Biting into a clump of dried mustard is just not pleasant. If you do not have dry mustard powder, you can omit it from the recipe but do not substitute liquid mustard.

Please don’t worry about overworking the pie pastry. You actually WANT to develop the gluten in the pastry dough so that the crust is crisp and almost cracker-like.

The process for rolling out the pastry is just a wee bit different than you may be accustomed to if you haven’t worked with a hot water pastry dough before. For this one, you roll it out to just slightly larger than the base of the springform pan.

Be patient while cooking your onions. The idea is to soften them and allow the natural sweetness to develop rather than brown them.

While I love Colman’s British Style mustard in these pies for the classic spicy mustard flavour it imparts, you can sub in an equal amount of smooth Dijon mustard if you can’t find the Colman’s.

I advise using at least sharp Cheddar, but preferably extra sharp Cheddar for these pies. I like an assertive cheese to stand up to the onions and mustard.

Because there are so few ingredients in this pie, you really want to focus on using quality ingredients without funky additives and preservatives like Whole Milk, Sour Cream, Eggs, from our sponsor Horizon Organic. Let’s keep the weird in our personalities and out of our ingredients.`
  },
  images: [
    {
      imageLink:onionPie1,
    },
    {
      imageLink:onionPie2,
    },
    {
      imageLink:onionPie3,
    }
  ],
  directions: [
    {step:"Melt the butter in a 3 quart saucepan over low heat. Toss in the thinly sliced onion, salt, and pepper to coat evenly. Cook the onions for 4 minutes, stirring frequently. Pour in the water, stir well, and raise the heat to medium and cook, stirring often, until the onions are soft but not golden, about 6 to 8 more minutes. Set aside to cool to room temperature or cover and chill in the refrigerator for up to 2 days. In a mixing bowl, stir together the cooled onions, grated cheese, eggs, sour cream, and British mustard until evenly combined. Set aside the filling to make your pastry dough. "},

    {step:"Preheat oven to 375°F. Line a springform pan or casserole dish with parchment paper and set aside. Be certain your filling is ready to go. In a large mixing bowl, whisk together the all purpose flour, mustard powder, and kosher salt. Make a well in the center of the flour and set aside. Place a medium sized saucepan over medium heat. Gently bring the milk and butter to a simmer. Pour this hot liquid into the flour well. Use a heat-proof spatula to mix together until a shaggy dough mass forms. Transfer the dough to a lightly floured surface and knead until smooth, about 2-3 minutes. Divide dough into two pieces. While the dough is still hot, roll each piece between two pieces of parchment paper or plastic wrap to about the size of the base of your pan.  Ease one of the rounds of dough into your prepared pan. Starting at the center of the dough press outward, gently working the dough outward and up the sides of the pan. Don't worry if it tears a bit, you can patch it with ess dough. Scrape the filling into the crust, level gently, and position the second crust over the filling, trimming the excess away and pinching the seams where the bottom and top crusts meet together. Brush the top crust with the egg wash and use a sharp knife to cut three vent holes. Place your tart pan or pie crust on a rimmed sheet pan and bake for 60 to 70 minutes or until quite a deep glossy brown and the filling is bubbling up through the vent holes. Allow to cool until just warm or room temperature before slicing. Leftovers hold well in the refrigerator for up to a week. "
  },
  ]
};

export {donutRecipe,onionPieRecipe,links};
