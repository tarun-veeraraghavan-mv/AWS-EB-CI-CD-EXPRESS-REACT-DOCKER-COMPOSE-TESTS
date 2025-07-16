import axios from "axios";

function App() {
  const res = async () => {
    const response = await axios.get(
      "http://test-express-env.eba-i2yiifzc.us-east-2.elasticbeanstalk.com/check"
    );

    console.log(response.data);
  };

  return (
    <>
      <p>Hello! This React App is deployed on AWS!!</p>
      <p>Pls work!!!!!!!!</p>
      <button onClick={res}>Get result</button>
    </>
  );
}

export default App;
