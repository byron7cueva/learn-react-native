## React Navigation

* Permite agregar patrones de navegación.
* Se lo creo tanto para utilizar en la web, pero más se utiliza para crear aplicaciones react-native

### Stack Navigator

* Es la forma mas elemental de crear una navegación con react-navigation.
* Permite navegar ir y regresar a pantallas.
* Es como un pila de pantallas. Aca se van apilando las pantallas según se va navegando.
* Deep Linking: Es navegar directamente a una pantalla. Se lo puede hacer con la propiedad path en una ruta Stack.Screen.

StackActions

* Llamar acciones de forma programática.
* Funciones
  * push(): Añadir una pantalla al stack.
  * pop(): Quita la última pantalla a la cual se navego.
  * popToTop(): Quita todas hasta llegar a una.
  * replace(): Para poder cambiar los datos de la vista.

NavigationActions

* Funciones
  * navigate(): Para navegar entre pantallas.
  * back(): Regresar una pantalla.
  * setParams(): Cambiar o agregar los parámetros.
  * init(): Setear el estado inicial.