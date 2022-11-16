let userHistory: {}[] = [];
const setUserHistory = (newUserHistory: {}[]) => {
    userHistory = newUserHistory;
};

function getUserHistory(JSONPath: string) {
    const response = fetch(JSONPath);
    const userHistory = response.then((response) => response.json());
    userHistory.then((userHistory) => {
        setUserHistory(userHistory);
    });
}

const blabla = "teste"
blabla = 12


const JSONPath = "./userHistory.json";
getUserHistory(JSONPath);
setTimeout(() => {
    test();    
}, 2000);


