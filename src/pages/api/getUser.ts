export interface User {
    id: number;
    name: string;
    department: string;
    avatar: string;
}

export const getUser = async (): Promise<User> => {
    const response = await fetch('/api/user');
    const data: User = await response.json();
    return data;
}
 