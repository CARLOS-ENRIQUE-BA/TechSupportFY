import "../../assets/style/formRegisterTech.css"
import ParagraphForm from "../atoms/ParagraphForm";


function FormRegisterTech2() {
    return ( 
        <>
            <form className="formulario">
            
                <div class="contenedor">
                    
                    <div class="input-contenedor">
                        <i class="fas fa-user icon"></i>
                        <input type="text" placeholder="CURP"/>
                    </div>

                        
                    <div class="input-contenedor">
                        <i class="fas fa-envelope icon"></i>
                        <input type="text" placeholder="Correo Electronico"/>
                    </div>

                        
                    <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input type="password" placeholder="Contraseña"/>
                    </div>

                        
                        <ParagraphForm>Al dar siguiente aceptas los terminos y condiciones de TechSupportFY</ParagraphForm>
                        
                        <input type="submit" value="Siguiente" class="button"/>
                        
                </div>

                
            </form>

        </>



     );
}

export default FormRegisterTech2;