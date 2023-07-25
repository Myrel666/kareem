import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListSurah = ({ onSelectSurah }) => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetchSurahs();
  }, []);

  const fetchSurahs = async () => {
    try {
      const response = await axios.get('https://equran.id/api/v2/surat');
      setSurahs(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Surah List:</h2>
      <ul>
        {surahs.map(surah => (
          <li key={surah.nomor}>
            <button onClick={() => onSelectSurah(surah.nomor)}>
              {surah.nama}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSurah;