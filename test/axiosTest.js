const axios = require('axios') 

const URL = 'http://localhost:8080/api/productos'

const nuevoProducto = {
    nombre: 'Calculadora AXIOS',
    descripcion: 'Calculadora marca AXIOS',
    codigo: '666',
    foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png',
    precio: 666,
    stock: 6,
}

async function todosProductos() {
    try {
      const getRes = await axios.get(URL);
      const response = {
        URL,
        Method: 'GET',
        Status: getRes.status,
        Data: getRes.data
      };
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function postProductos(product) {
    if (!product) {
      const errorMessage = "Debe ingresar un producto";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  
    try {
      const postRes = await axios.post(URL, product);
      const response = {
        URL,
        Method: 'POST',
        Status: postRes.status,
        Data: postRes.data
      };
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function borrarProducto(id) {
    if (!id) return console.log("Debe ingresar un id");
  
    try {
      const nuevaURL = URL + '/' + id;
      const resDel = await axios.delete(nuevaURL);
      const getRes = await axios.get(URL);
  
      const response = {
        URL,
        Method: 'DELETE',
        Status: resDel.status,
        Data: resDel.data,
        Products: getRes.data 
      };
  
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function actualizarProducto(id, nuevoProd) {
    if (!id || !nuevoProd) return console.log('Se deben ingresar todos los parámetros para ejecutar la función')
    const nuevaURL = URL + '/' + id
    const updateRes = await axios.put(nuevaURL, nuevoProd)
    const response = {
      URL,
      Method: 'PUT',
      Status: updateRes.status,
      Data: updateRes.data
    }
    console.log(response)
  }


// todosProductos()
// postProductos(nuevoProducto)
// borrarProducto('63e1b32d0839b7e2560c4333')
// actualizarProducto('63e1b3c827255d732c3b7db4', {precio: 301})