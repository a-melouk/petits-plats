let recipes = [
  { id: 1, image: 'Recette01.jpg', name: 'Limonade de Coco', servings: 1, ingredients: [{ ingredient: 'Lait de coco', quantity: 400, unit: 'ml' }, { ingredient: 'Jus de citron', quantity: 2 }, { ingredient: 'Cr\xe8me de coco', quantity: 2, unit: 'cuill\xe8res \xe0 soupe' }, { ingredient: 'Sucre', quantity: 30, unit: 'grammes' }, { ingredient: 'Gla\xe7ons' }], time: 10, description: "Mettre les gla\xe7ons \xe0 votre go\xfbt dans le blender, ajouter le lait, la cr\xe8me de coco, le jus de 2 citrons et le sucre. Mixer jusqu'\xe0 avoir la consistence d\xe9sir\xe9e", appliance: 'Blender', ustensils: ['cuill\xe8re \xe0 Soupe', 'verres', 'presse citron'] },
  {
    id: 2,
    image: 'Recette02.jpg',
    name: 'Poisson Cru \xe0 la tahitienne',
    servings: 2,
    ingredients: [
      { ingredient: 'Thon Rouge (ou blanc)', quantity: 200, unit: 'grammes' },
      { ingredient: 'Concombre', quantity: 1 },
      { ingredient: 'Tomate', quantity: 2 },
      { ingredient: 'Carotte', quantity: 1 },
      { ingredient: 'Citron Vert', quantity: 5 },
      { ingredient: 'Lait de Coco', quantity: 100, unit: 'ml' }
    ],
    time: 60,
    description: 'D\xe9couper le thon en d\xe9s, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au r\xe9frig\xe9rateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Apr\xe8s avoir laiss\xe9 mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les p\xe9pins. Rayer la carotte. Ajouter les l\xe9gumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouvez ajouter 1 \xe0 2 cuill\xe8res \xe0 soupe de Cr\xe8me de coco',
    appliance: 'Saladier',
    ustensils: ['presse citron']
  },
  {
    id: 3,
    image: 'Recette03.jpg',
    name: 'Poulet coco r\xe9unionnais',
    servings: 4,
    ingredients: [
      { ingredient: 'Poulet', quantity: 1 },
      { ingredient: 'Lait de coco', quantity: 400, unit: 'ml' },
      { ingredient: 'Coulis de tomate', quantity: 25, unit: 'cl' },
      { ingredient: 'Oignon', quantity: 1 },
      { ingredient: 'Poivron rouge', quantity: 1 },
      { ingredient: "Huile d'olive", quantity: 1, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 80,
    description: "D\xe9couper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois dor\xe9, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon d\xe9coup\xe9s en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
    appliance: 'Cocotte',
    ustensils: ['couteau']
  },
  {
    id: 4,
    image: 'Recette04.jpg',
    name: 'Salade de riz',
    servings: 4,
    ingredients: [
      { ingredient: 'Riz blanc', quantity: 500, unit: 'grammes' },
      { ingredient: 'Thon en miettes', quantity: 200, unit: 'grammes' },
      { ingredient: 'Tomate', quantity: 2 },
      { ingredient: 'Oeuf dur', quantity: 2 },
      { ingredient: 'Ma\xefs', quantity: 300, unit: 'grammes' },
      { ingredient: 'Vinaigrette', quantity: 5, unit: 'cl' }
    ],
    time: 50,
    description: 'Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en d\xe9s, ajouter au riz les oeufs, les tomates, le poisson, le ma\xefs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..',
    appliance: 'Cuiseur de riz',
    ustensils: ['saladier', 'passoire']
  },
  {
    id: 5,
    image: 'Recette05.jpg',
    name: 'Tarte au thon',
    servings: 4,
    ingredients: [
      { ingredient: 'P\xe2te feuillet\xe9e', quantity: 1 },
      { ingredient: 'Thon en miettes', quantity: 130, unit: 'grammes' },
      { ingredient: 'Tomate', quantity: 2 },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 2, unit: 'cuill\xe8res \xe0 soupe' },
      { ingredient: 'gruy\xe8re r\xe2p\xe9', quantity: 100, unit: 'grammes' },
      { ingredient: 'Moutarde de Dijon', quantity: 1, unite: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 45,
    description: '\xc9taler la p\xe2te feuillet\xe9 aux dimensions du moule, \xe9taler la moutarde sur la p\xe2te feuillet\xe9, ajouter le thon. D\xe9couper les tomates en rondelles et les poser sur le poisson, ajouter un peu de cr\xe8me fra\xeeche sur toute la tarte et recouvrez de gruy\xe8re r\xe2p\xe9. Cuire au four 30 minutes',
    appliance: 'Four',
    ustensils: ['moule \xe0 tarte', 'r\xe2pe \xe0 fromage', 'couteau']
  },
  {
    id: 6,
    image: 'Recette06.jpg',
    name: 'Tarte aux pommes',
    servings: 6,
    ingredients: [
      { ingredient: 'P\xe2te bris\xe9e', quantity: 1 },
      { ingredient: 'Pomme', quantity: 3 },
      { ingredient: 'Oeuf', quantity: '2' },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 25, unit: 'cl' },
      { ingredient: 'Sucre en Poudre', quantity: 100, unit: 'grammes' },
      { ingredient: 'Sucre vanill\xe9', quantity: 1, unit: 'sachets' }
    ],
    time: 50,
    description: "Commencez par m\xe9langer les oeufs le sucre et le sucre vanill\xe9 dans un saladier, d\xe9couper les pommes en tranches, ajouter la cr\xe8me fra\xeeche aux oeufs. Une fois que tout est pret, \xe9talez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finalement verser la pr\xe9paration \xe0 base d'oeufs et de cr\xe8me fra\xeeche. Laisser cuire au four pendant 30 minutes",
    appliance: 'Four',
    ustensils: ['moule \xe0 tarte', 'saladier', 'fourchette']
  },
  {
    id: 7,
    image: 'Recette07.jpg',
    name: 'Tartelettes au chocolat et aux fraises',
    servings: 6,
    ingredients: [
      { ingredient: 'P\xe2te sabl\xe9e', quantity: 1 },
      { ingredient: 'Chocolat au lait', quantity: 300, unit: 'grammes' },
      { ingredient: 'Cr\xe8me liquide', quantity: 80, unit: 'cl' },
      { ingredient: 'Beurre', quantity: '30', unit: 'grammes' },
      { ingredient: 'Fraise', quantity: 6 }
    ],
    time: 50,
    description: "\xc9taler la pate dans les moules \xe0 tartelette. Faire cuire la pate 30 minutes. D\xe9couper le chocolat en morceau et le faire chauffer, y ajouter la cr\xe8me liquide, ajouter le beurre et remuer jusqu'\xe0 avoir une p\xe2te homog\xe8ne. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
    appliance: 'Four',
    ustensils: ['moule \xe0 tartelettes (6)', 'casserole']
  },
  {
    id: 8,
    image: 'Recette08.jpg',
    name: 'Brownie',
    servings: 10,
    ingredients: [
      { ingredient: 'Noix', quantity: '180', unit: 'grammes' },
      { ingredient: 'Chocolat noir', quantity: 150, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 120, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 2 },
      { ingredient: 'Sucre en Poudre', quantity: '110', unit: 'grammes' },
      { ingredient: 'farine', quantity: 90, unit: 'grammes' }
    ],
    time: 60,
    description: "Hachez les noix grossi\xe8rement. Faire fondre le chocolat avec le beurre. M\xe9langer les oeufs et le sucre et m\xe9langer au chocolat. Ajouter la farine. M\xe9langer afin d'avoir quelque chose d'homog\xe8ne puis incorporer les noix. Verser la pr\xe9paration dans un moule de pr\xe9f\xe9rence rectangulaire. Cuire 2O \xe0 25 minutes \xe0 180\xb0. Sortez du four et attendez quelques minutes pour d\xe9mouler. Servir avec une boule de glace pour plus de gourmandise.",
    appliance: 'Four',
    ustensils: ['moule \xe0 gateaux', 'casserole']
  },
  { id: 9, image: 'Recette09.jpg', name: 'Salade M\xe9diterann\xe9ene fra\xeeche au ch\xe8vre', servings: 4, ingredients: [{ ingredient: 'Concombre', quantity: 1 }, { ingredient: 'Olives' }, { ingredient: 'Fromage de ch\xe8vre', quantity: 150, unit: 'grammes' }, { ingredient: 'Vinaigre Balsamic' }, { ingredient: "Huile d'olive" }, { ingredient: 'Basilic' }], time: 15, description: "Peler le concombre le couper 2, retirer les p\xe9pins. Couper les olives en morceaux, ainsi que le fromage de ch\xe8vre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives \xe0 votre gout.", appliance: 'Saladier', ustensils: ['cuill\xe8re en bois', 'couteau'] },
  {
    id: 10,
    image: 'Recette10.jpg',
    name: 'Tartiflette',
    servings: 4,
    ingredients: [
      { ingredient: 'Reblochon', quantity: '1' },
      { ingredient: 'Pommes de terre', quantity: 4.5, unit: 'kg' },
      { ingredient: 'Jambon fum\xe9', quantity: 2, unit: 'tranches' },
      { ingredient: 'Oignon', quantity: 300, unit: 'grammes' },
      { ingredient: 'Vin blanc sec', quantity: 30, unit: 'cl' }
    ],
    time: 60,
    description: "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis \xe9pluchez les et coupez les en rondelles. \xc9mincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fum\xe9 coup\xe9 en en morceaux ainsi que les pommes de terres. Salez, poivrez \xe0 votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Apr\xe8s 5 minutes, mettre le tout dans un plat \xe0 gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'\xe9paisseur et recouvrir les pommes de terre. Cuire au four (environ 220\xb0) durant 25 minutes. C'est pr\xeat !",
    appliance: 'Four',
    ustensils: ['plat \xe0 gratin', 'couteau', '\xc9conome']
  },
  {
    id: 11,
    image: 'Recette11.jpg',
    name: 'Salade tomate, mozzarella et pommes',
    servings: 4,
    ingredients: [
      { ingredient: 'Tomates cerises', quantity: 250, unit: 'grammes' },
      { ingredient: 'Mozzarella', quantity: 150, unit: 'grammes' },
      { ingredient: 'Jambon de parme', quantity: 4, unit: 'tranches' },
      { ingredient: 'Pommes', quantity: 1 },
      { ingredient: 'Salade Verte', quantity: 1 },
      { ingredient: 'Vinaigrette', quantity: 5, unit: 'cl' }
    ],
    time: 10,
    description: 'Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage d\xe9coup\xe9 en cubes ou en boules avec la cuill\xe8re \xe0 melon. D\xe9couper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi d\xe9coup\xe9e en petit morceaux. Assaisonnez \xe0 votre gout. ',
    appliance: 'Saladier',
    ustensils: ['couteau', 'cuill\xe8re \xe0 melon']
  },
  {
    id: 12,
    image: 'Recette12.jpg',
    name: 'Compote pomme rhubarbe',
    servings: 4,
    ingredients: [
      { ingredient: 'Rhubarbe', quantity: 160, unit: 'grammes' },
      { ingredient: 'Pommes', quantity: 8 },
      { ingredient: 'Sucre vanill\xe9', quantity: 6, unit: 'sachets' },
      { ingredient: 'Eau', quantity: '0.5', unit: 'tasses' }
    ],
    time: 40,
    description: "\xc9plucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanill\xe9. Laisser cuire 15 minutes en remuant r\xe9guli\xe8rement.",
    appliance: 'Casserole',
    ustensils: ['couteau', '\xe9conome']
  },
  {
    id: 13,
    image: 'Recette13.jpg',
    name: 'Salade m\xe2ch\xe9e de patates',
    servings: 2,
    ingredients: [
      { ingredient: 'M\xe2che', quantity: 60, unit: 'grammes' },
      { ingredient: 'Pommes de terre', quantity: 200, unit: 'grammes' },
      { ingredient: '\xc9chalote', quantity: 2 },
      { ingredient: 'Vinaigre de cidre', quantity: 1, unit: 'cuill\xe8re \xe0 soupe' },
      { ingredient: "huile d'olive", quantity: 2, unit: 'cuill\xe8re \xe0 soupe' }
    ],
    time: 40,
    description: "Cuire les pommes de terre environ 30 minutes. D\xe9couper les \xe9chalotes finement. Durant la cuisson des pommes de terre. Pr\xe9parez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez \xe0 discr\xe9tion. Dans un saladier, mettre le m\xe2che. Ajouter",
    appliance: 'Casserole',
    ustensils: ['couteau', 'saladier', 'cuill\xe8re en bois']
  },
  {
    id: 14,
    image: 'Recette14.jpg',
    name: 'Galette Bretonne Saucisse et Fromage \xe0 raclette',
    servings: 2,
    ingredients: [
      { ingredient: 'Saucisse bretonne ou de Toulouse', quantity: 2 },
      { ingredient: 'Farine de bl\xe9 noir', quantity: 130, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 1 },
      { ingredient: 'Fromage \xe0 raclette', quantity: 300, unit: 'grammes' },
      { ingredient: 'Oignon', quantity: 1 },
      { ingredient: 'Beurre', quantity: 75, unit: 'grammes' }
    ],
    time: 100,
    description: "M\xe9langer la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter \xe0 la p\xe2te. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les cr\xeapes avec une partie du fromage. Mettre le reste du fromage \xe0 raclette par dessus les cr\xeapes. Passer four pendant 20 minutes",
    appliance: 'Four',
    ustensils: ['po\xeale \xe0 frire', 'couteau']
  },
  {
    id: 15,
    image: 'Recette15.jpg',
    name: 'Cr\xeapes Chocolat Banane',
    servings: 10,
    ingredients: [
      { ingredient: 'Oeuf', quantity: 3 },
      { ingredient: 'Farine', quantity: 250, unit: 'grammes' },
      { ingredient: 'Lait', quantity: 600, unit: 'ml' },
      { ingredient: 'Beurre sal\xe9', quantity: 30, unit: 'grammes' },
      { ingredient: 'Chocolat au lait', quantity: 100, unit: 'grammes' },
      { ingredient: 'Banane', quantity: 4 }
    ],
    time: 60,
    description: "M\xe9langez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'\xe0 avoir une masse homog\xe8ne. Pendant ce temps faites fondre le beurre et ajoutez en une partie \xe0 la p\xe2te \xe0 cr\xeapes. Faire fondre le chocolat ( avec le reste du beurre sal\xe9 ). Lorsque vous chauffez les cr\xeapes. Ajouter le chocolat fondu et les bananes coup\xe9es en rondelles. Ajoutez une touche de chantilly pour les gourmands",
    appliance: 'Po\xeale \xe0 cr\xeape',
    ustensils: ['saladier', 'louche', 'cuill\xe8re en bois']
  },
  {
    id: 16,
    image: 'Recette16.jpg',
    name: 'Gratin de p\xe2tes \xe0 la tomate',
    servings: 2,
    ingredients: [
      { ingredient: 'Tomate', quantity: 500, unit: 'grammes' },
      { ingredient: 'Mozzarella', quantity: 250, unit: 'grammes' },
      { ingredient: 'Pennes', quantity: 500, unit: 'grammes' },
      { ingredient: 'Basilic', quantity: 1, unit: 'tiges' },
      { ingredient: "huile d'olives", quantity: 2, unit: 'cuill\xe8re \xe0 soupe' }
    ],
    time: 45,
    description: "Faire cuire les p\xe2tes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. D\xe9couper les tomates en petits morceaux, soit en tranches soit en d\xe9s. Coupez le basilic en petites morceaux et m\xe9langez le aux tomates.  Coupez la mozzarella en tranche. Pr\xe9chauffez le four \xe0 200\xb0. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et r\xe9galez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
    appliance: 'Four',
    ustensils: ['plat \xe0 gratin', 'couteau', 'r\xe2pe \xe0 fromage']
  },
  { id: 17, image: 'Recette17.jpg', name: 'Smoothie \xe0 la fraise', servings: 6, ingredients: [{ ingredient: 'Fraise', quantity: 500, unit: 'grammes' }, { ingredient: 'Past\xe8que', quantity: 0.5 }, { ingredient: 'Jus de citron', quantity: 1, unit: 'cuill\xe8res \xe0 soupe' }, { ingredient: 'Gla\xe7ons', quantity: 8 }, { ingredient: 'Menthe' }], time: 15, description: 'Coupez les fraises en morceaux, d\xe9coupez la chaire de la past\xe8que en retirant les p\xe9pins. Mettre le tout dans le blender. Ajouter un cuill\xe8re \xe0 soupe de juste de citron ainsi que les gla\xe7ons. Ajoutez quelques feuilles de menthe pour plus de fra\xeecheur. Mixez le tout. Servir et d\xe9guster.', appliance: 'Blender', ustensils: ['verres', 'couteau', 'presse citron'] },
  {
    id: 18,
    image: 'Recette18.jpg',
    name: 'Smoothie ananas et vanille',
    servings: 5,
    ingredients: [
      { ingredient: 'Ananas', quantity: 1 },
      { ingredient: 'Glace \xe0 la vanille', quantity: 500, unit: 'ml' },
      { ingredient: 'Lait', quantity: 50, unit: 'cl' }
    ],
    time: 10,
    description: "S\xe9parez 1/5\xe8me d'Ananas ( une belle tranche qui servira pour la d\xe9coration des verres ), mettre le reste coup\xe9 en cubes au blender, ajouter la glace \xe0 la vanille et le lait. Mixez. Servir et d\xe9corer avec l'ananas restant. C'est pr\xeat",
    appliance: 'Blender',
    ustensils: ['verres', 'couteau']
  },
  {
    id: 19,
    image: 'Recette19.jpg',
    name: 'Shake Banane Kiwi',
    servings: 4,
    ingredients: [
      { ingredient: 'Kiwi', quantity: 4 },
      { ingredient: 'Citron', quantity: 1 },
      { ingredient: 'Lait', quantity: 1, unit: 'litres' },
      { ingredient: 'Sucre glace', quantity: 30, unit: 'grammes' },
      { ingredient: 'Banane', quantity: 1 }
    ],
    time: 0,
    description: "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des gla\xe7ons si le lait n'a pas \xe9t\xe9 mis au frais.",
    appliance: 'Blender',
    ustensils: ['couteau', 'verres', 'presse citron']
  },
  {
    id: 20,
    image: 'Recette20.jpg',
    name: 'Pates Carbonara',
    servings: 5,
    ingredients: [
      { ingredient: 'Tagliatelles', quantity: 500, unit: 'grammes' },
      { ingredient: 'Lardons', quantity: 150, unit: 'grammes' },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 200, unit: 'grammes' },
      { ingredient: 'Parmesan', quantity: 100, unit: 'grammes' },
      { ingredient: "huile d'olive", quantity: 1, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 30,
    description: "Faire cuire les pates comme indiqu\xe9 sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la cr\xe8me fra\xeeche et baisser le feu au minimum. Quand les Tagliatelles sont pr\xeates les mettre dans la sauteuse et bien m\xe9langer le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan r\xe2p\xe9.",
    appliance: 'Sauteuse',
    ustensils: ['r\xe2pe \xe0 fromage', 'cuill\xe8re en bois']
  },
  {
    id: 21,
    image: 'Recette21.jpg',
    name: 'Spaghettis \xe0 la bolognaise',
    servings: 4,
    ingredients: [
      { ingredient: 'Spaghettis', quantity: 400, unit: 'grammes' },
      { ingredient: 'Oignon', quantity: 2 },
      { ingredient: 'Coulis de tomate', quantity: 300, unit: 'grammes' },
      { ingredient: 'Viande hach\xe9e 1% de mati\xe8re grasse', quantity: 400, unit: 'grammes' },
      { ingredient: 'Vin rouge', quantity: 20, unit: 'cl' },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 1, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 30,
    description: 'Cuisiner la viande hach\xe9e dans une po\xeale \xe0 frire. Dans une autre faire cuire les oignons d\xe9coup\xe9s en fins d\xe9s avec un peu de beurre. Ajouter du vin rouge. M\xe9langer les oignons avec la viande hach\xe9e. Faire cuire les pates le temps indiqu\xe9 sur le paquet. Ajouter le coulis de tomates \xe0 la viande hach\xe9e. Une fois que les pates sont cuites, ajouter la cr\xe8me fra\xeeche \xe0 la viande hach\xe9e. Servir.',
    appliance: 'Casserole',
    ustensils: ['Cuill\xe8re en bois', 'louche', 'couteau']
  },
  {
    id: 22,
    image: 'Recette22.jpg',
    name: 'Fondant au chocolat',
    servings: 4,
    ingredients: [
      { ingredient: 'Beurre', quantity: 160, unit: 'grammes' },
      { ingredient: 'Chocolat noir', quantity: 200, unit: 'grammes' },
      { ingredient: 'Farine', quantity: 50, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 4 },
      { ingredient: 'Sucre', quantity: 150, unit: 'grammes' }
    ],
    time: 30,
    description: "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'\xe0 obtenir une texture de type mousse. Ajouter la farine ainsi que le m\xe9lange de beurre et chocolat fondu. Beurrez le moule \xe0 gateaux. Mettre au four pr\xe9chauff\xe9 \xe0 200\xb0 puis faites chauffer pendant 15 minutes. C'est pr\xeat. Servir avec une boule de glace ou une cr\xe8me dessert.",
    appliance: 'Four',
    ustensils: ['moule \xe0 gateaux', 'fouet', 'casserole']
  },
  {
    id: 23,
    image: 'Recette23.jpg',
    name: 'Quiche lorraine',
    servings: 4,
    ingredients: [
      { ingredient: 'P\xe2te bris\xe9e', quantity: 200, unit: 'grammes' },
      { ingredient: 'Lardons', quantity: 200, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 30, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 3 },
      { ingredient: 'Cr\xe8me Fra\xeeche', quantity: 20, unit: 'cl' },
      { ingredient: 'Lait', quantity: 20, unit: 'cl' }
    ],
    time: 60,
    description: "\xc9taler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une po\xeale. Battre les oeufs en ajoutant la cr\xe8me fra\xeeche et le lait. Finalement ajouter les lardons, salez poivrez \xe0 votre gout. Verser l'ensemble sur la p\xe2te. Cuire environ 50 minutes.",
    appliance: 'Four',
    ustensils: ['moule \xe0 gateaux', 'rouleau \xe0 patisserie', 'fouet']
  },
  {
    id: 24,
    image: 'Recette24.jpg',
    name: 'Salade de p\xe2tes',
    servings: 4,
    ingredients: [
      { ingredient: 'Thon en miettes', quantity: 160, unit: 'grammes' },
      { ingredient: 'Ma\xefs', quantity: 60, unit: 'grammes' },
      { ingredient: 'Tomate', quantity: 1 },
      { ingredient: 'Concombre', quantity: 0.5 },
      { ingredient: 'Macaronis', quantity: 300, unit: 'grammes' },
      { ingredient: 'Mayonnaise', quantity: 2, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 40,
    description: 'D\xe9couper le concombre et les tomates en d\xe9s, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. M\xe9langer le tout et servir frais.',
    appliance: 'Saladier',
    ustensils: ['couteau', 'cuill\xe8re en bois']
  },
  {
    id: 25,
    image: 'Recette25.jpg',
    name: 'Cookies',
    servings: 4,
    ingredients: [
      { ingredient: 'Sucre', quantity: 100, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 100, unit: 'grammes' },
      { ingredient: 'Farine', quantity: 100, unit: 'grammes' },
      { ingredient: 'Chocolat noir en p\xe9pites', quantity: 100, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 1 }
    ],
    time: 30,
    description: "Faire fondre le beurre et le m\xe9langer avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en m\xe9langeant peu pa peu pour avoir une masse sans grumeaux. Ajouter les p\xe9pites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four \xe0 180\xb0 pour 10 minutes.",
    appliance: 'Four',
    ustensils: ['fouet', 'saladier', 'plaque de cuisson']
  },
  { id: 26, image: 'Recette26.jpg', name: 'Soupe de tomates', servings: 2, ingredients: [{ ingredient: 'Tomate', quantity: 6 }, { ingredient: 'Pommes de terre', quantity: 1 }, { ingredient: "Huile d'olives" }, { ingredient: 'Oignon', quantity: 1 }, { ingredient: 'Ail', quantity: 1, unit: 'gousses' }], time: 25, description: "Verser de l'huile dans une cocotte minute couper les l\xe9gumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.", appliance: 'Mixer', ustensils: ['cocotte minute', 'couteau'] },
  {
    id: 27,
    image: 'Recette27.jpg',
    name: "Soupe \xe0 l'oseille",
    servings: 4,
    ingredients: [
      { ingredient: 'Oseille', quantity: 2 },
      { ingredient: 'Oeuf', quantity: 1 },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 4, unit: 'cuill\xe8re \xe0 soupe' },
      { ingredient: 'Vermicelles', quantity: 1, unit: 'verres' },
      { ingredient: 'Beurre sal\xe9', quantity: 50, unit: 'grammes' }
    ],
    time: 15,
    description: "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois pr\xeat, sortir du feu et apr\xe8s 5 minutes ajouter le jaune d'oeuf et la cr\xe8me fra\xeeche",
    appliance: 'Casserole',
    ustensils: ['couteau', 'cuill\xe8re en bois']
  },
  {
    id: 28,
    image: 'Recette28.jpg',
    name: 'Soupe de poireaux',
    servings: 4,
    ingredients: [
      { ingredient: 'Poireau', quantity: 3 },
      { ingredient: 'Pommes de terre', quantity: 400, unit: 'grammes' },
      { ingredient: 'Oseille', quantity: 75, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 50, unit: 'grammes' },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 10, unit: 'cl' }
    ],
    time: 80,
    description: "\xc9mincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coup\xe9es en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la cr\xe8me. Bon appetit.",
    appliance: 'Mixer',
    ustensils: ['casserole', 'couteau']
  },
  { id: 29, image: 'Recette29.jpg', name: 'Houmous Express', servings: 2, ingredients: [{ ingredient: 'Pois chiches', quantity: 1, unit: 'boites' }, { ingredient: 'Ail', quantity: 1, unit: 'gousses' }, { ingredient: 'Citron', quantity: 2 }, { ingredient: "Huile d'olive" }, { ingredient: 'Paprika' }], time: 30, description: "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.", appliance: 'Mixer', ustensils: ['cuill\xe8re en bois', 'presse citron'] },
  {
    id: 30,
    image: 'Recette30.jpg',
    name: 'Pur\xe9e de pois cass\xe9s',
    servings: 4,
    ingredients: [
      { ingredient: 'Pois Cass\xe9', quantity: 500, unit: 'grammes' },
      { ingredient: 'Oignon', quantity: 1 },
      { ingredient: 'Ail', quantity: 2, unit: 'gousses' }
    ],
    time: 60,
    description: "Mettre tous les ingr\xe9dients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuire \xe0 petit feu pour 1 heure. Passer au mixer. Salez, poivrez. C'est pr\xeat",
    appliance: 'Mixer',
    ustensils: ['casserole', 'cuill\xe8re en bois']
  },
  {
    id: 31,
    image: 'Recette31.jpg',
    name: 'Jardini\xe8re de l\xe9gumes',
    servings: 4,
    ingredients: [
      { ingredient: 'Carotte', quantity: 2 },
      { ingredient: 'Pommes de terre', quantity: 2 },
      { ingredient: 'Haricots verts', quantity: 150, unit: 'grammes' },
      { ingredient: 'Petits poids', quantity: 100, unit: 'grammes' },
      { ingredient: 'Lardons', quantity: 150, unit: 'grammes' }
    ],
    time: 60,
    description: "D\xe9couper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dor\xe9s, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pr\xe9 cuits ). Ajouter Sel, poivre, thyms et laurier",
    appliance: 'Po\xeale',
    ustensils: ['Couteau', '\xe9conome']
  },
  {
    id: 32,
    image: 'Recette32.jpg',
    name: 'Croque Monsieur \xe0 la dinde',
    servings: 4,
    ingredients: [
      { ingredient: 'Pain de mie', quantity: 8, unit: 'tranches' },
      { ingredient: 'Blanc de dinde', quantity: 4, unit: 'tranches' },
      { ingredient: 'Emmental', quantity: 8, unit: 'tranches' },
      { ingredient: 'Gruy\xe8re', quantity: 100, unit: 'grammes' },
      { ingredient: 'Lait', quantity: 5, unit: 'cl' },
      { ingredient: 'Noix de muscade', quantity: 1, unit: 'pinc\xe9es' }
    ],
    time: 20,
    description: "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d’emmental, une de blanc de dinde, et une autre d'emmental. Dans un r\xe9cipient, m\xe9langer le gruy\xe8re rapp\xe9 avec le lait et la noix de muscade. Mettre sur les croque monsieur. Placer au four durant 10 minutes.",
    appliance: 'Four',
    ustensils: ['r\xe2pe \xe0 fromage', 'cuill\xe8re \xe0 Soupe', 'couteau']
  },
  {
    id: 33,
    image: 'Recette33.jpg',
    name: 'Sandwich au saumon fum\xe9',
    servings: 4,
    ingredients: [
      { ingredient: 'Pain de mie', quantity: 8, unit: 'tranches' },
      { ingredient: 'Saumon Fum\xe9', quantity: 4, unit: 'tranches' },
      { ingredient: 'Feuilles de laitue', quantity: 4 },
      { ingredient: 'Fromage blanc', quantity: 4, unit: 'cuill\xe8res \xe0 soupe' },
      { ingredient: 'Jus de citron', quantity: 1, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 5,
    description: "M\xe9langer le fromage blanc avec le citron. Ajouter un peu de sel et poivre \xe0 votre gout. Faire dorer le pain de mie. Puis \xe9taler le m\xe9lange. Ajouter une feuille de salade puis le saumon fum\xe9. C'est pr\xeat.",
    appliance: 'Four',
    ustensils: ['couteau', 'cuill\xe8re en bois']
  },
  { id: 34, image: 'Recette34.jpg', name: 'Pur\xe9e de patate douce', servings: 4, ingredients: [{ ingredient: 'Patate douce', quantity: 800, unit: 'grammes' }, { ingredient: 'Cr\xe8me fra\xeeche', quantity: 20, unit: 'cl' }, { ingredient: "Huile d'olive" }, { ingredient: 'Orange', quantity: 1 }], time: 25, description: "\xc9plucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserole d'eau bouillante. Passer au mixer en ajoutant la cr\xe8me et l'huile d'olive \xe0 son gout. Salez, poivrez. Pressez l'orange et ajouter le jus \xe0 l'ensemble. Servir.", appliance: 'Mixer', ustensils: ['couteau', '\xe9conome', 'cuill\xe8re en bois'] },
  {
    id: 35,
    image: 'Recette35.jpg',
    name: 'Pur\xe9e de carottes',
    servings: 2,
    ingredients: [
      { ingredient: 'Carotte', quantity: 6 },
      { ingredient: 'Pommes de terre', quantity: 1 },
      { ingredient: 'Beurre', quantity: 20, unit: 'grammes' },
      { ingredient: 'Cr\xe8me fra\xeeche', quantity: 2, unit: 'cuill\xe8res \xe0 soupe' },
      { ingredient: 'Cumin', quantity: 1, unit: 'cuill\xe8res \xe0 caf\xe9' },
      { ingredient: 'Noix de muscade', quantity: 1, unit: 'pinc\xe9es' }
    ],
    time: 25,
    description: '\xc9plucher les l\xe9gumes, les couper en morceaux et les mettre \xe0 cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la cr\xe8me. Ajouter le cumin et la noix de muscade.',
    appliance: 'Mixer',
    ustensils: ['cocotte minute', 'couteau', 'cuill\xe8re en bois']
  },
  {
    id: 36,
    image: 'Recette36.jpg',
    name: 'Lasagne Courgettes et Ch\xe8vre',
    servings: 2,
    ingredients: [
      { ingredient: 'Courgette', quantity: 2 },
      { ingredient: 'Fromage de ch\xe8vre', quantity: 4 },
      { ingredient: 'Lait', quantity: 25, unit: 'cl' },
      { ingredient: 'Lasagnes', quantity: 5, unit: 'feuilles' },
      { ingredient: 'Gruy\xe8re', quantity: 40, unit: 'grammes' },
      { ingredient: 'Ma\xefzena', quantity: 1, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 35,
    description: 'Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de ch\xe8vre frais. Pr\xe9parer la b\xe9chamel avec le lait et la ma\xefzena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruy\xe8re. Passer au four \xe0 180\xb0 durant 20 \xe0 25 minutes.',
    appliance: 'Four',
    ustensils: ['plat \xe0 gratin', 'r\xe2pe \xe0 fromage', 'fouet']
  },
  {
    id: 37,
    image: 'Recette37.jpg',
    name: 'Courgettes farcies au boeuf',
    servings: 2,
    ingredients: [
      { ingredient: 'Courgette', quantity: 2 },
      { ingredient: 'Viande hach\xe9e', quantity: 600, unit: 'grammes' },
      { ingredient: "Huile d'olives", quantity: 25, unit: 'cl' },
      { ingredient: 'Oignon', quantity: 1 },
      { ingredient: 'Coulis de tomates', quantity: 20, unit: 'cl' },
      { ingredient: 'Gruy\xe8re', quantity: 50, unit: 'grammes' }
    ],
    time: 60,
    description: "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. R\xe9server.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hach\xe9e. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage r\xe2p\xe9",
    appliance: 'Four',
    ustensils: ['couteau', 'cuill\xe8re en bois', 'Po\xeale \xe0 frire']
  },
  {
    id: 38,
    image: 'Recette38.jpg',
    name: 'Pain Perdu',
    servings: 4,
    ingredients: [
      { ingredient: 'Pain', quantity: 6, unit: 'tranches' },
      { ingredient: 'Lait', quantity: 25, unit: 'cl' },
      { ingredient: 'Oeuf', quantity: 3 },
      { ingredient: 'Sucre roux', quantity: 75, unit: 'grammes' }
    ],
    time: 20,
    description: 'Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes \xe0 180\xb0. Servir',
    appliance: 'Four',
    ustensils: ['fouet', 'bol', 'Cuill\xe8re \xe0 Soupe']
  },
  {
    id: 39,
    image: 'Recette39.jpg',
    name: 'Crumble aux pommes',
    servings: 40,
    ingredients: [
      { ingredient: 'Pomme', quantity: 2 },
      { ingredient: 'Farine', quantity: 100, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 50, unit: 'grammes' },
      { ingredient: 'Sucre roux', quantity: 80, unit: 'grammes' }
    ],
    time: 40,
    description: 'D\xe9couper les pommes en d\xe9. M\xe9langer dans un saladier la farine, le sucre et le beurre. Bien m\xe9langer. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four',
    appliance: 'Four',
    ustensils: ['saladier', 'couteau', 'fouet']
  },
  {
    id: 40,
    image: 'Recette40.jpg',
    name: 'Limonade',
    servings: 4,
    ingredients: [
      { ingredient: 'Eau', quantity: 1, unit: 'Litres' },
      { ingredient: 'Citron Vert', quantity: 3 },
      { ingredient: 'Sucre en poudre', quantity: 4, unit: 'cuill\xe8res \xe0 caf\xe9' },
      { ingredient: 'Bicarbonate', quantity: 1, unit: 'cuill\xe8res \xe0 caf\xe9' }
    ],
    time: 10,
    description: "Dans un saladier mettre l'eau, le jus des citrons et le sucre. Bien m\xe9langer. Ajouter le bicarbonate. Servir. Ajouter des gla\xe7on et une feuille de menthe pour la d\xe9co.",
    appliance: 'Saladier',
    ustensils: ['cuill\xe8re en bois']
  },
  {
    id: 41,
    image: 'Recette41.jpg',
    name: 'Mousse au chocolat',
    servings: 4,
    ingredients: [
      { ingredient: 'Oeuf', quantity: 3 },
      { ingredient: 'Chocolat noir', quantity: 100, unit: 'grammes' },
      { ingredient: 'Sucre vanill\xe9', quantity: 1, unit: 'sachets' }
    ],
    time: 20,
    description: "S\xe9parer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au m\xe9lange de chocolat. M\xe9langez d\xe9licatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
    appliance: 'Casserole',
    ustensils: ['fouet', 'spatule', 'verres']
  },
  {
    id: 42,
    image: 'Recette42.jpg',
    name: 'Charlotte au poires',
    servings: 3,
    ingredients: [
      { ingredient: 'Chocolat', quantity: 200, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 3 },
      { ingredient: 'Poires au jus', quantity: 0.5, unit: 'boites' },
      { ingredient: 'Boudoirs', quantity: 15 }
    ],
    time: 60,
    description: 'Commencez par pr\xe9parer la mousse au chocolat au moins 2 heures avant. Quand la mousse est pr\xeate et a repos\xe9e. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.',
    appliance: 'Moule \xe0 charlotte',
    ustensils: ['saladier', 'couteau', 'fouet']
  },
  { id: 43, image: 'Recette43.jpg', name: 'Tarte au citron', servings: 6, ingredients: [{ ingredient: 'P\xe2te bris\xe9e', quantity: 200, unit: 'grammes' }, { ingredient: 'Sucre', quantity: 150, unit: 'grammes' }, { ingredient: 'Beurre fondu', quantity: 100, unit: 'grammes' }, { ingredient: 'Oeuf', quantity: 3 }, { ingredient: 'Citron' }], time: 50, description: 'Pr\xe9chauffez le fours \xe0 200\xb0. \xc9taler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ', appliance: 'Four', ustensils: ['rouleau \xe0 patisserie', 'moule \xe0 tarte', 'presse citron'] },
  {
    id: 44,
    image: 'Recette44.jpg',
    name: 'Cr\xe8me dessert au chocolat',
    servings: 6,
    ingredients: [
      { ingredient: 'Lait', quantity: 1, unit: 'litres' },
      { ingredient: 'Chocolat', quantity: 200, unit: 'grammes' },
      { ingredient: 'Sucre', quantity: 100, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 50, unit: 'grammes' },
      { ingredient: 'farine', quantity: 40, unit: 'grammes' }
    ],
    time: 15,
    description: 'M\xe9langer la farine et le beurre fondu en ajoutant le lait peu \xe0 peu. Ajouter du sucre apr\xe8s la cuisson. Bien m\xe9langer. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en m\xe9langeant avec une cuill\xe8re en bois. Mettre dans des verres',
    appliance: 'Casserole',
    ustensils: ['cuill\xe8re en bois']
  },
  {
    id: 45,
    image: 'Recette45.jpg',
    name: 'Cr\xe8me p\xe2tissi\xe8re',
    servings: 8,
    ingredients: [
      { ingredient: 'Lait', quantity: 50, unit: 'cl' },
      { ingredient: 'Oeuf', quantity: 2 },
      { ingredient: 'Farine', quantity: 30, unit: 'grammes' },
      { ingredient: 'Sucre', quantity: 80, unit: 'grammes' }
    ],
    time: 30,
    description: "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre \xe0 feu doux pour faire \xe9paissir en remuant pendant 5 \xe0 10 minutes.",
    appliance: 'Casserole',
    ustensils: ['fouet', 'saladier']
  },
  {
    id: 46,
    image: 'Recette46.jpg',
    name: 'Far breton',
    servings: 6,
    ingredients: [
      { ingredient: 'Farine', quantity: 250, unit: 'grammes' },
      { ingredient: 'Sucre', quantity: 150, unit: 'grammes' },
      { ingredient: 'Sucre vanill\xe9', quantity: 1, unit: 'sachets' },
      { ingredient: 'Oeuf', quantity: 4 },
      { ingredient: 'Lait', quantity: 1, unit: 'litre' },
      { ingredient: 'Pruneaux', quantity: 100, unit: 'grammes' }
    ],
    time: 60,
    description: 'M\xe9langer la farine avec le sucre et les oeufs en ajoutant du sucre vanill\xe9. Ajouter le lait petit \xe0 petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurr\xe9 y placer les pruneaux et faire cuire \xe0 200\xb0 pendant 45 minutes',
    appliance: 'Four',
    ustensils: ['fouet', 'moule', 'verres']
  },
  {
    id: 47,
    image: 'Recette47.jpg',
    name: 'Mousse au citron',
    servings: 6,
    ingredients: [
      { ingredient: 'Jus de citron', quantity: 100, unit: 'grammes' },
      { ingredient: 'Mascarpone', quantity: 250, unit: 'grammes' },
      { ingredient: 'Sucre', quantity: 100, unit: 'grammes' },
      { ingredient: 'Cr\xe8me Fra\xeeche', quantity: 20, unit: 'cl' }
    ],
    time: 5,
    description: 'M\xe9langer le jus de citron avec le sucre et la mascarpone. Ajouter la cr\xe8me fra\xeeche. M\xe9langer le tout et mettre au cong\xe9lateur pendant 1 heure. Servir',
    appliance: 'Saladier',
    ustensils: ['fouet', 'verres', 'cuill\xe8re en bois']
  },
  {
    id: 48,
    image: 'Recette48.jpg',
    name: 'Pizza',
    servings: 4,
    ingredients: [
      { ingredient: 'P\xe2te \xe0 pizza', quantity: 1 },
      { ingredient: 'Tomates pel\xe9es', quantity: 1, unit: 'boites' },
      { ingredient: 'Lardons', quantity: 1, unit: 'barquettes' },
      { ingredient: 'Champignons de paris', quantity: 1, unit: 'boites' },
      { ingredient: 'Gruy\xe8re', quantity: 200, unit: 'grammes' }
    ],
    time: 40,
    description: '\xc9taler la pate a pizza. \xc9craser les tomates pel\xe9es, les \xe9taler sur la p\xe2te, ajouter les lardons et les champignons. Ajouter le gruy\xe8re eet passer au four \xe0 220\xb0 durant 20 minutes',
    appliance: 'Four',
    ustensils: ['rouleau \xe0 patisserie', 'r\xe2pe \xe0 fromage', 'couteau']
  },
  {
    id: 49,
    image: 'Recette49.jpg',
    name: 'Smoothie tropical',
    servings: 4,
    ingredients: [
      { ingredient: 'Bananes', quantity: 2 },
      { ingredient: 'Kiwis', quantity: 3 },
      { ingredient: 'Mangue', quantity: 1 },
      { ingredient: 'Ananas', quantity: 4, unit: 'tranches' },
      { ingredient: 'Miel', quantity: 2, unit: 'cuill\xe8res \xe0 soupe' }
    ],
    time: 0,
    description: "D\xe9couper les fruits. Le passer au blender jusqu'\xe0 obtenir une texture liquide. Mettre au frais. Servir",
    appliance: 'Blender',
    ustensils: ['couteau', 'verres']
  },
  {
    id: 50,
    image: 'Recette50.jpg',
    name: 'Frangipane',
    servings: 2,
    ingredients: [
      { ingredient: 'P\xe2te feuillet\xe9e', quantity: 400, unit: 'grammes' },
      { ingredient: 'Oeuf', quantity: 6 },
      { ingredient: "Poudre d'amendes", quantity: 500, unit: 'grammes' },
      { ingredient: 'Beurre', quantity: 500, unit: 'grammes' },
      { ingredient: 'Sucre glace', quantity: 500, unit: 'grammes' }
    ],
    time: 60,
    description: "Pr\xe9parer la frangipane : M\xe9langer le sucre la poudre d'amandes, le beurre et les oeufs. \xc9taler la moiti\xe9 de la pate feuillet\xe9 et mettre dans un moule \xe0 tarte. Garnir de frangipane et recouvrir du reste de pate feuillet\xe9e. Mettre au four 30 minutes",
    appliance: 'Four',
    ustensils: ['rouleau \xe0 patisserie', 'fouet']
  }
];
export default recipes;
