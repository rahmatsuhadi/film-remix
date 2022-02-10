import {Link} from 'remix';

export default function Index() {
  return (
    <div className="bg-red-700">
      <h1 className="text-blue-300">Welcome to Remix</h1>
      <Link to="/films">Trow To Film Page</Link>
    </div>
  );
}
