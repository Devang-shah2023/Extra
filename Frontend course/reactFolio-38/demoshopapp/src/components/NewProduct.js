import './NewProduct.css'
import ProductForm from './ProductForm';
function NewProduct(){
   function saveProduct(){
      console.log("I am inside a new product");
      console.log(product)

      //calling parent function
      props.pranay(product)
   }
     return(<div className='new-product'>
        <ProductForm onSaveProduct={saveProduct}/>
     </div>)
}

export default NewProduct;