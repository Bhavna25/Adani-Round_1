Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Bhavna25 
tsuraj225
/
nobel
Public
2
01
Code
Issues
Pull requests
2
Actions
Projects
Wiki
Security
Insights
nobel/app.js /
@tsuraj225
tsuraj225 Add files via upload
…
Latest commit 5f78df9 on Dec 19, 2019
 History
 1 contributor
35 lines (28 sloc)  788 Bytes
  
document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "prize.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      let prizes = JSON.parse(this.responseText);
      let output = "";

      var keys = Object.keys(prizes);
      keys.forEach(function(key) {
        prizes[key].forEach(function(prize) {
          output += `<ul>
            <li>year   :${prize.year}</li>
            <li>category  :${prize.category}</li>
          </ul>`;
        });
      });

      document.getElementById("output").innerHTML = output;
    }
  };

  xhr.onerror = function() {
    console.log("Request error...");
  };
  //send
  xhr.send();
}
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
