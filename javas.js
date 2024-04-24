document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('photo/video').click();
  });
    
   
  function updateDateTime() {
    var container = document.getElementById('dTime');
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    container.innerHTML = '<p>' + date + '</p><p>' + time + '</p>';
  }
  
  // Update date and time initially and then every second
  updateDateTime();
  
  
  
  