import React from 'react'
import { StyledButton, StyledForm } from '../styledComponents/Contact'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const schema = yup.object().shape({
    name: yup.string().required('Enter your name'),
    email:yup.string().email('enter valid email').required('email in manditory'),
    message: yup.string().required('Enter your  Message')
  })
  .required()
function ContactForm() {
    const {register,handleSubmit, formState:{errors,isValid,isDirty}}=useForm({
        resolver:yupResolver(schema),
        mode:'onChange'
    });
    const onSubmit=(data)=>{
        alert(JSON.stringify(data));
    }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h1>SEND MESSAGE</h1>
            <div className='inputs'>
                <div className='name'>
                    <input type="text" placeholder='Your name*' {...register('name')}/>
                    <p>{errors.name?.message}</p>
                </div>
                <div className='email'>
                    <input type="text" placeholder='Your email*' {...register('email')} />
                    <p>{errors.email?.message}</p>
                </div>
                <div className='message'>
                    <textarea placeholder='Your message*' {...register('message')}/>
                    <p>{errors.message?.message}</p>
                </div>
            </div>
            
            <StyledButton disabled={isDirty && !isValid}>Submit</StyledButton>
        </StyledForm>
  )
}

export default ContactForm