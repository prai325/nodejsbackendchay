import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dnlnbbxlr",
  api_key: process.env.CLOUDINARY_API_KEY || "229858222546968", 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        // File has been uploaded successfully
        console.log("File uploaded successfully:", response.url);
        // Optionally, you can delete the local file after uploading
        fs.unlinkSync(localFilePath);
        // Return the URL of the uploaded file        
        return response;        
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
    }
}
export { uploadOnCloudinary };
