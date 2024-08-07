import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BookDetails = ({ book }) => {
  const router = useRouter();

  const deleteBook = async () => {
    await axios.delete(`http://localhost:27017/books/${book._id}`);
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link href={`/books/${book._id}/edit`}>
        <a className="text-blue-500 mt-4 block">Edit</a>
      </Link>
      <button onClick={deleteBook} className="text-red-500 mt-4 block">Delete</button>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(`http://localhost:27017/books/${params.id}`);
  return {
    props: {
      book: res.data,
    },
  };
}

export default BookDetails;
