interface Category{
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev:string;
    _ref: string;
    _type:'category';
    slug:{
        _type: 'slug';
        current: string;   
    };
    title: string;
}

interface Product{
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev:string;
    _type:'product';
    slug:{
        _type: 'slug';
        current: string;   
    };
    description:blockContent;
    category: {
        _type: 'reference';
        _ref: string;
    };
    price: number;
    title: string;
    image: Image[];
}