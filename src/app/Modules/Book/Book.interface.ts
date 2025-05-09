enum Category {
  Fiction,
  Science,
  physics,
  Poetry,
  Religious,
}

export interface IBook {
  title: string;
  author: string;
  category: keyof typeof Category;
  description: string;
  quantity: number;
  price: number;
  inStock: boolean;
  isDeleted: boolean;
}





// <<<<<<< HEAD
// export type TBook ={
//     title: string;
//     author: string;
//     price: number;
//     description: string;
//     category: "Fiction"| "Science"| "SelfDevelopment"| "Poetry"| "Religious";
//     quantity: number;
//     inStock: boolean;
//     isDeleted?: boolean;
// }
// =======
// >>>>>>> 489b2e9b65df89655bb35db603c0584e8e5bfe91
