// pages/my-page.js (Server Component)

function MyPage() {
  const [myData, setMyData] = useState(null);

  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    setMyData(data); // Update state directly
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Page</h1>
      <p>My data: {JSON.stringify(myData)}</p> 
    </div>
  );
}

export default MyPage;