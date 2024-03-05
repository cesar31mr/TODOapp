export interface Item {
    key: Date;
    text: string;
}

export interface TaskEntity {
    items: Item[];
    deleteItem: (key: Date) => void;
}
