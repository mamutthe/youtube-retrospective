/* {
        "header": "YouTube",
        "title": "Watched Taylor Dayne - Tell It to My Heart",
    "titleUrl": "https://www.youtube.com/watch?v\u003dUd6sU3AclT4",
    "subtitles": [{
        "name": "TaylorDayneVEVO",
        "url": "https://www.youtube.com/channel/UCiw7foSiavmt35KYp5JZNjg"
    }],
    "time": "2022-11-11T14:37:26.710Z",
    "products": ["YouTube"],
    "activityControls": ["YouTube watch history"]
} */
type ytVideoTYPE = {
  header: string;
  title: string;
  titleUrl: string;
  subtitles: {}[];
  time: string;
  productus: string[];
  activityControls: string[];
};
type userHistoryTYPE = ytVideoTYPE[];

const JSONPath = "./userHistory.json";
const year = 2022;
let historyFilteredByYear: userHistoryTYPE;

function setFilteredHistory(newUserHistory: userHistoryTYPE) {
  historyFilteredByYear = newUserHistory;
}

function getUserHistory(JSONPath: string) {
  const response = fetch(JSONPath);
  const userHistory = response.then((response) => response.json());
  return userHistory;
}

function filterHistoryByYear(year: number, userHistory: userHistoryTYPE) {
  const historyFilteredByYear: userHistoryTYPE = userHistory.filter(
    (ytVideo: ytVideoTYPE) => {
      if (ytVideo.time.includes(`${year}`) === true) {
        return ytVideo;
      }
    }
  );
  return historyFilteredByYear;
}

getUserHistory(JSONPath)
  .then((userHistory) => {
    setFilteredHistory(filterHistoryByYear(year, userHistory));
  })
  .finally(() => {
    console.log(historyFilteredByYear);
  });
/* 
const MAX_CHAR = 26;

class Trie {
  count: number;
  node: any[];

  constructor() {
    this.count = 0;
    this.node = new Array(MAX_CHAR).fill(null);
  }
}

function insertNode(root: any, string: string) {
  let temp = root;

  for (let i = 0; i < string.length; i++) {
    let index = string.charCodeAt(i) - "a".charCodeAt(0);

    if (!root.node[index]) {
      root.node[index] = new Trie();
    }
    root = root.node[index];
  }
  root.count += 1;
  return temp;
}

function search(root:any,s:string){
  let n = s.length
   
  for(let i=0;i<n;i++){
      let index = s.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!root.node[index])
          return 0
      root = root.node[index]
  }
  return root.cnt
}

function answerQueries(arr:any, n:any, q:any, m:any){
 
  let root = new Trie()

  // inserting in Trie
  for(let i = 0; i < n; i++){
      root = insertNode(root, arr[i])
  }

  // searching the strings in Trie
  for(let i = 0; i < m; i++){
      document.write(search(root, q[i]),"</br>")
  }
}

let arr = ["aba", "baba", "aba", "xzxb"]
let n = arr.length
 
let q = ["aba", "xzxb", "ab"]
let m = q.length
 
console.log(answerQueries(arr, n, q, m)) */

const MAX_CHAR = 26;
class Trie {
  count: number;
  node: any[];
  constructor() {
    this.count = 0;
    this.node = new Array(MAX_CHAR).fill(null);
  }
}

function insertStringToTrie(root: Trie, string: string) {
  for (let i = 0; i < string.length; i++) {
    let index = string.charCodeAt(i) - "a".charCodeAt(0);

    if (!root.node[index]) {
      root.node[index] = new Trie();
    }
    root = root.node[index];
  }
  root.count += 1;
  return root;
}

function search(root: Trie, string: string) {
  for (let i = 0; i < string.length; i++) {
    let index = string.charCodeAt(i) - "a".charCodeAt(0);

    if (!root.node[index]) return 0;
    root = root.node[index];
  }

  return root.count;
}

function answerQueries(array: string[],n:number, query: string[], m:number) {
  let root = new Trie();

  // inserting in Trie
  for (let i = 0; i < array.length; i++) {
    root = insertStringToTrie(root, array[i]);
  }

  // searching the strings in Trie
  for (let i = 0; i < query.length; i++) {
    document.write(search(root, query[i]).toString(), "</br>");
  }
}

// Driver code

let array = ["aba", "baba", "aba", "xzxb"];
let n = array.length
let query = ["aba", "xzxb", "ab"];
let m = query.length
answerQueries(array,n, query,m);

// This code is contributed by shinjanpatra
