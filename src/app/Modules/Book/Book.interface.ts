export type TBook ={
    title: string;
    author: string;
    price: number;
    description: string;
    category: "Fiction"| "Science"| "SelfDevelopment"| "Poetry"| "Religious";
    quantity: number;
    inStock: boolean;
    isDeleted?: boolean;
}