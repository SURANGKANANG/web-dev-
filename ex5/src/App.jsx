import './App.css';
import FoodCard from './component/FoodCard.jsx';

function App() {
  return (
    <>
      <h1 className='topic'>โหวตอาหาร</h1>
      <FoodCard title='อาหารคาว' subTitle="ข้าวผัด" imgSrc="https://i.pinimg.com/originals/8b/52/0c/8b520ccac4a4372d62d33770ece3c529.jpg" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolor fuga, quis sint harum iste vero minima unde corrupti sapiente, assumenda labore quibusdam quas ipsa. Optio animi, autem fuga sunt cumque labore ea doloremque magnam necessitatibus aut doloribus nihil dolorum harum molestiae sequi?"/>
      <FoodCard title='อาหารหวาน' subTitle="บัวลอย" imgSrc="https://th.bing.com/th/id/OIP.hbY5LX1YL731iHSL8rqGbwHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ab reiciendis. Molestiae perferendis quam earum rerum architecto tempora pariatur? Excepturi aliquam iste veniam ab porro mollitia itaque id iusto, fugiat cumque aliquid distinctio deserunt rem, ad libero?"/>
      
    </>

  );
}

export default App;
