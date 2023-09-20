import { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleHooks from '../Hooks/TitleHooks';
import ReactTypingEffect from 'react-typing-effect';





AOS.init();


function Main() {

  const { user } = useContext(authContext)
  const [data, setdata] = useState([]);

  TitleHooks('Home')

  const tabdata = (data) => {
    fetch(`https://toy-marketplace-server-psi.vercel.app/category/?category=${data}`).then(data => data.json()).then(data => setdata(data))
  }

  useEffect(() => {
    fetch(`https://toy-marketplace-server-psi.vercel.app/category/?category=Avengers`).then(data => data.json()).then(data => setdata(data))
  }, [])




  const tabpaneldata = <>
    <div className='grid grid-cols-3 gap-5 w-fit mx-auto my-10 max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
      {
        data.map(data =>
          <div key={data._id} className="card lg:w-72 md:w-auto bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)] 
        hover:shadow-[0_3px_8px_rgba(0,0,0,0.20)] transition duration-500 ease-in-out hover:scale-[105%] ">
            <figure><img src={data.image} className='h-48 w-full' /></figure>
            <div className="card-body h-36">
              <h2 className="card-title">{data.name}</h2>
              <div className="text-left">
                <p>Price : {data.price}$</p>
                <div className="flex mt-2">
                  <h1>Rating :</h1>
                  <span className="mt-1 pl-1">
                    <Rating
                      readonly
                      placeholderRating={data.rating}
                      emptySymbol={<AiOutlineStar />}
                      placeholderSymbol={<AiTwotoneStar className="text-orange-400" />}
                      fullSymbol={<AiTwotoneStar />}
                    />
                  </span>
                  <span className="pl-2">({data.rating})</span>
                </div>
              </div>
            </div>
            <div className='p-2'>
              <Link onClick={() => { (user) ? window.location.replace(`/all-toys/${data._id}`) : setTimeout(() => window.location.replace(`/all-toys/${data._id}`), 2000) }}><button className="btn block w-full rounded-xl bg-[#ED1C24] hover:bg-red-500 border-none"
                onClick={() => { (user) ? '' : toast.error('You have to log in first to view details.') }}>View Details</button></Link>
            </div>
          </div>
        )
      }
    </div>
  </>




  return (
    <div className='overflow-hidden'>

      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />


      {/* banner section */}
      <section className='flex justify-center'>
        <div className='container'>
          <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://i.ibb.co/pwC5dW6/1.jpg")` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-secondary-content">
              <div className="max-w-lg">
                <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                  Experience the Ultimate online Toy Shop.
                </h1>
                <ReactTypingEffect text={["Official Distributor of G.I. Joe, MOTU, Dragon Ball, TMNT, Power Rangers, Gundam Toy Brands in Bangladesh!"]} speed={40} />
                <p className="mb-5 sm:mb-7 sm:text-lg">

                </p>
                <button className="btn bg-[#ED1C24] sm:btn-wide hover:bg-red-500">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hero" data-aos="zoom-in" data-aos-easing="ease-in-back"
        data-aos-delay="100">
        <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">
          <div className="text-black text-center other  bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
            <h1 className="text-5xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">We have all kind<br /> of action figure!</h1>
            <div className='py-3'>
              <h1 className='font-semibold'>We deliver best of fantastic,hand-piched,age appriciate toys</h1>
            </div>
          </div>
          <img src="https://cdn.shopify.com/s/files/1/0251/9220/2300/products/PowerRangersMezcoToyzOne12CollectiveMightyMorphinDeluxeBoxSet_1.png?v=1668100960" className=' max-w-sm hover:scale-[120%] transition duration-500 ease-in-out' />
        </div>
      </div>



      <div className="hero" data-aos="zoom-out" data-aos-easing="ease-in-back"
        data-aos-delay="100">
        <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">

          <img src="https://i.ibb.co/h89G8Fj/thor-clipart-2018-15.png" className=' max-w-sm hover:scale-[120%] transition duration-500 ease-in-out' />
          <div className="text-black text-center other bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
            <h1 className="text-5xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">Get your dream Action figure today</h1>
            <div className='py-3'>
              <h1 className='font-semibold'>We offer the finest selection of incredible toys that have been carefully chosen, ensuring they are perfect for each age group.</h1>
            </div>

            <Link to={'/all-toys'} className="btn bg-[#ED1C24] border-none hover:bg-red-500">BUY NOW</Link>
          </div>
        </div>
      </div>




      <section className='my-32'>

        <h1 className='text-5xl font-bold text-center'>Gallery</h1>

        <div className='flex gap-2 justify-center mt-20 flex-wrap px-2'>
          <div data-aos="fade-right">
            <img src="https://c1.wallpaperflare.com/preview/64/174/548/toy-figures-shanghai-street.jpg" className='h-[450px] rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[102%] transition duration-500 ease-in-out max-[400px]:max-h-[300px]' />
          </div>
          <div className='grid grid-cols-2 w-fit gap-3 max-[400px]:max-w-[300px] max-w-[470px]' data-aos="fade-left">
            <img src="https://media.karousell.com/media/photos/products/2020/11/5/marvel_legends_worthy_captain__1604566376_419c0741_progressive.jpg" className='h-[218px] rounded-tl-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />
            <img src="https://i.pinimg.com/564x/df/6b/0b/df6b0b927966a662d1de020e791dacd1.jpg" className='h-[218px] rounded-tr-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />
            <img src="https://i.ebayimg.com/images/g/KrkAAOSwqa9iIAG6/s-l1600.jpg" className='h-[218px] rounded-bl-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />
            <img src="https://images.alphacoders.com/705/705099.jpg" className='h-[218px] rounded-br-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />

          </div>
        </div>


      </section>







      <section >
        <h1 className='text-5xl font-bold text-center mt-44'>Products Categories</h1>
        <div className='text-center mx-20 max-[650px]:mx-2 mt-16'>
          <Tabs>
            <TabList className='font-bold '>
              <Tab onClick={() => { tabdata('Avengers') }}>Avengers</Tab>
              <Tab onClick={() => { tabdata('Dragon Ball') }}>Dragon Ball</Tab>
              <Tab onClick={() => { tabdata('Power Rangers') }}>Power Rangers</Tab>
            </TabList>

            <TabPanel>
              {tabpaneldata}
            </TabPanel>

            <TabPanel>
              {tabpaneldata}
            </TabPanel>

            <TabPanel>
              {tabpaneldata}
            </TabPanel>
          </Tabs>
        </div>
      </section>



      <div className="hero" data-aos="zoom-out" data-aos-easing="ease-in-back"
        data-aos-delay="100">
        <div className="hero-content w-[90%]  flex-col lg:flex-row text-white gap-10">

          <img src="https://memberful.com/images/newsletters/newsletters-banner-9dcd3a3c.jpg" className='max-w-sm hover:scale-[120%] transition duration-500 ease-in-out' />
          <div className="text-black text-center other bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
            <h1 className="text-5xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">Subscribe Newsletter</h1>
            <div className='py-3'>
              <h1 className='font-semibold'>
                <div>
                  <div className="w-80 m-auto max-[400px]:px-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your email here"
                        className="input bg-slate-200 rounded-[30px] w-full py-8 "
                      />
                      <button className="btn btn-ghost text-white bg-[#ED1C24] hover:bg-red-500 absolute top-2 right-2 rounded-[30px]">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Main