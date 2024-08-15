import {Cloudinary} from "cloudinary-core"

const cloudinary = new Cloudinary({
    cloud_name: import.meta.env.VITE_APP_CLOUD_NAME_CLOUDINARY,
    api_key: import.meta.env.VITE_APP_CLOUD_NAME_KEY,
    api_secret: import.meta.env.VITE_APP_CLOUD_NAME_SECRET,
})



const url = 'https://api.cloudinary.com/v1_1/dnfypusiy/image/upload'

const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","mern_product")


    // const dataResponse = await fetch(url,{
    //     method : "post",
    //     body : formData
    // })

    // return dataResponse.json()

    const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_APP_CLOUD_NAME_CLOUDINARY}/image/upload`, {
        method: 'POST',
        body: formData
    })

    const data = await response.json()

    return data;

}

export default uploadImage