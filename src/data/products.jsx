export const productsData = [
    {
        category: "Postres",
        items: [
            {
                id: "rebanada_pastel",
                name: "Rebanada de pastel",
                price: 75, // Precio actualizado
                image: "/images/rebanada_pastel.jpg",
                description: "Rica rebanada de pastel...",
                options: [
                    {
                        groupName: "Sabor",
                        type: "radio",
                        choices: [
                            { name: "Chocolate con pistache", value: "chocolate_pistache", price: 75, image: "/images/pastel_chocolate_pistache.jpg" }, // Precio actualizado y image
                            { name: "Zanahoria", value: "zanahoria", price: 75, image: "/images/pastel_zanahoria.jpg" }, // Precio actualizado y image
                            { name: "Dulce de leche con guayaba", value: "dulce_leche_guayaba", price: 75, image: "/images/pastel_dulce_leche_guayaba.jpg" }, // Precio actualizado y image
                        ],
                    },
                ],
            },
            {
                id: "muffin",
                name: "Muffin",
                price: 35, // Precio actualizado
                image: "/images/muffin.jpg", // Placeholder image - Replace with actual image if available
                description: "Esponjoso muffin...",
                options: [
                    {
                        groupName: "Sabor",
                        type: "radio",
                        choices: [
                            { name: "Plátano con nutella", value: "platano_nutella", price: 35 }, // Precio actualizado
                            { name: "Zanahoria", value: "zanahoria", price: 35 }, // Precio actualizado
                        ],
                    },
                ],
            },
            {
                id: "cheesecake",
                name: "Cheesecake",
                price: 80, // Precio actualizado
                image: "/images/cheesecake.jpg",
                description: "Delicioso cheesecake...",
                options: [
                    {
                        groupName: "Sabor",
                        type: "radio",
                        choices: [
                            { name: "Galleta lotus", value: "galleta_lotus", price: 80, image: "/images/cheesecake_lotus.jpg" }, // Precio actualizado y image
                            { name: "Manzana", value: "manzana", price: 80, image: "/images/cheesecake_manzana.jpg" }, // Precio actualizado y image
                        ],
                    },
                ],
            },
            {
                id: "galletas_set",
                name: "Galletas (set 4 mini galletas)",
                price: 40, // Precio actualizado
                image: "/images/galletas_set.jpg", // Placeholder image - Replace with actual image if available
                description: "Set de 4 mini galletas...",
                options: [
                    {
                        groupName: "Sabores",
                        type: "checkbox", // Changed to checkbox since it's a set
                        choices: [
                            { name: "Chispas de chocolate", value: "chispas_chocolate", price: 40 }, // Precio actualizado
                            { name: "Coco, avena, chocolate y arándano", value: "coco_avena_chocolate_arandano", price: 40 }, // Precio actualizado
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
                price: 40, // Precio actualizado
                image: "/images/americano.jpg", // Placeholder image - Replace with actual image if available
                description: "Espresso doble de café con agua...",
                options: [
                    {
                        groupName: "Temperatura",
                        type: "radio",
                        choices: [
                            { name: "Frío", value: "frio", price: 40 }, // Precio actualizado
                            { name: "Caliente", value: "caliente", price: 40 }, // Precio actualizado
                        ],
                    },
                ],
            },
            {
                id: "latte",
                name: "Latte",
                price: 60, // Precio actualizado
                image: "/images/latte.jpg", // Placeholder image - Replace with actual image if available
                description: "Espresso doble de café con leche...",
                options: [
                    {
                        groupName: "Temperatura",
                        type: "radio",
                        choices: [
                            { name: "Frío", value: "frio", price: 60 }, // Precio actualizado
                            { name: "Caliente", value: "caliente", price: 60 }, // Precio actualizado
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
                            { name: "Ninguno", value: "ninguno", price: 0 }, // Added "Ninguno" as an option
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
                price: 60, // Precio actualizado
                image: "/images/chai.jpg", // Placeholder image - Replace with actual image if available
                description: "Bebida Chai...",
                options: [
                    {
                        groupName: "Temperatura",
                        type: "radio",
                        choices: [
                            { name: "Frío", value: "frio", price: 60 }, // Precio actualizado
                            { name: "Caliente", value: "caliente", price: 60 }, // Precio actualizado
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
                price: 30, // Precio actualizado
                image: "/images/coca_cola.jpg", // Placeholder image - Replace with actual image if available
                description: "Coca Cola regular...",
            },
            {
                id: "coca_cola_light",
                name: "Coca Cola Light",
                price: 30, // Precio actualizado
                image: "/images/coca_cola_light.jpg", // Placeholder image - Replace with actual image if available
                description: "Coca Cola Light...",
            },
            {
                id: "agua_botella",
                name: "Botella de agua",
                price: 15, // Precio actualizado
                image: "/images/agua_botella.jpg", // Placeholder image - Replace with actual image if available
                description: "Botella de agua purificada...",
            },
            {
                id: "limonada_natural",
                name: "Limonada natural",
                price: 45, // Precio actualizado
                image: "/images/limonada_natural.jpg", // Placeholder image - Replace with actual image if available
                description: "Limonada natural refrescante...",
            },
        ],
    },
];