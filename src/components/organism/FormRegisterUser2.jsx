import "../../assets/style/formRegisterUser.css";
import ParagraphForm from "../atoms/ParagraphForm";

function FormRegisterUser2() {
    return ( 
        <>
            <form className="formulario">
            
                    <div class="contenedor">
                    
                        <div class="input-contenedor">
                        <i class="fas fa-envelope icon"></i>
                        <input type="text" placeholder="Correo Electronico"/>
                        </div>

                        
                        <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input type="password" placeholder="Contraseña"/>
                        </div>

                        
                        <ParagraphForm>Realize el pago y vuelvase miembro de TechSupportFY</ParagraphForm>
                        
                        <input type="submit" value="Siguiente" class="button"/>
                        
                    </div>

                
            </form>

        </>



     );
}

export default FormRegisterUser2;