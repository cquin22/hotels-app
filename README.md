# Aplicacion almundo.com

La solucion propuesta para el problema planteado esta realizado con las siguientes tecnologias:

 - Api REST con NodeJS (Framework SailsJS).
 - Persistencia de Datos en PostgreSQL (Base de datos cloud ).
 - Frontend Angular 5


## Correr api

 1. entrar en la ruta /api
 2. correr npm install
 3. correr npm start

 ### End points api
    path: http://localhost
    puerto 1337
    - GET /hotel -> lista todos los hoteles
    - POST /hotel -> crea hotel ejemplo:
          {
            "name": "Atton San Isidro",
            "stars": 4,
            "price": 1943.69,
            "image": "4357289_55_b.jpg",
            "amenities": [
              "newspaper",
              "safety-box",
              "business-center",
              "coffe-maker",
              "restaurant"
            ]
          }
    - POST /hotel/:search -> Filtra hoteles con request param por palabra y en el body objeto de calificaci?n


## Correr Front angular modo desarrollo

 1. entrar en la ruta /web
 2. correr npm install
 3. ng serve


## Compilar proyecto angular

 1. entrar en la ruta /web
 2. ejecutar ng build --prod --aot
 3. copiar los archivos generados (minificados y compilados) en la carpeta /dist y desplegarlos en el servidor de recursos preferido (Nginx - Apache)

