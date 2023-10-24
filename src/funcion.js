const perfil = document.querySelector('.perfil')
const presentacion= document.querySelector('.presentacion')
const botones = document.querySelector('.botones')

perfil.innerHTML += `<img src="./medios/perfil.jpg" alt="ingeniero Marcos García">
                    <h3>Ing. Marcos García</h3>
                    <div class="linea"></div>
                    <h1>Gana Industrial</h1>`

presentacion.innerHTML += `<p class="lema">Profesionalismo y personalización en la industria</p>`

botones.innerHTML += `<div class="paginaweb">
                        <div class="enlace">
                            <div class="enlaceIcono">
                                <img src="./medios/logo.png" alt="">
                            </div>
                            <a href="https://www.ganaindustrial.com">Gana</a>
                        </div>
                        </div>
                        <div class="ventilacion">
                        <div class="enlace">
                            <div class="enlaceIcono">
                                <img src="./medios/ventilador.png" alt="">
                            </div>
                            <a href="https://www.ganaindustrial.com">Ventiladores</a>
                        </div>
                        </div>
                        <div class="facebook">
                        <div class="enlace">
                            <div class="enlaceIcono">
                                <img src="./medios/facebook.png" alt="">
                            </div>
                            <a href="https://www.facebook.com/ganaindustrialproducts">Facebook</a>
                        </div>
                        </div>
                        <div class="instagram">
                        <div class="enlace">
                            <div class="enlaceIcono">
                                <img src="./medios/instagram.png" alt="">
                            </div>
                            <a href="https://www.instagram.com/ganaindustrialproducts">Instagram</a>
                        </div>
                        </div>
                        <div class="whatsapp">
                        <div class="enlace">
                            <div class="enlaceIcono">
                                <img src="./medios/whatsapp.png" alt="">
                            </div>
                            <a href=" https://w.app/GanaIndustrial">Whatsapp</a>
                        </div>
                        </div>
                        <div class="correo">
                        <div class="enlace">
                            <div class="enlaceIcono">
                                <img src="./medios/email.png" alt="">
                            </div>
                            <a href="mailto:ganaindustrialpro@gmail.com">Envía un correo</a>
                        </div>
                        </div>`