import { Instruccion } from '../Abstract/Instruccion';
import Arbol from '../Symbol/Three';
import tablaSimbolo from '../Symbol/SymbolTable';
import Tipo, {DataType} from '../Symbol/Type';
import SymbolTable from '../Symbol/SymbolTable';

export default class If extends Instruccion {
    private operacion: Instruccion;
    private listaInstrucciones: Instruccion [];    

    constructor(
        operacion: Instruccion, 
        listaInstrucciones: Instruccion[], 
        linea: number, 
        columna: number
    ){
        super(new Tipo(DataType.INDEFINIDO), linea, columna);
        this.operacion = operacion
        this.listaInstrucciones = listaInstrucciones
    }

    public interpretar(arbol: Arbol, tabla: tablaSimbolo) {
        while(this.operacion.interpretar(arbol, tabla)){
            const tablaLocal = new SymbolTable(tabla)
            for(let i of this.listaInstrucciones){
                i.interpretar(arbol, tablaLocal)
            }
        }
        return null;
    }
}