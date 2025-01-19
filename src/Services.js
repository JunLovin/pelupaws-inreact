import './App.css'
import DayCare from './assets/img/Dogs/dogDaycare.jpg'
import ManicureDog from './assets/img/Dogs/manicureDog.jpg'
import WalkDog from './assets/img/Dogs/walkDog.jpeg'
import WashDog from './assets/img/Dogs/showerDog.jpg'

function Services() {
    function showPHidden(id) {
        const paragraph = document.getElementById(id)
        paragraph.classList.toggle('hidden');
    }
    return (
        <>
        <section className="servicios-section">
            <article className="servicios-section-list">
                <h2>Nuestros servicios</h2>
                <ul>
                    <li className="first" onClick={() => showPHidden('p-first-hidden')}>Peluquería y baño</li>
                    <div className="p-first-hidden hidden" id='p-first-hidden'>
                        <p>Nos enfocamos en darle el mejor servicios a su mascota para que luzca un nuevo look increíble, le daremos un baño de burbujas relajante para que se sienta como en casa.</p>
                    </div>
                    <li className='second' onClick={() => showPHidden('p-second-hidden')}>Paseo de perros</li>
                    <div className="p-second-hidden hidden" id="p-second-hidden">
                        <p>Si no tienes tiempo para tu mascota ¡No te preocupes! Nosotros estamos para ayudarte, lo cuidaremos y llevaremos a parques para mascotas para que conozca muchos amigos.</p>
                    </div>
                    <li className="third" onClick={() => showPHidden('p-third-hidden')}>Manicura</li>
                    <div className="p-third-hidden hidden" id="p-third-hidden">
                        <p>¿Tu masceota está descuidada? ¡No te preocupes! Uno de nuestros mejores servicios es brindarle manicura a las mascotas para que luzcan un excelente look.</p>
                    </div>
                    <li className="fourth" onClick={() => showPHidden('p-fourth-hidden')}>Guardería</li>
                    <div className="p-fourth-hidden hidden" id="p-fourth-hidden">
                        <p>Si tienes un viaje de negocios importante y no tienes con quien dejar a tu mascota puedes confiar en nosotros, saldremos a pasear todos los días, le daremos amor y muchos premios para que disfrute la compañía de nosotros y claro, la de las demás mascotas!</p>
                    </div>
                </ul>
            </article>
            <article className="servicios-section-images">
                <img src={DayCare} alt='Daycare dog'/>
                <img src={ManicureDog} alt='Manicure dog'/>
                <img src={WalkDog} alt='Walking dog'/>
                <img src={WashDog} alt='Dog taking shower'/>
            </article>
        </section>
        </>
    )
}

export default Services;