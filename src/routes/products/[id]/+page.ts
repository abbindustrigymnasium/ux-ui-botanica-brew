type Cake = {
    id: number;
    title: string;
    previewDescription: string;
    detailDescription: string;
    image: string;
    price: number;
}

export async function load({ fetch, params }) {
    const cakeURL = `http://localhost:3000/cakes/${params.id}`;
    const response = await fetch(cakeURL);
    const cake: Cake = await response.json();

    return {
        cake: cake
    }
}