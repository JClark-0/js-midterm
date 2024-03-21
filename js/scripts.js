let button = document.getElementById('GetUsers');

button.addEventListener("click", getUserData);



function getUserData() {
  var url = "https://reqres.in/api/users";
  var xhr = new XMLHttpRequest();
 
  xhr.onload = function() {
        	if (xhr.status === 200) {
    
                const authors = JSON.parse(xhr.responseText);
                //format users

                const ul = document.createElement('ul');
                for (user of authors.data) {

                    let li = document.createElement('li'),
                        img = document.createElement('img'),
                        span = document.createElement('span');

                    img.src = user.avatar;
                    span.innerHTML = user.first_name + " " + user.last_name;

                    li.appendChild(img);
                    li.appendChild(span);
                    ul.appendChild(li);

                }

            document.body.appendChild(ul);

        	} else {
      			document.getElementById("Output").innerHTML = "There was an error";
        	}

  }
  xhr.open("GET", url, true);
  xhr.send();
}