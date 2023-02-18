import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('Brown');
  const [age, setAge] = useState(24);

  const handleSubmit = (e) => {
    setName('Smith');
    setAge(30);
  }

  return ( 
    <div>
      <h2>Contact { name } ({ age })</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
   );
}
 
export default Contact;