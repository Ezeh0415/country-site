import DarkKing from '../image/logo.jpg';
const Home = () => {
    return ( 
        <>
          <div className="head-section">
            <img src={DarkKing} alt='logo' />
            <div className="links">
                <ul>
                    <a href='/'>home</a>
                    <a href='/'>populer</a>
                    <a href='/'>about us</a>
                    <a href='/'>contact us</a>
                </ul>
            </div>
          </div>
          <hr />
        </>
     );
}
 
export default Home;