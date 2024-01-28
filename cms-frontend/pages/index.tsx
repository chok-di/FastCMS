export async function getServerSideProps() {
  const res = await fetch('http://localhost:8000/')
  const data = await res.json()

  return {
    props: { data },
  }
}


type Data = {
  Hello: string

}

const Home = ({data}:{data:Data}) =>{
  return (
    <div>
      <h1>Welcome to the CMS</h1>
      <p>Data from API: {data.Hello}</p>
    </div>
  )
}

export default Home