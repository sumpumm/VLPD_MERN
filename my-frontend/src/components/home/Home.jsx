import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 p-4">

  {/* Upload and Video Player */}
  <div className="flex justify-center items-center gap-10 mb-8">
    
    {/* Upload Button */}
    <div className="flex flex-col items-center justify-center w-96">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-600">
        <p className="mb-2 text-white">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-white">Videos</p>
        <input type="file" accept="video/*" className="hidden" />
      </label>
    </div>

    {/* Video Player */}
    <div>
      <video controls className="w-96 rounded-lg shadow-lg bg-black">
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  </div>

  {/* Table */}
  <div className="w-full max-w-3xl">
    <table className="table-auto border-collapse border border-gray-400 w-full bg-white">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">License Plate</th>
          <th className="border border-gray-400 px-4 py-2">Recorded Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">BA 1234 XY</td>
          <td className="border border-gray-400 px-4 py-2">2025-07-07 14:32:45</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">GA 5678 AB</td>
          <td className="border border-gray-400 px-4 py-2">2025-07-07 15:12:22</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>


  )
}

export default Home
