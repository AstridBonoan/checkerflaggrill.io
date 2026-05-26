export type MenuItem = {
  name: string
  description: string
  price: string
}

export type MenuCategory = {
  id: string
  title: string
  description: string
  icon: string
  image: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Breakfast Favorites',
    description: 'Eggs, platters, and morning classics',
    icon: '🍳',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      {
        name: 'Bacon Egg & Cheese',
        description: 'Roll, bagel, or croissant',
        price: '$11.38',
      },
      {
        name: 'Egg Platter',
        description: 'Any style, rosemary potatoes & toast',
        price: '$12.89',
      },
      {
        name: 'Breakfast Burrito',
        description: 'Home fries, peppers, bacon, salsa verde, three cheese',
        price: '$13.93',
      },
      {
        name: 'Huevos Rancheros',
        description: 'Two eggs, salsa, beans, tortillas',
        price: '$14.50',
      },
      {
        name: 'French Toast',
        description: 'Thick-cut, maple syrup, butter',
        price: '$10.99',
      },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers & Sandwiches',
    description: 'Grilled favorites and hearty sandwiches',
    icon: '🍔',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      {
        name: 'Checker Flag Burger',
        description: 'Half-pound beef, lettuce, tomato, special sauce',
        price: '$14.99',
      },
      {
        name: 'Philly Cheesesteak',
        description: 'Thinly sliced steak, onions, melted cheese on hoagie',
        price: '$16.01',
      },
      {
        name: 'Buttermilk Chicken Sandwich',
        description: 'Crispy chicken, pickles, brioche bun',
        price: '$13.99',
      },
      {
        name: 'Club Sandwich',
        description: 'Turkey, bacon, lettuce, tomato, mayo',
        price: '$12.99',
      },
      {
        name: 'Grilled Cheese',
        description: 'American cheese on toasted bread',
        price: '$8.99',
      },
    ],
  },
  {
    id: 'mexican',
    title: 'Mexican Favorites',
    description: 'Burritos, tacos, and south-of-the-border plates',
    icon: '🌮',
    image:
      'https://images.unsplash.com/photo-1551504734-5ee1d4fb0f8f?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      {
        name: 'Breakfast Burrito',
        description: 'Eggs, cheese, peppers, home fries',
        price: '$13.93',
      },
      {
        name: 'Chicken Burrito',
        description: 'Grilled chicken, rice, beans, salsa',
        price: '$14.99',
      },
      {
        name: 'Beef Tacos (3)',
        description: 'Seasoned beef, onion, cilantro, lime',
        price: '$12.99',
      },
      {
        name: 'Quesadilla',
        description: 'Cheese, peppers, sour cream & salsa',
        price: '$11.99',
      },
      {
        name: 'Huevos Rancheros',
        description: 'Ranchero sauce, beans, tortillas',
        price: '$14.50',
      },
    ],
  },
  {
    id: 'omelettes',
    title: 'Omelettes',
    description: 'Fluffy eggs with your choice of fillings',
    icon: '🥚',
    image:
      'https://images.unsplash.com/photo-1613769049999-d1a95d0be3ea?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      {
        name: 'Western Omelette',
        description: 'Ham, peppers, onions, cheese',
        price: '$13.99',
      },
      {
        name: 'Omelette with Meat & Cheese',
        description: 'Bacon, sausage, or ham',
        price: '$14.49',
      },
      {
        name: 'Veggie Omelette',
        description: 'Spinach, tomato, mushroom, cheese',
        price: '$12.99',
      },
      {
        name: 'Greek Omelette',
        description: 'Feta, tomato, onion, olives',
        price: '$13.49',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    description: 'Fresh greens and hearty bowls',
    icon: '🥗',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a63e2c?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      {
        name: 'Cobb Salad',
        description: 'Corn, bacon, egg, avocado, blue cheese',
        price: '$14.97',
      },
      {
        name: 'Quinoa Salad',
        description: 'Carrot dressing, avocado, mixed greens',
        price: '$17.05',
      },
      {
        name: 'Steak Salad',
        description: 'Mixed greens, tomatoes, balsamic onions',
        price: '$21.21',
      },
      {
        name: 'Caesar Salad',
        description: 'Romaine, parmesan, croutons, Caesar dressing',
        price: '$11.99',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    description: 'Sweet finishes to your meal',
    icon: '🍰',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      {
        name: 'Chocolate Cake',
        description: 'Rich layer cake, whipped cream',
        price: '$6.99',
      },
      {
        name: 'Cheesecake Slice',
        description: 'NY-style, berry topping optional',
        price: '$7.49',
      },
      {
        name: 'Ice Cream Sundae',
        description: 'Vanilla, chocolate sauce, whipped cream',
        price: '$5.99',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    description: 'Coffee, sodas, and refreshments',
    icon: '☕',
    image:
      'https://images.unsplash.com/photo-1514431164697-729b57a751a0?auto=format&fit=crop&w=600&h=400&q=80',
    items: [
      { name: 'Coffee', description: 'Regular or decaf', price: '$2.99' },
      { name: 'Fresh Orange Juice', description: '16 oz', price: '$4.99' },
      { name: 'Soft Drink', description: 'Coke, Sprite, or Fanta', price: '$2.49' },
      { name: 'Milkshake', description: 'Vanilla, chocolate, or strawberry', price: '$5.99' },
    ],
  },
]

export const featuredItems = [
  {
    name: 'Checker Flag Burger',
    description: 'Our signature half-pound grill burger',
    price: '$14.99',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    name: 'Chicken & Waffles',
    description: 'Crispy chicken with Belgian waffle',
    price: '$15.99',
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    name: 'Breakfast Burrito',
    description: 'Loaded with eggs, cheese, and home fries',
    price: '$13.93',
    image:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d2f?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    name: 'Bacon Egg & Cheese',
    description: 'NYC classic on your choice of bread',
    price: '$11.38',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    name: 'Philly Cheesesteak',
    description: 'Steak, onions, melted cheese on hoagie',
    price: '$16.01',
    image:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&h=400&q=80',
  },
]

export const RESTAURANT = {
  name: 'NYC Checker Flag Grill',
  phone: '(718) 709-0507',
  phoneHref: 'tel:+17187090507',
  email: 'oscarz1125@yahoo.com',
  address: '70-11 Grand Ave',
  city: 'Maspeth, NY 11378',
  fullAddress: '70-11 Grand Ave, Maspeth, NY 11378',
  uberEatsUrl:
    'https://www.ubereats.com/store/nyc-checker-flag-grill-70-11-grand-avenue/Jk8IQFIoULaSIiLY_j6TTw',
  doorDashUrl:
    'https://www.doordash.com/store/nyc-checker-flag-grill-maspeth-43299335/107464146/',
  /** @deprecated Use uberEatsUrl or doorDashUrl */
  orderUrl:
    'https://www.ubereats.com/store/nyc-checker-flag-grill-70-11-grand-avenue/Jk8IQFIoULaSIiLY_j6TTw',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0!2d-73.899!3d40.726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNzDCsDQzJzMzLjYiTiA3M8KwNTMnNTYuNCJX!5e0!3m2!1sen!2sus!4v1',
  mapsLink: 'https://maps.google.com/?q=70-11+Grand+Ave+Maspeth+NY+11378',
  hours: {
    weekday: 'Mon–Fri: 8:30 AM – 8:30 PM',
    weekend: 'Sat–Sun: 8:30 AM – 8:30 PM',
    note: 'Hours may vary on holidays',
  },
  socials: [
    {
      name: 'Instagram' as const,
      url: 'https://www.instagram.com/nyc_checkerflag/',
      handle: '@nyc_checkerflag',
    },
    {
      name: 'Facebook' as const,
      url: 'https://www.facebook.com/profile.php?id=61583555093349',
      handle: 'NYC Checker Flag Grill',
    },
    {
      name: 'TikTok' as const,
      url: 'https://www.tiktok.com/@nycheckerflagrill',
      handle: '@nycheckerflagrill',
    },
  ],
}
