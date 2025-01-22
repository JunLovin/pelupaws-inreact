import './App.css'
import FirstDog from './assets/img/Dogs/firstDog.webp'

function InfoSection() {
    const handleLink = url => {
        window.location.href = url
    }
    return (
        <>
        <section className="info-section">
            <article className="firstDog">
                <img src={FirstDog} alt="Dog"/>
            </article>
            <article className="info-section-text">
                <h2>¡Se sentirá de maravilla!</h2>
                <p>Porque además de darle un nuevo look increíble lo haremos sentir como en casa y lo llenaremos de mimos y cuidados.</p>
                <button className='contact-btn' onClick={() => handleLink("https://github.com/JunLovin")}>Contáctanos</button>
            </article>
        </section>
        </>
    )
}

export default InfoSection;