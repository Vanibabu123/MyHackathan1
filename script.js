//Definition of the funtion getData() for getting user repositories
async function getData() {
    try {
        var userData = await fetch("https://api.github.com/users/Vanibabu123/repos"); //("https://api.github.com/users/username/repos")
        var repoList = await userData.json();
        console.log(repoList);
		myDisplay(repoList);  // using mydisplay funtion, access the requirements repos, owner image, fork and stars count
     } catch(error) {
        alert("Something went wrong");
     }
}

getData();  //Calling getdata() and get the list of user repositories in json format


// Convert single array to two dimentional array
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
        for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

function myDisplay(repoList) {
    var tableRepo = document.createElement("TABLE");
    var matrix = listToMatrix(repoList, 5);
     for (var i = 0; i < 4; i++) {
        var trow = document.createElement("TR");
         for (var j = 0; j < 5; j++) {
		var tdCell = document.createElement("TD");
        tdCell.innerHTML = `<div class="container">
    <div class="card" style="width: 18rem;">
     <div class="card text-center">
     <div class="card bg-dark text-white">
    <div class="card-header">Repository Name: ${matrix[i][j].name}</div>
  </div>
      <div class="card bg-secondary text-white">
    <div class="card-body">
  <img src=${matrix[i][j].owner.avatar_url} class="card-img-top" style="width: 14rem;">
      <h6 class="card-title">Fork: ${matrix[i][j].forks_count}</h6></br>
    <h6 class="card-title">Star: ${matrix[i][j].stargazers_count}</h6></br>
        <a href="${matrix[i][j].html_url}" class="btn btn-primary">Repository Link</a>
      </div> 
    </div>
</div>
  </div>
</div>`;

trow.appendChild(tdCell);
}
tableRepo.appendChild(trow);
}
document.body.appendChild(tableRepo);
}