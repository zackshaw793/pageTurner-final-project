// A mock API to simulate async calls to a database.

let mockReadingListDatabases = [];

export const getReadingList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockReadingListDatabases);
        }, 1000);
    });
}

export const addToReadingList = (book) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockReadingListDatabases.push(book));
        })
    })
}

export const removeFromReadingList = (removedBookId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            mockReadingListDatabases = mockReadingListDatabases.filter(book => book.key !== removedBookId)
            resolve(mockReadingListDatabases);
        })
    })
}