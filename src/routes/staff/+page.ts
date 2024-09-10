type Staff = {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
    avatar: string;
    dateOfBirth: string;
}

export async function load({ fetch }) {
    const staffURL = "http://localhost:3000/staff";    
    const response = await fetch(staffURL);
    const staff : Staff[] = await response.json();

    return {
        staff : staff
    }
}