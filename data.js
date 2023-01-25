import { v4 as uuidv4 } from 'https://jspm.dev/uuid';


export const menuArray = [
    {
        name: "PACIFIC RIM",
        description: "Take the trip less travelled. Starts with an herb aioli base layered with chicken, Italian sausage, garlic roasted red peppers, green bell peppers, mozzarella, Wisconsin aged white cheddar, and finished with an herb aioli drizzle.",
        price: 25.99,
        photo: 'images/pacific-rim.png',
        uuid: uuidv4(),
    },
    {
        name: "MAUI WOWIE",
        description: "The name rhymes. The taste delivers. Enjoy a pesto base with mozzarella, ham, pineapple, jerk chicken, banana peppers, and Applewood smoked bacon.",
        price: 28.99,
        photo: 'images/maui-wowie.png',
        uuid: uuidv4(),
    },
    {
        name: "HOLY SHIITAKE",
        description: "An olive oil and garlic base with roasted shiitake, button and portobello mushrooms, caramelized onions, mozzarella and Wisconsin Aged White Cheddar cheese. Finished with fresh chives, shaved Parmesan, a garlic aioli swirl and a spritz of black truffle oil.",
        price: 23.99,
        photo: 'images/holy-shiitake.png',
        uuid: uuidv4(),
    },
    {
        name: "KOSMIC KARMA",
        description: "Filled with goodness, this pie starts with Mellow red sauce covered with spinach, roasted tomatoes, mozzarella, fresh Roma tomatoes and authentic sheeps milk feta cheese. A hypnotic pesto swirl adds the finishing touch.",
        price: 21.99,
        photo: 'images/kosmic-karma.png',
        uuid: uuidv4(),
    },
    {
        name: "VEG OUT",
        description: "Mellow takes veggies to the max. This pie starts with Mellow red sauce layered with mozzarella, spinach, green peppers, sliced mushrooms, sweet onions, black olives and Roma tomatoes.",
        price: 18.99,
        photo: 'images/veg-out.png',
        uuid: uuidv4(),
    },
    {
        name: "GREAT WHITE",
        description: "An olive oil and garlic base layered with mozzarella, provolone, seasoned ricotta, roasted tomatoes, authentic sheeps milk feta cheese, fresh Roma tomatoes and sweet onions. Finished with chopped fresh basil.",
        price: 20.99,
        photo: 'images/great-white.png',
        uuid: uuidv4(),
    },
]

export const cartItemsArray = []