import {useState, useEffect} from "react";

export const useFetch = (url) => {
    const [data, setData]           = useState(null);
    const [config, setConfig]       = useState(null);
    const [method, setMethod]       = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [itemId, setItemId]       = useState(null);
    const [loading, setLoading]     = useState(false);
    const [error, setError]         = useState(false);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body   : JSON.stringify(data),
            });
        }

        if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
            });
            setItemId(data);
        }

        setMethod(method);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res  = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.log(error.message);

                setError("Houve um erro ao carregar os dados!");
            }
            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];
                const res        = await fetch(...fetchOptions);
                const json       = await res.json();
                setCallFetch(json);
            }

            if (method === "DELETE") {
                let deleteUrl = `${url}/${itemId}`;
                const res     = await fetch(deleteUrl, config);
                const json    = await res.json();
                setCallFetch(json);
            }
        };
        httpRequest();
    }, [config, method, url]);

    return {data, httpConfig, loading, error};
};
