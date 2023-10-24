import image from '../assets/investment-calculator-logo.png';
export default function Header() {
  return (
    <header id="header">
      <img src={image} alt="logo showing a money bag"></img>
      <h1>Invesment Calculator</h1>
    </header>
  );
}
