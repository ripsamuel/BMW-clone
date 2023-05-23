import Layout from "../../Components/Layout"


function NotFound() {

    return (
     <Layout>
    
      <input
         type="text"
         placeholder="Busca tu producto"
         className="rounded-lg border border-black w-80 p-4 mb-10 focus:outline-none"
      />
        <div className="grid gap-10 grid-cols-2 w-full lg:max-w-screen-lg lg:w-full lg:gap-3 lg:grid-cols-3 lg:grid ">

        </div>

     </Layout>
    )
  }

  export default NotFound
