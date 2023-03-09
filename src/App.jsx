import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'

function App() {
  const greeting = [
    '¡Bienvenido a Paw Pets!', <br />, <br />,
    'Aquí te mostraremos todo lo que necesitas para cuidar a tu mejor amigo peludo.',
    'Desde juguetes y accesorios, hasta consejos de entrenamiento y nutrición, ¡lo tenemos todo!',<br />,
    'Explora nuestra selección cuidadosamente seleccionada de productos para asegurarte de que tu mascota tenga todo lo que necesita para ser feliz y saludable.', <br />, <br />,
    '¡Gracias por visitarnos!'
  ]
  return (
    <main>
      <section id="home">
        <Navbar>
          <CartWidget />
        </Navbar>
        <ItemListContainer greeting={greeting} />
      </section>
      <section id="catalogo"> 
        <h2>Catálogo</h2>
      </section>
      <section id="contacto"> 
        <h2>Contacto</h2>
      </section>
    </main>
  )
}

export default App
