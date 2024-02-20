// components/MiniForm.jsx
import React, { useState } from 'react';
import styles, { layout } from "../style"
import Button from './Button';

const Checkout = () => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };


  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if( count > 0){
      setCount(count - 1);
    }
  };

  return (
    <div className={`${styles.marginX} w-[600px] font-poppins font-medium text-[18px] text-primary rounded-full p-[2px] h-[20px]`}>
      <div className='flex flex-1'>
        <h1 className='py-3 px-3'>General Admission</h1>
        <button onClick={decrement}>-</button>
        <p className='px-3 py-3 mx-3'>{count}</p>
        <button onClick={increment}>+</button>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className={`py-4 px-6 font-poppinsfont-medium text-[18px] text-primary outline-black ${styles} rounded-[10px]`}>
            Reserve a spot
        </button>
      </form>
    </div>
  );
};

export default Checkout;