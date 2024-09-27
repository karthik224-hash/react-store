import productData from "../../data/products.json";

import "./Products.css";

//import Image from "../../assests/black_shoes.png"

function Product({ id, name, image }) {
	return (
		<div key={id} className="product">
			<img
				src={require(`../../assests/${image}`)}
				alt={name} />
			<div className="product-name">{name}</div>
			<button className="yellow-button">Add to Cart</button>
		</div>
	);
}

// map of productsData
function Products() {
	return (
		<div className="products-container">
			{productData.map((product) => (
				<Product
					key={product.id}
					id={product.id}
					name={product.name}
					image={product.image}
				/>
			))}
		</div>
	);
}

export default Products;