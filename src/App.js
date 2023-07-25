// import React, { useState, useEffect } from 'react';
// import './App.css';

// const ListSurah = () => {
//   const [surahs, setSurahs] = useState([]);

//   useEffect(() => {
//     fetchSurahs();
//   }, []);

//   const fetchSurahs = async () => {
//     try {
//       const response = await fetch('https://equran.id/api/v2/surat');
//       const data = await response.json();
//       setSurahs(data.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Surah List:</h1>
//       <ul>
//         {surahs.map(surah => (
//           <li key={surah.nomor}>
//             {surah.nama}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListSurah;

import React, { useState } from 'react';
import ListSurah from './ListSurah';
import DetailSurah from './DetailSurah';

function App() {
  const [selectedSurah, setSelectedSurah] = useState(1);

  const handleSelectSurah = surahNumber => {
    setSelectedSurah(surahNumber);
  };

  return (
    <div className="App">
      <h1>Al-Quran App</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <ListSurah onSelectSurah={handleSelectSurah} />
          </div>
          <div className="col">
            <DetailSurah surahNumber={selectedSurah} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;