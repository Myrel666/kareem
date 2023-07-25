import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailSurah = ({ surahNumber }) => {
  const [surahData, setSurahData] = useState(null);

  useEffect(() => {
    fetchSurahData();
  }, [surahNumber]);

  const fetchSurahData = async () => {
    try {
      const response = await axios.get(
        `https://equran.id/api/v2/surat/${surahNumber}`
      );
      setSurahData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {surahData ? (
        <div>
          <h2>Surah {surahData.nama}</h2>
          <p>{surahData.asma}</p>
          <p>{surahData.keterangan}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailSurah;