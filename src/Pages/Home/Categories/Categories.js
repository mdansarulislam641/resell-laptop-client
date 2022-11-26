
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import { CategoryContext } from '../../../contexts/CategoriesProvider';

const Categories = () => {
  const {loading} = useContext(AuthContext);
  const {categories} = useContext(CategoryContext);
  console.log(categories)
  if(loading){
    return <Loading></Loading>
  }
    return (
        <section className='py-20'>
            <h1 className='text-center md:text-4xl text-2xl font-extrabold font-mono mb-20'>Resell Laptop Categories</h1>
           <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container'>
           {
                categories?.map(category =><div key={category._id} className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-[200px]' src={category.image} alt="laptop" /></figure>
                <div className="card-body">
                  <h2 className="card-title md:text-3xl text-2xl font-extrabold font-mono">Brand: {category.category_name}</h2>
                  <div className="card-actions justify-end">
                  <Link to={`/category/${category._id}`}> <button className="btn btn-primary">show product</button></Link>
                  </div>
                </div>
              </div>)
            }
           
           </div>
        </section>
    );
};

export default Categories;