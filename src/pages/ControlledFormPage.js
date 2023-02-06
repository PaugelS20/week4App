import { useState } from 'react';

export const ControlledFormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  return (
    <form>
      <h3>Please enter your information:</h3>
      <div>
        <input 
            type="text" 
			placeholder="Name"
			value={name}
			onChange={e => setName(e.target.value)}/>
      </div>
      <div>
        <input type="text" placeholder="Email"/>
      </div>
      <div>
        <input type="text" placeholder="Favorite Color"/>
      </div>
      <button>Submit</button>
    </form>
  )
}
