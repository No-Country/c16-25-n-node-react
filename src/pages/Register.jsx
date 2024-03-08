import { useState } from 'react';
import { Redirect, Link } from 'wouter';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Register = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    calle: '',
    numero: '',
    codigoPostal: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, nombre, apellido, dni, telefono, calle, numero, codigoPostal } = formData;

      // Verificar si las contraseñas coinciden
      if (password !== confirmPassword) {
        throw new Error('Las contraseñas no coinciden');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userData = {
        uid,
        nombre,
        apellido,
        dni,
        telefono,
        calle,
        numero,
        codigoPostal
      };

      await addDoc(collection(db, 'users'), userData);
      Swal.fire({
        title: '¡Registro Exitoso!',
        text: 'Tu registro ha sido exitoso. ¡Bienvenido!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#430199'
      }).then(() => {
        setShowSuccessPopup(true);
        });
    } catch (error) {
      console.log(error);
      // Mostrar alerta si las contraseñas no coinciden
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="m-2 p-2 flex items-end">
        <h1 className="mr-6 text-[#430199] text-3xl">
          Registro de Usuario
        </h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>
      <div className="w-3/4 max-w-[500px] mx-auto flex flex-col items-center mt-2 mb-14 rounded-lg p-6">
        <form onSubmit={handleFormSubmit} className="flex flex-col text-left gap-4 mb-2">
          <div className='flex flex-col'>
            <label className="text-sm text-[#430199] font-semibold">
              Email:
            </label>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              placeholder="youremail@company.tld"
              className="px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-[#B4B4B4]"
            />
          </div>
          <div className='flex flex-col'>
            <label className="text-sm text-[#430199] font-semibold">
              Contraseña:
            </label>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              placeholder="********"
              className="px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-[#B4B4B4]"
            />
          </div>
          <div className='flex flex-col'>
            <label className="text-sm text-[#430199] font-semibold">
              Confirmar contraseña:
            </label>
            <input
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleConfirmPasswordChange}
              placeholder="********"
              className="px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-[#B4B4B4]"
            />
          </div>
          <div>
            <h2 className="mr-6 text-[#430199] text-sm font-semibold">
              Datos de facturación
            </h2>
            <div className='flex flex-wrap'>
              <input
                placeholder="Nombre"
                className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-50 bg-white"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <input
                placeholder="Apellido"
                className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                placeholder="DNI"
                className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleInputChange}
              />
              <input
                placeholder="Telefono"
                className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <h2 className="mt-4 text-[#430199] text-sm font-semibold">
                Domicilio
              </h2>
              <div className='flex flex-wrap'>
                <input
                  placeholder="Calle"
                  className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  type="text"
                  name="calle"
                  value={formData.calle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
                <input
                  placeholder="Número"
                  className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
                <input
                  placeholder="Codigo Postal"
                  className="my-1 mr-2 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 my-4 bg-[#430199] text-white rounded-md hover:bg-blue-600"
          >
            Crear Cuenta
          </button>
        </form>
        {showSuccessPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>¡Registro Exitoso!</h2>
              <p>Tu registro ha sido exitoso. ¡Bienvenido!</p>
              <button onClick={closeSuccessPopup}>Cerrar</button>
            </div>
          </div>
        ) && <Redirect to="/" />}
        <div className="py-4 space-x-4">
          <span className='font-semibold text-black'>¿Ya tenés cuenta?</span>
          <Link className='font-semibold text-[#430199]' href="/login">Iniciar Sesión</Link>
        </div>

      </div>
    </div>
  );
};

export default Register;