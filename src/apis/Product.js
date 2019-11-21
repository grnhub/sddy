async function StateUpdate(pid) {
    url = "http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/product/" + pid + "/mystate";
    await fetch(url, {
      method: "PUT"
    }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);  
    });
}

async function InterestUpdate(pid) {
    url = "http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/product/" + pid + "/interest";
    await fetch(url, {
        method: "PUT"
        }).then(function(response) {
            if (!(200 <= resp.status < 300)) {
                return false;
              } else {
                return response.json();
              }
        }).then(function(data) {
            console.log(data);
        });
}

    
export { StateUpdate, InterestUpdate };