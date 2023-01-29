import Card from "./components/Card";

const App = () => {

  const CARDS = [
    {
      cardTitle: 'White Traditional long dress',
      price: 3.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1755414/pexels-photo-1755414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      cardTitle: 'Long sleeve denim jacket',
      price: 3.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      cardTitle: 'Hush Puppies',
      price: 3.99,
      rating: 4.2,
      image: 'https://images.pexels.com/photos/40737/sandals-flip-flops-footwear-beach-40737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      cardTitle: 'Athens skirt',
      price: 3.99,
      rating: 3.8,
      image: 'https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="shop-container">
      <Card cards={CARDS} />
    </div>
  )
};

export default App;