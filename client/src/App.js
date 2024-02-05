import { useState, useEffect } from "react";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Web3 from "web3";
import "./App.css";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [data, setData] = useState("nill");
  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorage.networks[networkId];
      const contract = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork.address
      );
      console.log(contract);
      setState({ web3: web3, contract: contract });
    }
    provider && template();
  }, []);
  useEffect(() => {
    const { contract } = state;
    async function readData() {
      const data = await contract.methods.getter().call();
      setData(data);
    }
    contract && readData();
  }, [state]);
  async function writeData() {
    const { contract } = state;
    const data = document.querySelector("#value").value;
    await contract.methods
      .setter(data)
      .send({ from: "0x6599cBdEDC6848127eF5A6A37a19Db9c61DE7be9" });
    window.location.reload();
  }
  return (
    <>
    <div>
      <img src="https://blockchain-expo.com/global/wp-content/uploads/2021/06/Blockchain-Global-White.png" alt="" className="Logo" width="280" height="80" />
      <a href="../Blog/blog.html" className="Blog">Log In</a>
      <a href="../Home/Home.html" className="FeedBack">Sign Up</a>

      <img src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" className="background-image" />
      

      <div className="search-container">
        {/* <input type="text" className="search-input" placeholder="Search..." />
        <p className="text">Contract Data : {data}</p> */}


      <p className="contract" >Contract Data : {data}</p>
    <div>
    <input type="text" id="value" required="required" placeholder="Enter integer Value"></input>
    </div>
        <button onClick={writeData} className="button2">Change Data</button>
      </div>

      <div className="container">
        <h1>What Is Web 3.0??</h1>
        <p>Web 3.0 describes the next evolution of the World Wide Web, the user interface that provides access to documents, applications, and multimedia on the internet.</p>
        <p>Web 3.0 is still being developed, so there isn't a universally accepted definition. Even the proper spelling isn't nailed down, with analyst firms like Forrester, Gartner, and IDC toggling between "Web3" and "Web 3.0."</p>
        <p>What is clear, though, is that Web 3.0 will place a strong emphasis on decentralized applications and probably make extensive use of blockchain-based technologies. It will also use machine learning and AI to empower a more intelligent and adaptive web.</p>

        <h1>Why is Web 3.0 important?</h1>
        <p>If decentralizing the web's architecture delivers even a portion of the benefits promised by Web 3.0 proponents, it could fundamentally alter how people interact on the web and how companies make money from goods and services.</p>
        <p>Web 2.0 giants like Amazon, Google, and Facebook parent Meta grew quickly by collecting and centralizing petabytes of customer data and monetizing it in myriad ways. Web 3.0's global peer-to-peer network could be the great leveler that makes it hard for such companies to grow by hoarding data. Individuals will have more control over web content and who can access and profit from their personal data.</p>
        <p>Web 3.0 business opportunities, by contrast, are likely to center around exploiting this new ability to tailor web products and services to the individual. For example, Web 3.0 marketing capabilities could help companies strike a better balance between privacy and personalization than is possible with today's web. The downside: They may find Web 3.0's strong privacy protections a barrier to how they already do digital marketing.</p>
        <p>The greater transparency provided by immutable blockchain ledgers could improve customer service, as both parties have access to the record of their transactions. Businesses could more easily monitor their supply chains by using decentralized apps to break down data silos and see suppliers' activities. Sharing real-time information among supply chain participants could reduce shortages and speed up deliveries.</p>
        <p>Web 3.0 is also important as the infrastructure for the metaverse, a proposed 3D virtual world in which digital representations of people, called avatars, interact and conduct business. The metaverse, like Web 3.0, doesn't exist yet, and it will likewise rely on blockchain or a comparable decentralized technology for its data infrastructure and finances, as well as on AI to make it more responsive to the wishes of users.</p>

        <hr />

        <h1>What Is Web 2.0??</h1>
        <p>The term Web 2.0 first came into use in 1999 as the Internet pivoted toward a system that actively engaged the user. Users were encouraged to provide content, rather than just viewing it. The social aspect of the Internet has been particularly transformed; in general, social media allows users to engage and interact with one another by sharing thoughts, perspectives, and opinions. Users can tag, share, tweet, and like.</p>
        <p>Web 2.0 does not refer to any specific technical upgrades to the internet. It simply refers to a shift in how the internet is used in the 21st century. In the new age, there is a higher level of information sharing and interconnectedness among participants. This new version allows users to actively participate in the experience rather than just acting as passive viewers who take in information.</p>
        <p>Because of Web 2.0, people could now able to publish articles and comments, and it became possible to create user accounts on different sites, therefore increasing participation. Web 2.0 also gave rise to web apps, self-publishing platforms like WordPress, as well as social media sites.</p>
        <p>Examples of Web 2.0 sites include Wikipedia, Facebook, Twitter, and various blogs, which all have transformed the way the same information is shared and delivered.</p>

        <p>The metaverse and Web 3.0 are interdependent at the technical and conceptual levels and, therefore, likely to evolve in tandem. The metaverse probably won't come to pass until its Web 3.0 underpinnings are firmly established.</p>

        <h1 className="comparison">Comparison</h1>
        <img className="img" src="https://uploads-ssl.webflow.com/5fda9e054c8f10649883f27d/624f1de2ab990766bfecfc72_1342849_Op2_040622.png" alt="" width="800" />
      </div>
    </div>
 
    
    </>
  );
}

export default App;

