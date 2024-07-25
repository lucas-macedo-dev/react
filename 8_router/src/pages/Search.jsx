import {useSearchParams, Link} from "react-router-dom";

import {useFetch} from "../hooks/useFetch";

const Search = () => {
    let [searchParams] = useSearchParams();

    let url = "http://localhost:3000/products?" + searchParams.get('q');

    const {data: items, loading, error} = useFetch(url);

    return (
        <div>
            <h1>Resultados disponíveis:</h1>
            <div className="list-items">
                {loading && <p>Carregando...</p>}
                {error && <p>{error}</p>}
                {items && items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Search;