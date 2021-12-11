class Nodo 
{
    constructor(dato)
    {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
} 

class ListaNombres
{
    constructor()
    {
        this.primero = null;
        this.listaNumeros = new ListaNumeros(); 
    }

    insertar(nombre)
    {
        let nuevo = new Nodo(nombre);

        if(this.primero == null)
        {
            this.primero = nuevo;
        }
        else
        {
            let nodoAux = this.primero;
            while(nodoAux.siguiente != null)
            {
                nodoAux = nodoAux.siguiente;
            }

            nodoAux.siguiente = nuevo;
            nuevo.anterior = nodoAux;
        }
    }

    mostrar()
    {
        let nodoAux = this.primero;
        while(nodoAux != null)
        {
            console.log(nodoAux.dato);
            nodoAux = nodoAux.siguiente;
        }
    }
}

class ListaNumeros
{
    constructor()
    {
        this.primero = null;
    }

    insertar(numero)
    {
        let nuevo = new Nodo(numero);

        if(this.primero == null)
        {
            this.primero = nuevo;
        }
        else
        {
            let nodoAux = this.primero;
            while(nodoAux.siguiente != null)
            {
                nodoAux = nodoAux.siguiente;
            }

            nodoAux.siguiente = nuevo;
            nuevo.anterior = nodoAux;
        }
    }

    mostrar()
    {
        let nodoAux = this.primero;
        while(nodoAux != null)
        {
            console.log(nodoAux.dato);
            nodoAux = nodoAux.siguiente;
        }
    }
}

let nombre1 = new ListaNombres();
nombre1.insertar("Juanito");
nombre1.listaNumeros.insertar(1);
nombre1.listaNumeros.insertar(2);
nombre1.listaNumeros.insertar(3);
nombre1.mostrar();
nombre1.listaNumeros.mostrar();

let nombre2 = new ListaNombres();
nombre2.insertar("Carlos");
nombre2.listaNumeros.insertar(5);
nombre2.listaNumeros.insertar(9);
nombre2.mostrar();
nombre2.listaNumeros.mostrar();