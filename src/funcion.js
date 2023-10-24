const perfil = document.querySelector('.perfil')
//const presentacion= document.querySelector('.presentacion')
const mapa = document.querySelector('.mapa')
//const botones = document.querySelector('.botones')
const pies = document.querySelector('footer')

const fotoPerfil = document.createElement("img")
fotoPerfil.src = "./medios/perfil.jpg"
fotoPerfil.alt="ingeniero Marcos García"

const nombreTitular = document.createElement("h3")
nombreTitular.innerHTML = `Ing. Marcos García`

const linea = document.createElement("div")
linea.classList.add("linea")

const nombreEmpresa = document.createElement("h1")
nombreEmpresa.innerHTML = `Gana Industrial`

perfil.appendChild(fotoPerfil)
perfil.appendChild(nombreTitular)
perfil.appendChild(linea)
perfil.appendChild(nombreEmpresa)

const presentacion = document.createElement("section")
presentacion.classList.add("presentacion")

mapa.appendChild(presentacion)

const lema = document.createElement("p")
    lema.classList.add("lema")
    lema.innerHTML = `Profesionalismo y personalización en la industria`
presentacion.append(lema)

class But{
    constructor({
        logo,
        nombre,
        enlace,
    }){
        this.logo=logo,
        this.nombre=nombre
        this.enlace=enlace
    }
}

const pgWb = new But({
    logo: "./medios/logo.png",
    nombre: "Gana",
    enlace: "https://www.ganaindustrial.com",
})
const ventiladores = new But({
    logo: "./medios/ventilador.png",
    nombre: "Ventiladores",
    enlace: "https://www.ganaindustrial.com",
})
const facebook = new But({
    logo: "./medios/facebook.png",
    nombre: "Facebook",
    enlace: "https://www.facebook.com/ganaindustrialproducts",
})

const instagram = new But({
    logo: "./medios/instagram.png",
    nombre: "Instagram",
    enlace: "https://www.instagram.com/ganaindustrialproducts",
})
const whats = new But({
    logo: "./medios/whatsapp.png",
    nombre: "Whatsapp",
    enlace: "https://w.app/GanaIndustrial",
})
const correo = new But({
    logo: "./medios/email.png",
    nombre: "Correo",
    enlace: "mailto:ganaindustrialpro@gmail.com",
})

const botones = document.createElement("section")
    botones.classList.add('botones')

const pagWeb = document.createElement("div")
    pagWeb.classList.add("paginaweb")
const enlace = document.createElement("div")
    enlace.classList.add("enlace")
const enlaceIcono = document.createElement("div")
    enlaceIcono.classList.add("enlaceIcono")
const imgWeb = document.createElement("img")
    imgWeb.src = `${pgWb.logo}`
    imgWeb.alt = "Página web"
const enlaceweb = document.createElement("a")
    enlaceweb.href = `${pgWb.enlace}`
    enlaceweb.text= `${pgWb.nombre}`

const venti = document.createElement("div")
    venti.classList.add("paginaweb")
const enlacev = document.createElement("div")
    enlacev.classList.add("enlace")
const enlaceIconov = document.createElement("div")
    enlaceIconov.classList.add("enlaceIcono")
const imgv = document.createElement("img")
    imgv.alt = "Página web"
    imgv.src = `${ventiladores.logo}`
const enlacewebv = document.createElement("a")
    enlacewebv.href = `${ventiladores.enlace}`
    enlacewebv.text= `${ventiladores.nombre}`

const face = document.createElement("div")
    face.classList.add("paginaweb")
const enface = document.createElement("div")
    enface.classList.add("enlace")
const enlaceface = document.createElement("div")
    enlaceface.classList.add("enlaceIcono")
const imgface = document.createElement("img")
    imgface.src = `${facebook.logo}`
const enlacefaceb = document.createElement("a")
    enlacefaceb.href = `${facebook.enlace}`
    enlacefaceb.text= `${facebook.nombre}`

const insta = document.createElement("div")
    insta.classList.add("paginaweb")
const enlaceinsta = document.createElement("div")
    enlaceinsta.classList.add("enlace")
const enlaceIconoI = document.createElement("div")
    enlaceIconoI.classList.add("enlaceIcono")
const imgInsta = document.createElement("img")
    imgInsta.src = `${instagram.logo}`
    imgInsta.alt = "Página web"
const enlaceInsta = document.createElement("a")
    enlaceInsta.href = `${instagram.enlace}`
    enlaceInsta.text= `${instagram.nombre}`

const whatsapp = document.createElement("div")
    whatsapp.classList.add("paginaweb")
const enlacew = document.createElement("div")
    enlacew.classList.add("enlace")
const enlaceIconow = document.createElement("div")
    enlaceIconow.classList.add("enlaceIcono")
const imgW = document.createElement("img")
    imgW.src = `${whats.logo}`
    imgW.alt = "Página web"
const enlacewhatss = document.createElement("a")
    enlacewhatss.href = `${whats.enlace}`
    enlacewhatss.text= `${whats.nombre}`

const correoe = document.createElement("div")
    correoe.classList.add("paginaweb")
const enlacec = document.createElement("div")
    enlacec.classList.add("enlace")
const enlaceIconoc = document.createElement("div")
    enlaceIconoc.classList.add("enlaceIcono")
const imgC = document.createElement("img")
    imgC.src = `${correo.logo}`
    imgC.alt = "Página web"
const enlacecorreo = document.createElement("a")
    enlacecorreo.href = `${correo.enlace}`
    enlacecorreo.text= `${correo.nombre}`

mapa.appendChild(botones)
botones.appendChild(pagWeb)
pagWeb.appendChild(enlace)
enlace.appendChild(enlaceIcono)
enlaceIcono.append(imgWeb)
enlace.appendChild(enlaceweb)

botones.appendChild(venti)
venti.appendChild(enlacev)
enlacev.appendChild(enlaceIconov)
enlaceIconov.append(imgv)
enlacev.appendChild(enlacewebv)

botones.appendChild(face)
face.appendChild(enface)
enface.appendChild(enlaceface)
enlaceface.append(imgface)
enface.appendChild(enlacefaceb)

botones.appendChild(insta)
insta.appendChild(enlaceinsta)
enlaceinsta.appendChild(enlaceIconoI)
enlaceIconoI.append(imgInsta)
enlaceinsta.appendChild(enlaceInsta)

botones.appendChild(whatsapp)
whatsapp.appendChild(enlacew)
enlacew.appendChild(enlaceIconow)
enlaceIconow.append(imgW)
enlacew.appendChild(enlacewhatss)

botones.appendChild(correoe)
correoe.appendChild(enlacec)
enlacec.appendChild(enlaceIconoc)
enlaceIconoc.append(imgC)
enlacec.appendChild(enlacecorreo)

const fondo = document.createElement("div")
    fondo.classList.add('fondo')
mapa.appendChild(fondo)

pies.innerHTML += `<p>Estamos para orientar, servirte y crecer juntos</p>`
