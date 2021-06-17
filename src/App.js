import { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
	const [countries, setCountries] = useState([])
	const [cart, setCart] = useState([])

	useEffect(()=>{
		fetch('https://restcountries.eu/rest/v2/all')
		.then(res => res.json())
		.then(data => {
			const first12 = data.slice(0,12);
			setCountries(first12);
			// const names = data.map(country => country.name);
			// console.log(names);
		})
		.catch(err => console.log(err))
	},[])

	const handleAdded = (countryItem) =>{
		console.log('Country Added', countryItem);
		const addCountry = [...cart, countryItem];
		setCart(addCountry);
	}
  return (
	<div className="App">
		
			<p className="text-style">Country Loaded: {countries.length}</p>
			<p style={{fontSize:'25px',fontWeight:'200'}}>Country Added: {cart.length}</p>
			<Cart cart={cart}></Cart>
		<header className="App-header">
			{
				countries.map(countryItem => <Country countryItem={countryItem} handleAdded={handleAdded}></Country>)
			}
		</header>
	</div>
  );
}

export default App;
