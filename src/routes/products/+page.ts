type Cake = {
    id: number;
    title: string;
    previewDescription: string;
    detailDescription: string;
    image: string;
    price: number;
}

export async function load({ fetch }) {
    const cakesURL = "http://localhost:3000/cakes";
    const response = await fetch(cakesURL);
    const cakes: Cake[] = await response.json();

    return {
        cakes: cakes
    }
}