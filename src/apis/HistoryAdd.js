
// newHistory is history object.
async function addHistory(pid, newHistory) {
  // 1. 이미 있는 히스토리 불러오기
  var obj = {
      dapp_name: "blockit",
      author: "blockit",
      permlink: pid
  }
  var objJson = JSON.stringify(obj);


  var r = [];

  ///api/getDappContent post dapp_name=(string)&author=(string)&permlink=(string)
  var d = [];
  url = "http://developer.futurepia.io:3032/api/getDappContent";
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json"
    },
    body: objJson
  }).then(function(response) {
      return response.json();
    }).then(function(data) {
      if(data.result != null) r = JSON.parse(data.result.body);
      
  });

  // ↓ history object sample ↓
  // var robj = {
  //     id: '87',
  //     userMemo : '상품을 잘 사용했습니다',
  //     rentDate : '2018-01-25',
  //     returnDate : '2018-02-08',
  //     lender : '이용용',
  //     repairDate : '2018-05-05',
  //     repairMemo : '기스수리',
  //     rentalDays : "10"
  // };
  // 2. 히스토리에 새 히스토리 붙이기
  r.push(newHistory);

  //////////////////////////

  // 3. POST
  var obj2 = {
      dapp_name: "blockit",
      author: "blockit",
      pwd: "qmffhrdlt",
      permlink: pid,
      title:"History",
      body: JSON.stringify(r)
  }
  var objJson2 = JSON.stringify(obj2);

  url = "http://developer.futurepia.io:3032/api/commentDapp";
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json"
    },
    body: objJson2
  }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      console.log("History update success");
  });
}


// update 
async function updateHistory(pid, rdate, rmemo) {
  // 1. 이미 있는 히스토리 불러오기
  var obj = {
      dapp_name: "blockit",
      author: "blockit",
      permlink: pid
  }
  var objJson = JSON.stringify(obj);


  var r = [];

  ///api/getDappContent post dapp_name=(string)&author=(string)&permlink=(string)
  var d = [];
  url = "http://developer.futurepia.io:3032/api/getDappContent";
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json"
    },
    body: objJson
  }).then(function(response) {
      return response.json();
    }).then(function(data) {
      if(data.result != null) r = JSON.parse(data.result.body);
      
  });

  // ↓ history object sample ↓
  // var robj = {
  //     id: '87',
  //     userMemo : '상품을 잘 사용했습니다',
  //     rentDate : '2018-01-25',
  //     returnDate : '2018-02-08',
  //     lender : '이용용',
  //     repairDate : '2018-05-05',
  //     repairMemo : '기스수리',
  //     rentalDays : "10"
  // };
  // 2. 최근 히스토리에 수리내역 추가하기
  var len = r.length;
  //console.log(len);
  if(len != 0) {
    var index = len - 1;
    r[index].repairDate = rdate;
    r[index].repairMemo = rmemo;
  }
  //////////////////////////

  //// 3. 최종 UPDATE /// POST
  var obj2 = {
      dapp_name: "blockit",
      author: "blockit",
      pwd: "qmffhrdlt",
      permlink: pid,
      title:"History",
      body: JSON.stringify(r)
  }
  var objJson2 = JSON.stringify(obj2);

  url = "http://developer.futurepia.io:3032/api/commentDapp";
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json"
    },
    body: objJson2
  }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      console.log("History update success");
  });
}
  
export { addHistory, updateHistory };