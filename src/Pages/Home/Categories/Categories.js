
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../../contexts/CategoriesProvider';

const Categories = () => {
  const {categories} = useContext(CategoryContext);
    console.log(categories)

    return (
        <section className='py-20'>
            <h1 className='text-center md:text-4xl text-2xl font-extrabold font-mono mb-20'>Resell Laptop Categories</h1>
           <div className='grid grid-cols-3 gap-8 container'>
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