const url = 'https://api.cloudinary.com/v1_1/dnfypusiy/image/upload'


const uploadImage = async(image) => {

    // const handleFileUpload = async(event) => {
    //     const file = event.target.files[0];

    //     if (!file) return;

        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "first_time");
        data.append("cloud_name", "dnfypusiy");

        // const res = await fetch("https://api.cloudinary.com/v1_1/dnfypusiy/image/upload", {
        //     method: "POST",
        //     body: data
        // });

        const dataResponse = await fetch(url, {
            method: "POST",
            body: data
        })

        return dataResponse.json()

        // const uploadImageURL = await res.json();
        // console.log(uploadImageURL); // You can handle the uploaded image URL here
    // };

    // return (
    //     <div>
    //         <input type="file" className="file-input" onChange={handleFileUpload}></input>
    //     </div>
    // );
}

export default uploadImage;
