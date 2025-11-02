// src/components/ApiIntegration.jsx
import { useState, useEffect } from "react";
import Button from "./Button";

export default function ApiIntegration() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 10;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
        setFilteredData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data by search
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setPage(1);
  }, [search, data]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const displayedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">API Data List</h1>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title..."
        className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
      />

      {/* Loading & Error */}
      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Data List */}
      {!loading && !error && (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedData.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded shadow hover:shadow-md transition"
              >
                <h2 className="font-bold mb-2">{item.title}</h2>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              <Button
                text="Prev"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                color={page === 1 ? "gray" : "blue"}
                size="sm"
              />
              <span className="px-2 py-1">{page} / {totalPages}</span>
              <Button
                text="Next"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                color={page === totalPages ? "gray" : "blue"}
                size="sm"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
