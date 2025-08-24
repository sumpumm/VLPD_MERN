import React, { useState } from 'react';
import './Home.css';
import axios from "axios";
import { useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  const [file,setFile] = useState();
  const [fileName,setFileName] = useState();
  const [plates, setPlates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlates = async () => {
    try {
      const res = await axios.get("http://localhost:1000/api/v3/plates");
      setPlates(res.data); 
     
    } catch (error) {
      console.error("Error fetching plates:", error);
    }
  };

  const upload = async () => {
    const formData = new FormData();
    formData.append('file',file);
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:1000/api/v2/upload", formData);
      setFileName(res.data.file_name);
     
      alert(res.data.message);
      await fetchPlates(); 
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false); 
    }
  }
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to License Plate Detection System</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center mb-6">
        License Plate Detection System helps you detect and record license plates from uploaded video files.
          Login to upload videos and view detected license plates.
        </p>
        <button
          onClick={() => window.location.href = "/signin"} // Update route if different
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          Login to Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-4">

  {/* Upload and Video Player */}
  <div className="flex justify-center items-center gap-10 mb-8">
    
    {/* Upload Button */}
    <div className="flex flex-col items-center justify-center w-96">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-600">
        <p className="mb-2 text-white">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-white">Videos</p>
      <input type="file"  accept="video/*" name="file" className="hidden" onChange={(e)=> setFile(e.target.files[0])}/>
      </label>
    </div>
    {/* Video Player */}
    <div>
    <div className="relative w-[720px] h-[405px] mx-auto group transition-all duration-300">
  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur opacity-70 group-hover:opacity-100 transition duration-500 rounded-xl"></div>

  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10 backdrop-blur-sm w-full h-full">
    <video
      controls
      className="w-full h-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
    >
      {fileName && (
        <source src={`http://localhost:8000/tracks/${fileName}`} type="video/mp4" />
      )}
      
      Your browser does not support the video tag.
    </video>
    
  </div>
</div>

</div>

  </div>
  <label
  htmlFor="fileUpload"
  className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
  onClick={upload}
>
  Upload Video
</label>
<br />
  {isLoading ? (
  <p className="text-white">Processing video... please wait.</p>
) : plates.length > 0 ? (
  <div className="w-full max-w-4xl mt-8 bg-white shadow-xl rounded-xl overflow-hidden">
  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
    <h2 className="text-white text-lg font-semibold tracking-wide">Detected License Plates</h2>
  </div>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
            License Plate
          </th>
          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Recorded Time
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {plates.map((plate, index) => (
          <tr key={index} className="hover:bg-gray-50 transition duration-200">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
              {plate.plateNumber}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {new Date(plate.recordedAt).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

) : null}{/* Table */}
  
</div>


  )
}

export default Home
