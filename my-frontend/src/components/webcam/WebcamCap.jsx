import React, { useState, useEffect, useCallback } from 'react'
import Webcam from "react-webcam";
import axios from "axios";

const videoConstraints = {
    width: 600,
    height: 600,
    facingMode: "user"
  };

const WebcamCap = () => {
    const [cap,setCap]= useState();
    const [detected,setDetected] = useState();
    const [plates, setPlates] = useState([]);
    const webcamRef = React.useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const capture = useCallback(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        setCap(imageSrc);
        axios.post('http://localhost:8000/api/webcam', {
          image: imageSrc,
        })
        .then(response => {
          setDetected(response.data.annotated_image);
          setPlates(response.data.license_plate);
          setIsLoading(false);
        })
  
      }
    }, [webcamRef]);

    useEffect(() => {
      
      const intervalId = setInterval(() => {
        capture();
      }, 20000);
  
      return () => clearInterval(intervalId);
    }, [capture]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black p-6 text-white flex flex-col items-center">


  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-7xl">
    <div className=" bg-opacity-5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 flex items-center justify-center">
      <Webcam
        audio={false}
        height={600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
        className="rounded-xl border border-white/10"
        videoConstraints={videoConstraints}
      />
    </div>

    <div className=" bg-white bg-opacity-5 backdrop-blur-md rounded-2xl shadow-lg  flex items-center justify-center overflow-hidden">
      {cap ? (
        <img
          src={detected}
          alt="Captured"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <p className="text-gray-400 text-lg">No image captured yet</p>
      )}
    </div>
  </div>
    
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
          {plate} 
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
          {new Date().toLocaleString()} 
        </td>
      </tr>
    ))}

</tbody>
    </table>
  </div>
</div>

) : null}   
</div>

  )
}

export default WebcamCap
