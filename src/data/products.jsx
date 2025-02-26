export const productsData = [
        {
            category: "Postres",
            items: [
                {
                    id: "rebanada_pastel",
                    name: "Rebanada de pastel",
                    price: 75,
                    image: "/images/rebanada_pastel.jpg",
                    description: "Rica rebanada de pastel...",
                    options: [
                        {
                            groupName: "Sabor",
                            type: "radio",
                            choices: [
                                { name: "Chocolate con pistache", value: "chocolate_pistache", price: 75, image: "/images/pastel_chocolate_pistache.jpg" },
                                { name: "Zanahoria", value: "zanahoria", price: 75, image: "/images/pastel_zanahoria.jpg" },
                                { name: "Dulce de leche con guayaba", value: "dulce_leche_guayaba", price: 75, image: "/images/pastel_dulce_leche_guayaba.jpg" },
                            ],
                        },
                    ],
                },
                {
                    id: "muffin",
                    name: "Muffin",
                    price: 35,
                    image: "/images/muffin.jpg",
                    description: "Esponjoso muffin...",
                    options: [
                        {
                            groupName: "Sabor",
                            type: "radio",
                            choices: [
                                { name: "Plátano con nutella", value: "platano_nutella", price: 35 },
                                { name: "Zanahoria", value: "zanahoria", price: 35 },
                            ],
                        },
                    ],
                },
                {
                    id: "cheesecake",
                    name: "Cheesecake",
                    price: 80,
                    image: "/images/cheesecake.jpg",
                    description: "Delicioso cheesecake...",
                    options: [
                        {
                            groupName: "Sabor",
                            type: "radio",
                            choices: [
                                { name: "Galleta lotus", value: "galleta_lotus", price: 80, image: "/images/cheesecake_lotus.jpg" },
                                { name: "Manzana", value: "manzana", price: 80, image: "/images/cheesecake_manzana.jpg" },
                            ],
                        },
                    ],
                },
                {
                    id: "galletas_set",
                    name: "Galletas (set 4 mini galletas)",
                    price: 40,
                    image: "/images/galletas_set.jpg",
                    description: "Set de 4 mini galletas...",
                    options: [
                        {
                            groupName: "Sabores",
                            type: "checkbox",
                            choices: [
                                { name: "Chispas de chocolate", value: "chispas_chocolate", price: 40 },
                                { name: "Coco, avena, chocolate y arándano", value: "coco_avena_chocolate_arandano", price: 40 },
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
                    id: "americano",
                    name: "Americano",
                    price: 40,
                    image: "/images/americano.jpg",
                    description: "Espresso doble de café con agua...",
                    options: [
                        {
                            groupName: "Temperatura",
                            type: "radio",
                            choices: [
                                { name: "Frío", value: "frio", price: 40 },
                                { name: "Caliente", value: "caliente", price: 40 },
                            ],
                        },
                    ],
                },
                {
                    id: "latte",
                    name: "Latte",
                    price: 60,
                    image: "/images/latte.jpg",
                    description: "Espresso doble de café con leche...",
                    options: [
                        {
                            groupName: "Temperatura",
                            type: "radio",
                            choices: [
                                { name: "Frío", value: "frio", price: 60 },
                                { name: "Caliente", value: "caliente", price: 60 },
                            ],
                        },
                        {
                            groupName: "Saborizante (opcional +$5)",
                            type: "radio",
                            choices: [
                                { name: "Avellana", value: "avellana", price: 5 },
                                { name: "Cajeta", value: "cajeta", price: 5 },
                                { name: "Caramelo", value: "caramelo", price: 5 },
                                { name: "Vainilla", value: "vainilla", price: 5 },
                                { name: "Ninguno", value: "ninguno", price: 0 },
                            ],
                        },
                        {
                            groupName: "Leche",
                            type: "radio",
                            choices: [
                                { name: "Leche entera", value: "entera", price: 0 },
                                { name: "Leche deslactosada", value: "deslactosada", price: 0 },
                            ],
                        },
                    ],
                },
                {
                    id: "chai",
                    name: "Chai",
                    price: 60,
                    image: "/images/chai.jpg",
                    description: "Bebida Chai...",
                    options: [
                        {
                            groupName: "Temperatura",
                            type: "radio",
                            choices: [
                                { name: "Frío", value: "frio", price: 60 },
                                { name: "Caliente", value: "caliente", price: 60 },
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
                    id: "coca_cola",
                    name: "Coca Cola",
                    price: 30,
                    image: "/images/coca_cola.jpg",
                    description: "Coca Cola regular...",
                },
                {
                    id: "coca_cola_light",
                    name: "Coca Cola Light",
                    price: 30,
                    image: "/images/coca_cola_light.jpg",
                    description: "Coca Cola Light...",
                },
                {
                    id: "agua_botella",
                    name: "Botella de agua",
                    price: 15,
                    image: "/images/agua_botella.jpg",
                    description: "Botella de agua purificada...",
                },
                {
                    id: "limonada_natural",
                    name: "Limonada natural",
                    price: 45,
                    image: "/images/limonada_natural.jpg",
                    description: "Limonada natural refrescante...",
                },
            ],
        },
        {
            category: "Comida",
            items: [
                {
                    id: "ensalada_pollo",
                    name: "Ensalada de pollo",
                    price: 65,
                    image: "/images/ensalada_pollo.jpg", // Placeholder image
                    description: "Fresca ensalada de pollo..."
                },
                {
                    id: "sandwich_jamon_queso",
                    name: "Sandwich de jamón y queso",
                    price: 40,
                    image: "/images/sandwich_jamon_queso.jpg", // Placeholder image
                    description: "Clásico sandwich de jamón y queso con mayonesa..."
                },
                {
                    id: "fruta_yogurt_granola",
                    name: "Fruta, yogurt griego y granola",
                    price: 65,
                    image: "/images/fruta_yogurt_granola.jpg", // Placeholder image
                    description: "Saludable combinación de fruta, yogurt griego y granola (plátano y fresa)..."
                },
                {
                    id: "flautas_pollo",
                    name: "3 flautas de pollo",
                    price: 60,
                    image: "/images/flautas_pollo.jpg", // Placeholder image
                    description: "Deliciosas 3 flautas de pollo con queso y salsa de tomate..."
                }
            ]
        }
    ];