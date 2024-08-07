import axios from 'axios';
import Link from 'next/link';

const IndexPage = ({ books }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link href={`/books/${book._id}`}>
              <a className="text-blue-500">{book.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/books/new">
        <a className="text-blue-500 mt-4 block">Add New Book</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:27017/books');
  return {
    props: {
      books: res.data,
    },
  };
}

export default IndexPage;
