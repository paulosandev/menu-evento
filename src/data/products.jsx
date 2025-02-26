export const productsData = [
    {
        category: "Comida",
        items: [
            {
                id: "ensalada_pollo",
                name: "Ensalada de pollo",
                price: 80,
                image: "/images/ensalada_pollo.jpg",
                description: "Deliciosa ensalada de pollo...",
                options: [],
            },
            {
                id: "sandwich_jamon_queso",
                name: "Sandwich de jamón y queso",
                price: 65,
                image: "/images/sandwich_jamon_queso.jpg",
                description: "Clásico sandwich de jamón y queso...",
                options: [
                    {
                        groupName: "Extras",
                        type: "checkbox",
                        choices: [
                            { name: "Mayonesa", value: "mayonesa", price: 5 },
                            { name: "Pepino", value: "pepino", price: 3 },
                        ],
                    },
                ],
            },
            {
                id: "fruta_yogurt_granola",
                name: "Fruta, yogurt griego y granola",
                price: 75,
                image: "/images/fruta_yogurt_granola.jpg",
                description: "Saludable desayuno o snack...",
                options: [
                    {
                        groupName: "Frutas Adicionales",
                        type: "checkbox",
                        choices: [
                            { name: "Plátano", value: "platano", price: 2 },
                            { name: "Fresa", value: "fresa", price: 4 },
                        ],
                    },
                ],
            },
        ],
    },
    // ... (resto de las categorías: Postres, Café de especialidad, Otras bebidas) ..
    {
        category: "Postres",
        items: [
            {
                id: "rebanada_pastel",
                name: "Rebanada de pastel",
                price: 50,
                image: "/images/rebanada_pastel.jpg",
                description: "Rica rebanada de pastel...",
                options: [
                    {
                        groupName: "Sabor",
                        type: "radio",
                        choices: [
                            { name: "Chocolate con pistache", value: "chocolate_pistache", price: 55 },
                            { name: "Zanahoria", value: "zanahoria", price: 50 },
                            { name: "Dulce de leche con guayaba", value: "dulce_leche_guayaba", price: 52 },
                        ],
                    },
                ],
            },
            {
                id: "cheesecake",
                name: "Cheesecake",
                price: 60,
                image: "/images/cheesecake.jpg",
                description: "Delicioso cheesecake...",
                options: [
                    {
                        groupName: "Sabor",
                        type: "radio",
                        choices: [
                            { name: "Galleta lotus", value: "galleta_lotus", price: 65 },
                            { name: "Manzana", value: "manzana", price: 60 },
                        ],
                    },
                ],
            },
            {
                id: "galletas",
                name: "Galletas",
                price: 25,
                image: "/images/galletas.jpg",
                description: "Variedad de galletas...",
                options: [
                    {
                        groupName: "Tipo",
                        type: "checkbox",
                        choices: [
                            { name: "Chiapas de chocolate", value: "chiapas_chocolate", price: 25 },
                            { name: "Coco, avena, chocolate y arándano", value: "coco_avena_chocolate_arandano", price: 28 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        category: "Café de especialidad",
        items: [
            {
                id: "latte",
                name: "Latte",
                price: 45,
                image: "/images/latte.jpg",
                description: "Clásico latte...",
                options: [
                    {
                        groupName: "Temperatura",
                        type: "radio",
                        choices: [
                            { name: "Frío", value: "frio", price: 45 },
                            { name: "Caliente", value: "caliente", price: 45 },
                        ],
                    },
                    {
                        groupName: "Sabor",
                        type: "checkbox",
                        choices: [
                            { name: "Avellana", value: "avellana", price: 5 },
                            { name: "Cajeta", value: "cajeta", price: 5 },
                            { name: "Caramelo", value: "caramelo", price: 5 },
                            { name: "Vainilla", value: "vainilla", price: 5 },
                        ],
                    },
                    {
                        groupName: "Leche",
                        type: "radio",
                        choices: [
                            { name: "Leche entera", value: "entera", price: 45 },
                            { name: "Leche deslactosada", value: "deslactosada", price: 48 },
                            { name: "Leche de almendra", value: "almendra", price: 50 },
                        ],
                    },
                ],
            },
            {
                id: "americano",
                name: "Americano",
                price: 35,
                image: "/images/americano.jpg",
                description: "Café americano...",
                options: [],
            },
            {
                id: "chai",
                name: "Chai",
                price: 50,
                image: "/images/chai.jpg",
                description: "Chai...",
                options: [
                    {
                        groupName: "Temperatura",
                        type: "radio",
                        choices: [
                            { name: "Frío", value: "frio", price: 50 },
                            { name: "Caliente", value: "caliente", price: 50 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        category: "Otras bebidas",
        items: [
            {
                id: "coca",
                name: "Coca",
                price: 20,
                image: "/images/coca.jpg",
                description: "Coca cola...",
                options: [],
            },
            {
                id: "agua",
                name: "Botella de agua",
                price: 15,
                image: "/images/agua.jpg",
                description: "Botella de agua...",
                options: [],
            },
            {
                id: "limonada",
                name: "Limonada natural",
                price: 30,
                image: "/images/limonada.jpg",
                description: "Limonada natural...",
                options: [],
            },
        ],
    },
];