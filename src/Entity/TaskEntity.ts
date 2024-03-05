export interface Item {
    key: Date;
    text: string;
}

export interface TaskEntity {
    item: Item;
    deleteItem: (key: Date) => void;
}
