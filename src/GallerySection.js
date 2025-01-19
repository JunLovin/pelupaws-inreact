import './App.css'
import Dog1 from './assets/img/Dogs/secondDog.jpg'
import Dog2 from './assets/img/Dogs/thirdDog.jpg'
import Dog3 from './assets/img/Dogs/fourthDog.jpg'
import Dog4 from './assets/img/Dogs/fifthDog.webp'
import Dog5 from './assets/img/Dogs/sixthDog.jpg'

function GallerySection() {
    return (
        <>
            <section className="gallery-section">
                <article className="gallery-section-text">
                    <h2>¡Somos los mejores en lo que hacemos!</h2>
                    <p>Somos reconocidos en nuestro sector por el profesionalismo en todos los trabajos que hacemos, estamos enfocados en dar el mejor servicio tanto al cliente como a su mascota.<br/>Ofrecemos servicio a domicilio para los clientes que no puedan acudir a nuestro lugar de trabajo. ¡Pensamos en todos!</p>
                </article>
                <article className="gallery-section-img">
                    <img src={Dog1} alt=""/>
                    <img src={Dog2} alt=""/>
                    <img src={Dog3} alt=""/>
                    <img src={Dog4} alt=""/>
                    <img src={Dog5} alt=""/>
                </article>
            </section>
        </>
    );
}

export default GallerySection;