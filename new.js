import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

const NewBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    await axios.post('http://localhost:27017/books', data);
    reset();
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input {...register('title', { required: true })} className="border rounded w-full py-2 px-3" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input {...register('author', { required: true })} className="border rounded w-full py-2 px-3" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Published Date</label>
          <input type="date" {...register('publishedDate', { required: true })} className="border rounded w-full py-2 px-3" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea {...register('description', { required: true })} className="border rounded w-full py-2 px-3" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default NewBook;
