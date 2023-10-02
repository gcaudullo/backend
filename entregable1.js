class ProductManager {
    //#priceBase = 0.15;
    constructor() {
        this.products = [];
    }

    // Cada producto que gestione debe contar con las propiedades:
    //     title (nombre del producto)
    //     description (descripción del producto)
    //     price (precio)
    //     thumbnail (ruta de imagen)
    //     code (código identificador)
    //     stock (número de piezas disponibles)


    // Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    // Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    // Al agregarlo, debe crearse con un id autoincrementable
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title, !description, !price, !thumbnail, !code, !stock) {
            console.error('The title, description, price, thumbnail, code and stock fields are required')
            return;
        }

        let product = this.products.find(product => product.code === code);
        if (product) {
            console.log('There is already a product with that code');
            return;
        } else {
            const newProduct = {
                id: this.products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            }
            this.products.push(newProduct)
            console.log('The product was added')
        }


    }

    // Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
    getProducts() {
        return this.products;
    }

    // Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    // En caso de no coincidir ningún id, mostrar en consola un error “Not found”

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if(!product){
            return 'Product Not found!';
        }else {
            return product
        }
    }

}
//Creo una instancia de la clase “ProductManager”
const productManager = new ProductManager();

//Llamo “getProducts” recién creada la instancia
console.log('Get Products:', productManager.getProducts());

//Agrego primer producto
//Pruebo agregar un producto sin un parametro obligatorio.
productManager.addProduct('Apple Ipad 10 9 10th', 959, './img/cel-tecno/apple-ipad-10-9-10th-gen-wifi', 5698, 20);
//Agrego producto con todos los parametros.
productManager.addProduct('Apple Ipad 10 9 10th', 'Tablet de ultima generación', 959, './img/cel-tecno/apple-ipad-10-9-10th-gen-wifi', 5698, 20);
//Me fijo si lo agrego al array de productos
console.log('Get Products:', productManager.getProducts());

//Pruebo agregar un producto con un codigo ya existente.
productManager.addProduct('Cel Samsung Galaxy A04', 'Uno de los celulares mas venididos del 2022', 179, './img/cel-tecno/cel-samsung-galaxy-a04', 5698, 20);
// Agrego segundo producto
productManager.addProduct('Cel Samsung Galaxy A04', 'Uno de los celulares mas venididos del 2022', 179, './img/cel-tecno/cel-samsung-galaxy-a04', 5699, 20);
//Me fijo si lo agrego al array de productos
console.log('Get Products:', productManager.getProducts());

// Agrego dos productos más.
productManager.addProduct('Cel Xiaomi Redmi 10a', 'Uno de los celulares mas venididos del 2021', 153, './img/cel-tecno/xiaomi-redmi-10a', 5700, 20);
productManager.addProduct('ASUS Vivobook m513ia bq322t', 'Computador portatil de gran performace', 800, './img/notebooks/asus-vivobook-m513ia', 5701, 10);

//Me fijo si lo agrego al array de productos
console.log('Get Products:', productManager.getProducts());

// Pruebo traer un producto de id inexistente
console.log('Get Products by Id:', productManager.getProductById(5));
// Pruebo traer un producto de id existente
console.log('Get Products by Id:', productManager.getProductById(3));

