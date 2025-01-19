import './App.css'

function Footer() {
    function saveEmail() {
        const email = document.getElementById('email');
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
        if (emailRegex) {
            email.style.border = '1px solid var(--sage)'
            email.style.color = 'var(--sage)'
        } else {
            email.style.border = '1px solid red';
            email.style.color = 'red'
        }
    }
    return (
        <>
        <footer>
            <section>
                <h5>Info</h5>
                <ul>
                    <li><a href="#">Ubicación</a></li>
                    <li><a href="#">Correos</a></li>
                    <li><a href="#">Números</a></li>
                    <li><a href="#">Trabaja con Nosotros</a></li>
                </ul>
            </section>
            <section>
                <h5>Info</h5>
                <ul>
                    <li><a href="#">Ubicación</a></li>
                    <li><a href="#">Correos</a></li>
                    <li><a href="#">Números</a></li>
                    <li><a href="#">Trabaja con Nosotros</a></li>
                </ul>
            </section>
            <section>
                <h5>Info</h5>
                <ul>
                    <li><a href="#">Ubicación</a></li>
                    <li><a href="#">Correos</a></li>
                    <li><a href="#">Números</a></li>
                    <li><a href="#">Trabaja con Nosotros</a></li>
                </ul>
            </section>
            <section className="sendEmail">
                <h5>Enviar Correo</h5>
                <p>Para más información o preguntas que tenga puede enviarnos un correo y se lo responderemos pronto.</p>
                <input type="email" id='email' placeholder='example@domain.com'></input>
                <button id='submitBtn' onClick={saveEmail}>Enviar</button>
            </section>
        </footer>
        </>
    )
}

export default Footer;