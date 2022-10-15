const createReceiptKey = (id: number) => `live:signup-receipt:${id}`;

export const saveReceipt = (id: number, receipt: string) => {
    let key = createReceiptKey(id);
    window.localStorage.setItem(key, receipt);
}

export const loadReceipt = (id: number) => {
    let key = createReceiptKey(id);
    return window.localStorage.getItem(key);
}