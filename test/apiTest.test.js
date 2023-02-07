const supertest = require('supertest') 
const chai = require('chai');
const expect = chai.expect;

const request = supertest('http://localhost:8080')

let _id = '63e1babfabfce9c11a711428'

describe('test Api-productos', () => {
  describe('GET', () => {
    it('La petición debería retornar status 200', async () => {
      let res = await request.get('/api/productos')
      expect(res.status).to.equal(200)
    })
  })

  describe('POST', () => {
    it('Debe poder guardar un usuario', async () => {
      const newProduct = {
        nombre: 'Calculadora',
        descripcion: 'Calculadora marca Cassio',
        codigo: '3110',
        foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png',
        precio: 300,
        stock: 9,
      }
      let res = await request.post('/api/productos').send(newProduct)
      expect(res.status).to.equal(200)
      let product = res.body
      id = product._id
      
    })
  })

  describe('PUT', () => { 
    it('Debe poder modificar un producto de la bd por su id', async () => {
      let modification = {
        nombre: 'Calculadora actualizada',
        descripcion: 'Calculadora marca Cassio',
        codigo: '3110',
        foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png',
        precio: 300,
        stock: 8,
        }
      let res = await request.put(`/api/productos/${_id}`).send(modification)
      expect(res.status).to.equal(200)
    })
  })
  
  describe('DELETE', () => {
    it('Debe poder eliminar un producto por su id', async () => {
      let res = await request.delete(`/api/productos/${_id}`).send()
      expect(res.status).to.equal(200)
    })
  })

})