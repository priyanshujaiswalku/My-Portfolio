import React, { useState } from 'react';

export default function ResumeButton() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div>
      <button onClick={toggleResume} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4  rounded hover:scale-[0.8] hover:ease-in">
        {showResume ? 'Hide Resume' : 'Show Resume'}
      </button>
      {showResume && (
  <iframe src="https://drive.google.com/file/d/1tlm_Tl6-M7POyMR02jm8qjUWG9WEad1t/view?usp=sharing" width="100%" height="800px"></iframe>
)}

    </div>
  );
}
