import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "./form.module.css";
import { toast } from "react-toastify";

const confServices = {
  service: import.meta.env.VITE_SERVICE_CODE,
  template: import.meta.env.VITE_YOUR_TEMPLATE_ID,
  key: import.meta.env.VITE_YOUR_PUBLIC_KEY,
};

const FormS = () => {
  const [values,setValues] = useState({
    from_name: '',
    email: '',
    message: ''
  });

  const getAllValues = e =>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(Object.values(values).includes("")){
        
        toast("Complete todos los campos",{
            type: 'error'
        });
        return;
    }
    
    emailjs
      .sendForm(
        confServices.service,
        confServices.template,
        form.current,
        confServices.key
      )
      .then(
        (result) => {
          toast(result.text,{
            type: 'success'
            });
            setValues({
                from_name:'',
                email:'',
                message:''
            })
        },
        (error) => {
            
          toast(error.text,{
            type: 'error'
            });
            setValues({
                from_name:'',
                email:'',
                message:''
            })
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className={styled.form}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input className={styled.input} 
                 type="text" 
                 id="name" 
                 name="from_name" 
                 value={values.from_name}
                 onChange={ getAllValues }
                 placeholder="Ingrese su nombre"
                 />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className={styled.input} 
                 type="email" 
                 id="email" 
                 name="email"
                 value={values.email}
                 onChange={ getAllValues }  
                 placeholder="Ingrese su email"/>
        </div>
        <div className={styled.message}>
          <label htmlFor="message">Mensaje</label>
          <textarea className={styled.input} 
                    id="message" 
                    name="message"
                    value={values.message}
                    onChange={ getAllValues }
                    placeholder="Ingrese un mensaje" />
        </div>
        <input className={styled.button} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormS;
