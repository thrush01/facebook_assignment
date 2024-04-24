document.getElementById('upload-button').addEventListener('click', function() {
  document.getElementById('photo/video').click();
});

document.getElementById('save').addEventListener('click', function() {

  const user_name=document.getElementById('username1');
  const user_name2=document.getElementById('username2');
  const name=document.getElementById('updateUser').value;

  user_name.textContent=name;
  user_name2.textContent=name;

});

//////////////////////////////////////////////////////////////////////////////////////////////

function generatePostHTML(username, postImageSrc, profileImageSrc, dateTime) {
  // Create container element
  const container = document.createElement('div');
  container.classList.add('container-fluid', 'postStyle');

  // Create navigation element
  const nav = document.createElement('nav');
  nav.classList.add('d-flex', 'mt-2', 'justify-content-between', 'navPst');

  // Create profile image element
  const profileImg = document.createElement('img');
  profileImg.classList.add('img-fluid', 'max-auto', 'pstPic');
  profileImg.setAttribute('src', profileImageSrc);
  nav.appendChild(profileImg);

  // Create username element
  const usernameElem = document.createElement('h6');
  usernameElem.id = 'username';
  usernameElem.textContent = username;
  nav.appendChild(usernameElem);

  // Create date time element
  const dateTimeElem = document.createElement('div');
  dateTimeElem.classList.add('dTimem');
  dateTimeElem.id = 'dTime';
  dateTimeElem.textContent = dateTime;
  nav.appendChild(dateTimeElem);

  // Append navigation to container
  container.appendChild(nav);

  // Create horizontal rule element
  const hr = document.createElement('hr');
  container.appendChild(hr);

  // Create post content div
  const postContent = document.createElement('div');
  postContent.classList.add('postContent');

  // Create post image element
  const postImg = document.createElement('img');
  postImg.classList.add('postPic', 'igm-responsive', 'img-fluid');
  postImg.setAttribute('src', postImageSrc);
  postContent.appendChild(postImg);

  // Create like section div
  const likeDiv = document.createElement('div');
  likeDiv.classList.add('like');

  // Create row div for like buttons
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row', 'mt-5', 'ml-5', 'pl-5');

  // Create navigation for like buttons
  const likeNav = document.createElement('nav');
  likeNav.classList.add('likeBtn');

  // Create button group for like buttons
  const btnGroup = document.createElement('div');
  btnGroup.classList.add('btn-group');
  btnGroup.setAttribute('role', 'group');

  // Create like button
  const likeBtn = document.createElement('button');
  likeBtn.setAttribute('type', 'button');
  likeBtn.classList.add('btn', 'btn-outline-primary', 'bg-light');
  likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i>Like';
  btnGroup.appendChild(likeBtn);

  // Create comments button
  const commentBtn = document.createElement('button');
  commentBtn.setAttribute('type', 'button');
  commentBtn.classList.add('btn', 'btn-outline-primary', 'bg-light');
  commentBtn.innerHTML = '<i class="fas fa-comment"></i>Comments';
  btnGroup.appendChild(commentBtn);

  // Create share button
  const shareBtn = document.createElement('button');
  shareBtn.setAttribute('type', 'button');
  shareBtn.classList.add('btn', 'btn-outline-primary', 'bg-light');
  shareBtn.innerHTML = '<i class="fas fa-share"></i>Share';
  btnGroup.appendChild(shareBtn);

  // Append button group to navigation
  likeNav.appendChild(btnGroup);

  // Append navigation to row
  rowDiv.appendChild(likeNav);

  // Append row to like div
  likeDiv.appendChild(rowDiv);

  // Append like div to post content
  postContent.appendChild(likeDiv);

  // Append post content to container
  container.appendChild(postContent);

  // Return generated HTML
  return container.outerHTML;
}



/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function appendPostToContainer(username, postImageSrc, profileImageSrc, dateTime) {
  var generatedHTML = generatePostHTML(username, postImageSrc, profileImageSrc, dateTime);
  document.getElementById('midContent').innerHTML += generatedHTML;
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function updateDateTime() {
  var container = document.getElementById('dTime');
  var now = new Date();
  var date = now.toDateString();
  var time = now.toLocaleTimeString();
  container.innerHTML = '<p>' + date + '</p><p>' + time + '</p>';
}


////////////////////////////////////////////////////////////////////////////////
document.getElementById('postBtn').addEventListener('click', function() {
  // Call the function to append the post HTML to the container
  const profilePic=document.getElementById('profilePic');
  const pc=profilePic.getAttribute('src');
  //const username= document.getElementsByClassName('username').value;

  appendPostToContainer('John Doe', 'https://wallpapercave.com/wp/wp3158676.jpg', pc,updateDateTime() );
});

///////////////////////////////////////////////////////////////////////////////////////
  
 






