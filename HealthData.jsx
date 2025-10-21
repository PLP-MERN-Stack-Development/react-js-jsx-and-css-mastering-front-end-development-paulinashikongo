// src/components/HealthData.jsx
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const HealthData = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://disease.sh/v3/covid-19/countries");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const results = countries.filter((country) =>
      country.country.toLowerCase().includes(value)
    );
    setFilteredCountries(results);
    setPage(1);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = filteredCountries.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <p className="text-center text-blue-500 mt-6">Loading health data...</p>;
  if (error) return <p className="text-center text-red-500 mt-6">Error: {error}</p>;

  return (
    <div className="mt-10 container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
        🌎 Global Health Statistics
      </h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by country..."
          value={search}
          onChange={handleSearch}
          className="px-4 py-2 w-80 rounded border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((country) => (
          <Card key={country.country}>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={country.countryInfo.flag}
                alt={country.country}
                className="w-8 h-6 object-cover rounded"
              />
              <h3 className="text-lg font-semibold">{country.country}</h3>
            </div>
            <p>Cases: <span className="font-semibold">{country.cases.toLocaleString()}</span></p>
            <p>Recovered: <span className="font-semibold text-green-600">{country.recovered.toLocaleString()}</span></p>
            <p>Deaths: <span className="font-semibold text-red-500">{country.deaths.toLocaleString()}</span></p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            setPage((p) => (p * itemsPerPage < filteredCountries.length ? p + 1 : p))
          }
          disabled={page * itemsPerPage >= filteredCountries.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default HealthData;
