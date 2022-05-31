import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      password,
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);

      navigate('/');
    } catch (err) {
      alert('Erro no cadastro. Tente novamente.');
    }

  }

  return (
    <div className="h-screen w-full m-auto max-w-5xl flex items-center justify-center">
      <div className="bg-gray-100 w-full p-24 shadow-md rounded flex justify-between items-center">
        <section className="w-full max-w-sm">
          <img src={logoImg} alt="Be The Hero" />

          <h1 className="mx-0 mt-16 mb-8 text-2xl">Cadastro</h1>
          <p className="text-lg text-[#737380] leading-8">Faça seu cadastro, entre na plataforma e ajude
          pessoas a encontrarem os casos de sua ONG.
          </p>


          <Link className='back-link' to="./">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>

        <form className="w-full max-w-md ml-3" onSubmit={handleRegister}>
          <input
           class="
            font-normal
            shadow 
            appearance-none 
            rounded
            text-base
            w-full 
            h-14
            py-2 
            px-3 
            border border-solid border-gray-300
            leading-tight 
            focus:shadow-outline 
            mb-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder='Nome da ONG'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
           class="
            font-normal
            shadow 
            appearance-none 
            rounded
            text-base
            w-full 
            h-14
            py-2 
            px-3 
            border border-solid border-gray-300
            leading-tight 
            focus:shadow-outline 
            mb-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
           class="
            font-normal
            shadow 
            appearance-none 
            rounded
            text-base
            w-full 
            h-14
            py-2 
            px-3 
            border border-solid border-gray-300
            leading-tight 
            focus:shadow-outline 
            mb-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder='Whatsapp'
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="flex">
            <input
             class="
              font-normal
              shadow 
              appearance-none 
              rounded
              text-base
              w-full 
              h-14
              py-2 
              px-3 
              border border-solid border-gray-300
              leading-tight 
              focus:shadow-outline 
              mb-2
              mr-2
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder='Cidade'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
             class="
              font-normal
              shadow 
              appearance-none 
              rounded
              text-base
              w-full 
              h-14
              py-2 
              px-3 
              border border-solid border-gray-300
              leading-tight 
              focus:shadow-outline 
              mb-2
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder='UF'
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <div className="input-password">
            <input
              class="
              font-normal
              shadow 
              appearance-none 
              rounded
              text-base
              w-full 
              h-14
              py-2 
              px-3 
              border border-solid border-gray-300
              leading-tight 
              focus:shadow-outline 
              mb-2
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button className='button bg-red-500' type='submit'>Cadastrar</button>

        </form>
      </div>
    </div>
  )
}