import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';


const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(email);
      setShowSuccessPopup(true)
      // Registro exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.log(error);
      // Manejar el error de registro, puedes mostrar un mensaje de error al usuario
    }
  };
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="flex flex-col items-center mt-8 rounded-lg shadow-lg p-8 w-72">
      <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
          <label className="text-sm">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-sm">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Registrarse
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
      )}
    </div>
  );
};

export default RegisterForm;