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
          <p><b>Arti:</b> {surahData.arti}</p>
          <p><b>Jumlah Ayat:</b> {surahData.jumlahAyat}</p>
          <p><b>Tempat Turun:</b>{surahData.tempatTurun}</p>
          <p><b>Deskripsi:</b>{surahData.deskripsi}</p>

          <p><b>Ayat:</b></p>
          <ul>
            {surahData.ayat.map(ayat => (
              <li key={ayat.nomorAyat}>
                <p>{ayat.teksArab}</p>
                <p>{ayat.teksLatin}</p>
                <p>{ayat.teksIndonesia}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailSurah;