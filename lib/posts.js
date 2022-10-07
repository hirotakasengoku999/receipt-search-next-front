import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getAllPostIds() {
    const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}app/ReceiptCodes/`));
    const posts = await res.json();

    return posts.map((post) => {
        return {
            params: {
                id: String(post.ReceiptCode),
            },
        };
    });
}

export async function getPostData(ReceiptCode) {
    const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}app/ReceiptCodes/${ReceiptCode}`));
    const post = await res.json();

    return {
        post,
    };
}

export async function Upload(formData) {
    try {
        console.log("start upload");
        const res = await axios.post(`${process.env.NEXT_PUBLIC_RESTAPI_URL}app/upload/`, formData);
        console.log("end")
        console.log(res);
        return(res.data);
    } catch (e) {
        console.log(e);
        return(e)
    }
};